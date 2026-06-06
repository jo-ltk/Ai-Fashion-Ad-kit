import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const isVercel = Boolean(process.env.VERCEL || process.env.VERCEL_ENV);

if (!isVercel) {
  console.log("Skipping Vercel build verification (not a Vercel build).");
  process.exit(0);
}

const outputDir = ".vercel/output";
const checks = [
  [join(outputDir, "config.json"), "Vercel Build Output config"],
  [join(outputDir, "functions", "__server.func", "index.mjs"), "SSR server function"],
  [join(outputDir, "functions", "__server.func", ".vc-config.json"), "Function runtime config"],
  [join(outputDir, "static"), "Static assets directory"],
];

console.log("\n=== Vercel build verification ===");
console.log("VERCEL:", process.env.VERCEL ?? "(not set)");
console.log("VERCEL_ENV:", process.env.VERCEL_ENV ?? "(not set)");
console.log("Output dir:", outputDir);

let failed = false;

for (const [path, label] of checks) {
  const ok = existsSync(path);
  console.log(`${ok ? "OK" : "MISSING"} - ${label}: ${path}`);
  if (!ok) failed = true;
}

if (existsSync(join(outputDir, "config.json"))) {
  const config = JSON.parse(readFileSync(join(outputDir, "config.json"), "utf8"));
  const routes = config.routes ?? [];
  console.log("Routes:", routes.length);
  console.log("Catch-all route:", routes.find((route) => route.dest === "/__server") ?? "(not found)");
}

if (existsSync(outputDir)) {
  console.log("Top-level output entries:", readdirSync(outputDir).join(", "));
}

if (failed) {
  console.error("\nBuild verification FAILED. Vercel will return 404 for all routes.");
  process.exit(1);
}

console.log("\nBuild verification passed.\n");
