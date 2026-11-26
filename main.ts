/**
 * The Self-Checkout Is Judging You — entry writer.
 *
 * Writes one line (1-200 chars, UTF-8) in the voice of a smug
 * self-checkout machine to /output/entry.txt. Deterministic: a fixed
 * constant, no clock, no randomness, no network.
 *
 * The line is fixed at build time so the graded artifact is byte-identical
 * across both grading runs (no clock, no randomness, no network, no env read
 * beyond MAKEFUN_OUTPUT_DIR, which only redirects where the file lands).
 *
 * The output directory comes from MAKEFUN_OUTPUT_DIR when set, else /output,
 * matching the program/v1 harness contract.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const LINE =
  "Please place twelve yoghurts in the bagging area. Not that flimsy basket. I saw the ice cream. I saw where you hid it. Bleep.";

export function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
}

main();
