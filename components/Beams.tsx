"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type BeamsProps = {
  beamWidth?: number;
  beamHeight?: number;
  beamNumber?: number;
  lightColor?: string;
  speed?: number;
  noiseIntensity?: number;
  scale?: number;
  rotation?: number;
};

type BeamsShaderProps = Required<BeamsProps>;

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec3 uLightColor;
uniform float uBeamWidth;
uniform float uBeamHeight;
uniform float uBeamNumber;
uniform float uSpeed;
uniform float uNoiseIntensity;
uniform float uScale;
uniform float uRotation;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec2 uv = vUv * 2.0 - 1.0;
  float angle = radians(uRotation);
  mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  uv = rot * uv;
  uv *= max(uScale, 0.01);

  float t = uTime * uSpeed * 0.2;
  float beams = 0.0;
  float width = mix(0.018, 0.12, clamp(uBeamWidth / 10.0, 0.0, 1.0));

  for (int i = 0; i < 64; i++) {
    float fi = float(i);
    if (fi >= uBeamNumber) {
      continue;
    }

    float count = max(uBeamNumber - 1.0, 1.0);
    float centerX = mix(-1.35, 1.35, fi / count);
    float drift = sin(t + fi * 1.37) * 0.22;
    float distToBeam = (uv.x - centerX + drift) / width;
    float beam = exp(-distToBeam * distToBeam);
    float pulse = 0.45 + 0.55 * sin(uv.y * (uBeamHeight * 0.16) + t * 2.0 + fi * 0.9);
    beams += beam * max(pulse, 0.0);
  }

  float grain = hash(uv * 8.0 + t) - 0.5;
  beams += grain * uNoiseIntensity * 0.12;
  beams = clamp(beams, 0.0, 1.35);

  vec3 color = uLightColor * beams;
  float alpha = clamp(beams * 0.88, 0.0, 0.9);

  gl_FragColor = vec4(color, alpha);
}
`;

function BeamsShader({
  beamWidth,
  beamHeight,
  beamNumber,
  lightColor,
  speed,
  noiseIntensity,
  scale,
  rotation,
}: BeamsShaderProps) {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uLightColor: { value: new THREE.Color(lightColor) },
      uBeamWidth: { value: beamWidth },
      uBeamHeight: { value: beamHeight },
      uBeamNumber: { value: beamNumber },
      uSpeed: { value: speed },
      uNoiseIntensity: { value: noiseIntensity },
      uScale: { value: scale },
      uRotation: { value: rotation },
    }),
    [beamHeight, beamNumber, beamWidth, lightColor, noiseIntensity, rotation, scale, speed],
  );

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function Beams({
  beamWidth = 4.4,
  beamHeight = 20,
  beamNumber = 27,
  lightColor = "#ffecd5",
  speed = 2,
  noiseIntensity = 2,
  scale = 0.24,
  rotation = 30,
}: BeamsProps) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 1], fov: 50 }}
      >
        <BeamsShader
          beamWidth={beamWidth}
          beamHeight={beamHeight}
          beamNumber={beamNumber}
          lightColor={lightColor}
          speed={speed}
          noiseIntensity={noiseIntensity}
          scale={scale}
          rotation={rotation}
        />
      </Canvas>
    </div>
  );
}
