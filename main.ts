// Dad Joke Showdown — one dad joke, written to /output/entry.txt.
//
// The whole entry is a single line of UTF-8 text: 1-200 characters, one line,
// no trailing newline. Node stdlib only; no network, no reads outside this file.
//
// FINAL pick — V2 (trimmed), winner of the local pairwise duel 4/4 (verdicts.md):
// beat V1 (band/gig), V3 (guitar strings), V4 (hide-and-seek) and V5 (thesaurus).
// The advisor's cut dropped the "My wife asked why" frame, and the gate was
// verified by running this file twice: 76 UTF-8 characters / 76 bytes, one line,
// no trailing newline, byte-identical across runs. The homophone leaf/leave
// reads identically aloud — which is the joke's fresh edge.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I talk to my plants because they're the only ones who never leaf me on read.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
}

main();
