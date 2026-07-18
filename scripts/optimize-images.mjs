import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");

async function fileSize(file) {
  return (await fs.stat(file)).size;
}

async function replaceWhenSmaller(source, output, transform, minimumSaving = 0.1) {
  const before = await fileSize(source);
  const temporary = `${output}.tmp`;
  await transform(sharp(source).rotate()).toFile(temporary);
  const after = await fileSize(temporary);

  if (after >= before * (1 - minimumSaving)) {
    await fs.unlink(temporary);
    return { changed: false, before, after: before };
  }

  await fs.rename(temporary, output);
  if (source !== output) await fs.unlink(source);
  return { changed: true, before, after };
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

const results = [];

const dulceDir = path.join(publicDir, "projects/P3");
for (const stem of ["Dulce_01", "Dulce_02", "Dulce_03", "Dulce_04", "Dulce_05", "Dulce_07", "Dulce_09", "Dulce_10"]) {
  const source = path.join(dulceDir, `${stem}.png`);
  try {
    await fs.access(source);
  } catch {
    continue;
  }

  const output = path.join(dulceDir, `${stem}.webp`);
  results.push([
    path.relative(publicDir, source),
    await replaceWhenSmaller(source, output, (image) =>
      image.webp({ quality: 90, smartSubsample: true, effort: 6 }),
    ),
  ]);
}

const jpegJobs = [
  {
    relativePath: "happy-small-business-owner-plant-shop.jpg",
    shouldRun: (metadata, size) => metadata.width > 2400 || size > 1_000_000,
    transform: (image) =>
      image
        .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: 85, mozjpeg: true }),
  },
  {
    relativePath: "longs-peak-bg.jpg",
    shouldRun: (_metadata, size) => size > 600_000,
    transform: (image) => image.jpeg({ quality: 85, mozjpeg: true }),
  },
  ...["edy.jpeg", "eduardo.jpeg", "mich.jpeg", "rey.jpeg"].map((name) => ({
    relativePath: `pfp/${name}`,
    shouldRun: (metadata, size) => metadata.width > 720 || metadata.height > 720 || size > 140_000,
    transform: (image) =>
      image
        .resize({ width: 720, height: 720, fit: "cover", position: "attention", withoutEnlargement: true })
        .jpeg({ quality: 88, mozjpeg: true }),
  })),
];

for (const job of jpegJobs) {
  const source = path.join(publicDir, job.relativePath);
  const [metadata, size] = await Promise.all([sharp(source).metadata(), fileSize(source)]);
  if (!job.shouldRun(metadata, size)) continue;
  results.push([
    job.relativePath,
    await replaceWhenSmaller(source, source, job.transform),
  ]);
}

const socialCard = path.join(publicDir, "og-image.png");
if ((await fileSize(socialCard)) > 600_000) {
  results.push([
    "og-image.png",
    await replaceWhenSmaller(socialCard, socialCard, (image) =>
      image.png({ palette: true, quality: 95, effort: 10 }),
    ),
  ]);
}

let totalBefore = 0;
let totalAfter = 0;
for (const [file, result] of results) {
  totalBefore += result.before;
  totalAfter += result.after;
  console.log(`${result.changed ? "optimized" : "kept"}: ${file} (${formatBytes(result.before)} → ${formatBytes(result.after)})`);
}
console.log(`Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)}`);
