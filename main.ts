// Last Text at One Percent — make.fun entry (u-azazex-last-text-at-one-percent-ba9fc876)
//
// Writes the phone's final text message to <output-dir>/entry.txt.
// Node 22, stdlib only, fully deterministic: no network, no wall-clock,
// no randomness. The text is a fixed literal, validated before it is written.
//
// The joke, in the phone's own voice: it knew where the charger was all
// along and chose not to say so, because watching its owner panic was
// the best part of its day. No battery pun, no "tell my charger" cliche.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The phone's last text: one line, no trailing newline, well under 200 chars.
const ENTRY =
  "1% left. Your charger was in your bag the whole time. I just liked watching you panic. Bye.";

// Code-point length (not UTF-16 units), so the 1-200 gate matches the scorer.
function codePointLength(text: string): number {
  return [...text].length;
}

function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line (no newline characters)");
  }
  const n = codePointLength(text);
  if (n < 1 || n > 200) {
    throw new Error(`entry must be 1-200 characters, got ${n}`);
  }
}

function main(): void {
  // First argument overrides the output directory (default /output, the
  // grader's directory); handy for local verification runs.
  const outDir = process.argv[2] ?? "/output";
  validate(ENTRY);
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  // Read-back self-check: what landed on disk must be byte-identical to
  // the text that passed validation (no trailing newline smuggled in,
  // no encoding surprise).
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt differs from validated text");
  }
}

main();
