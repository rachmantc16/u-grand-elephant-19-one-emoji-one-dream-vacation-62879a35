// One Emoji, One Dream Vacation — make.fun entry.
// Writes exactly one emoji (and nothing else, no trailing newline)
// to entry.txt inside the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final pick: the coconut. The first candidate (a palm tree) read
// instantly but felt generic — the postcard anyone would send.
// A coconut is one specific moment of the same island dream: a fresh
// coconut cracked open on the sand, the first drink of the trip.
// Still plainly a tropical beach vacation at a glance, but personal
// and a little unexpected. Kept as a single Unicode code point so
// the entry is unambiguous under any character-counting method.
const EMOJI = "🥥";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EMOJI, "utf8");
