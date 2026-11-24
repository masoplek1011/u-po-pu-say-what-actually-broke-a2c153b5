import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Angle: a stale cache still believes the database lives on a laptop under
// someone's desk. The joke lands because the failure is named plainly
// (stale cache, wrong location) and the image is one anyone can repeat.
// Tightened: "Our cache" owns the blame, "That laptop went home" is the
// punchline, and the next step is a concrete retry, not a shrug.
const line =
  "Our cache still thinks the database lives on a laptop under someone's desk. That laptop went home. Please try again in a minute.";

// Gate: one line, 1-200 characters, no trailing newline.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be a single line of 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
