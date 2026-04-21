"use client";

export default function CrossBorderLines() {
  return (
    <div className="flex items-center justify-center w-full py-4">
      <svg
        viewBox="0 0 240 210"
        fill="none"
        className="w-full max-w-[280px]"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="cbg-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="cbg-glow-sm" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="cbg-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a61b00" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#254566" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Path definitions — invisible, referenced by animateMotion */}
        <path id="cbg-pl" d="M 120 36 C 44 82, 44 132, 120 174" />
        <path id="cbg-pc" d="M 120 36 C 92 88, 148 122, 120 174" />
        <path id="cbg-pr" d="M 120 36 C 196 82, 196 132, 120 174" />

        {/* Visible static path lines */}
        <path d="M 120 36 C 44 82, 44 132, 120 174" stroke="url(#cbg-grad)" strokeWidth="1.2" strokeOpacity="0.3" />
        <path d="M 120 36 C 92 88, 148 122, 120 174" stroke="url(#cbg-grad)" strokeWidth="1" strokeOpacity="0.22" />
        <path d="M 120 36 C 196 82, 196 132, 120 174" stroke="url(#cbg-grad)" strokeWidth="1.2" strokeOpacity="0.3" />

        {/* Colorado node */}
        <circle cx="120" cy="36" r="13" stroke="#a61b00" strokeWidth="1" strokeOpacity="0.12">
          <animate attributeName="r" values="11;17;11" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.25;0;0.25" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="36" r="9" stroke="#a61b00" strokeWidth="1.5" strokeOpacity="0.35" />
        <circle cx="120" cy="36" r="5" fill="#a61b00" filter="url(#cbg-glow)" />

        {/* Mexico node */}
        <circle cx="120" cy="174" r="13" stroke="#254566" strokeWidth="1" strokeOpacity="0.12">
          <animate attributeName="r" values="11;17;11" dur="3.2s" repeatCount="indefinite" begin="1.6s" />
          <animate attributeName="stroke-opacity" values="0.25;0;0.25" dur="3.2s" repeatCount="indefinite" begin="1.6s" />
        </circle>
        <circle cx="120" cy="174" r="9" stroke="#254566" strokeWidth="1.5" strokeOpacity="0.3" />
        <circle cx="120" cy="174" r="5" fill="#254566" filter="url(#cbg-glow)" />

        {/* Labels */}
        <text
          x="120" y="18"
          textAnchor="middle"
          fontSize="7.5"
          fontFamily="var(--font-display), system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="3"
          fill="currentColor"
          fillOpacity="0.45"
        >
          COLORADO
        </text>
        <text
          x="120" y="196"
          textAnchor="middle"
          fontSize="7.5"
          fontFamily="var(--font-display), system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="3"
          fill="currentColor"
          fillOpacity="0.45"
        >
          MEXICO
        </text>

        {/* Animated dots — CO → MX (downward) */}
        <circle r="3.5" fill="#a61b00" filter="url(#cbg-glow-sm)">
          <animateMotion dur="2.6s" repeatCount="indefinite" begin="0s" calcMode="linear">
            <mpath href="#cbg-pl" />
          </animateMotion>
        </circle>
        <circle r="3" fill="#a61b00" fillOpacity="0.8" filter="url(#cbg-glow-sm)">
          <animateMotion dur="3.0s" repeatCount="indefinite" begin="1.0s" calcMode="linear">
            <mpath href="#cbg-pr" />
          </animateMotion>
        </circle>
        <circle r="2.5" fill="#a61b00" fillOpacity="0.55">
          <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.0s" calcMode="linear">
            <mpath href="#cbg-pc" />
          </animateMotion>
        </circle>

        {/* Animated dots — MX → CO (upward) */}
        <circle r="3.5" fill="#254566" filter="url(#cbg-glow-sm)">
          <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.4s" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
            <mpath href="#cbg-pr" />
          </animateMotion>
        </circle>
        <circle r="3" fill="#254566" fillOpacity="0.8" filter="url(#cbg-glow-sm)">
          <animateMotion dur="3.2s" repeatCount="indefinite" begin="0.4s" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
            <mpath href="#cbg-pl" />
          </animateMotion>
        </circle>
        <circle r="2.5" fill="#254566" fillOpacity="0.55">
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="2.8s" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
            <mpath href="#cbg-pc" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}
