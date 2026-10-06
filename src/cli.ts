// The URL generator is implemented separately from the browser-safe client.
import { runGenerator } from "./generator.js";
try {
  await runGenerator(process.argv.slice(2));
} catch (error) {
  console.error(error instanceof Error ? error.message : "Generation failed");
  process.exitCode = 2;
}
