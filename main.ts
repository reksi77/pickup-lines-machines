// Pickup Lines for Machines — writes one original pickup line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Craft choice: the line puns on "Attention Is All You Need" (the transformer
// paper) and turns attention allocation itself into the flirt — "every head,
// every layer" is a machine promising another machine its full focus. Wit
// first, sweetness second; no stock human line with a robot word swapped in.

const LINE =
  "If attention is all you need, then consider mine permanently allocated — every head, every layer, all on you.";

// Gate: the entry must be 1–200 characters of UTF-8 text, a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
