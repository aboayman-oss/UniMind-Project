import { scanModuleBoundaries } from "./lib/module-boundaries";

const violations = await scanModuleBoundaries(process.cwd());

if (violations.length > 0) {
  for (const item of violations) {
    console.error(`${item.sourcePath}: ${item.code}: ${item.specifier}`);
    console.error(`  ${item.message}`);
  }
  process.exitCode = 1;
} else {
  console.log("Module-boundary verification passed.");
}
