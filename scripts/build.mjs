import { build } from "esbuild";
import { execFileSync } from "node:child_process";
import { readFile, writeFile, rm } from "node:fs/promises";
await rm("dist", { recursive: true, force: true });
execFileSync(
  "node",
  ["node_modules/typescript/bin/tsc", "-p", "tsconfig.json"],
  { stdio: "inherit" },
);
for (const format of ["esm", "cjs"])
  await build({
    entryPoints: ["src/index.ts"],
    outfile: `dist/index.${format === "esm" ? "js" : "cjs"}`,
    bundle: true,
    platform: "neutral",
    target: "es2022",
    format,
    packages: "bundle",
  });
for (const format of ["esm", "cjs"])
  await build({entryPoints:["src/node.ts"],outfile:`dist/node.${format === "esm" ? "js" : "cjs"}`,bundle:true,platform:"node",target:"node22",format,packages:"external"});
await build({
  entryPoints: ["src/cli.ts"],
  outfile: "dist/cli.js",
  bundle: true,
  platform: "node",
  target: "node22",
  format: "esm",
  packages: "external",
  banner: { js: "#!/usr/bin/env node" },
});
// CJS consumers need a declaration graph with CJS module identity as well.
for (const name of [
  "index",
  "types",
  "facade",
  "transport",
  "custom-fields",
  "schema",
  "metadata",
  "events",
  "event-protocol",
  "node",
]) {
  const content = (await readFile(`dist/${name}.d.ts`, "utf8")).replaceAll(
    /from "\.\/([^\"]+)\.js"/g,
    'from "./$1.cjs"',
  );
  await writeFile(`dist/${name}.d.cts`, content);
}
