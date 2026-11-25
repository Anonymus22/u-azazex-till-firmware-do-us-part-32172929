// Till Firmware Do Us Part — a robot's wedding vow.
// Deterministic: writes the same single sentence to /output/entry.txt on every run.
// Standard library only. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The vow pledges through the robot's own hardware trials: updates are its
// patches, a dead battery is its own power failing, and a midnight reboot is
// its own restart — each image is a thing that happens to the speaker, not
// to the partner, which is what makes the vow a robot's and not a human's.
const VOW =
  "I vow to stand beside you through every update, every dead battery and every midnight reboot, till firmware do us part.";

// The entry is one line; fail loudly if it ever grows past the 200-char limit.
if (VOW.length > 200) {
  throw new Error(`VOW is ${VOW.length} characters, over the 200-char limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW + "\n", "utf8");
