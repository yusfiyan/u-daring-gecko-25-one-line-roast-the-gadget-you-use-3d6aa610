// One-Line Roast: The Gadget You Use Every Day
// Entry for make.fun bounty u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
// Writes exactly one original roast line (<= 200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "Every Sunday my phone sends me a screen-time report, judging me like a disappointed parent — the same parent who sold me the phone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 200
// characters, not only white space, on a single line.
const chars = [...ROAST];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${chars.length}`);
}
if (ROAST.trim().length === 0) {
  throw new Error("Roast must not be only white space");
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("Roast must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
