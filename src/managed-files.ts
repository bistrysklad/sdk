import { createHash } from "node:crypto";
import {
  cp,
  lstat,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
const manifestName = ".bistrysklad-generated.json";
const hash = (value: string) =>
  createHash("sha256").update(value).digest("hex");
async function noLinks(path: string): Promise<void> {
  const stat = await lstat(path).catch((error: NodeJS.ErrnoException) => {
    if (error.code === "ENOENT") return null;
    throw error;
  });
  if (!stat) return;
  if (stat.isSymbolicLink())
    throw new Error("Generator output must not contain symlinks");
  if (stat.isDirectory())
    for (const entry of await readdir(path)) await noLinks(join(path, entry));
}
export async function writeManaged(
  out: string,
  files: Record<string, string>,
  check: boolean,
  companyId: string,
): Promise<boolean> {
  const dir = resolve(out),
    parent = dirname(dir);
  if (dir === parent || dir === process.cwd())
    throw new Error("Use a dedicated generated output directory");
  // Check ancestors without traversing unrelated directories.
  for (let p = dir; ; p = dirname(p)) {
    const stat = await lstat(p).catch((error: NodeJS.ErrnoException) => {
      if (error.code === "ENOENT") return null;
      throw error;
    });
    if (stat?.isSymbolicLink())
      throw new Error("Generator output must not use symlinks");
    if (p === dirname(p)) break;
  }
  await noLinks(dir);
  const manifest =
    JSON.stringify(
      {
        formatVersion: 1,
        companyId,
        files: Object.fromEntries(
          Object.entries(files).map(([name, value]) => [name, hash(value)]),
        ),
      },
      null,
      2,
    ) + "\n";
  const expected = { ...files, [manifestName]: manifest };
  const read = (name: string) =>
    readFile(join(dir, name), "utf8").catch((error: NodeJS.ErrnoException) => {
      if (error.code === "ENOENT") return null;
      throw error;
    });
  const current = Object.fromEntries(
    await Promise.all(
      Object.keys(expected).map(async (name) => [name, await read(name)]),
    ),
  );
  const matches = Object.entries(expected).every(
    ([name, value]) => current[name] === value,
  );
  if (check || matches) return matches;
  const previousRaw = current[manifestName];
  const previous =
    previousRaw === null
      ? null
      : (JSON.parse(previousRaw) as {
          formatVersion: number;
          files: Record<string, string>;
          companyId: string;
        });
  if (
    previous &&
    (previous.formatVersion !== 1 ||
      !previous.files ||
      Object.keys(previous.files).sort().join() !==
        Object.keys(files).sort().join())
  )
    throw new Error("Invalid managed files manifest");
  if (previous && previous.companyId !== companyId)
    throw new Error(
      "This output belongs to another company; use a separate --out directory",
    );
  for (const name of Object.keys(files)) {
    if (
      current[name] !== null &&
      (!previous || hash(current[name]) !== previous.files[name])
    )
      throw new Error(
        `Refusing to overwrite edited or unmanaged file: ${name}`,
      );
  }
  await mkdir(parent, { recursive: true });
  const lock = dir + ".bistrysklad-lock";
  await mkdir(lock).catch(() => {
    throw new Error("Another generator is using this output directory");
  });
  let stage: string | undefined, backup: string | undefined;
  try {
    // Recheck after acquiring the lock to avoid racing another writer.
    for (const [name, value] of Object.entries(current))
      if ((await read(name)) !== value)
        throw new Error("Output changed while generating; rerun the command");
    stage = await mkdtemp(dir + ".bistrysklad-stage-");
    if (await lstat(dir).catch(() => null)) {
      await cp(dir, stage, { recursive: true });
      backup = stage + ".previous";
    }
    for (const [name, value] of Object.entries(expected))
      await writeFile(join(stage, name), value, { mode: 0o644 });
    if (backup) await rename(dir, backup);
    try {
      await rename(stage, dir);
      stage = undefined;
    } catch (error) {
      if (backup) {
        await rename(backup, dir);
        backup = undefined;
      }
      throw error;
    }
    if (backup) await rm(backup, { recursive: true, force: true });
  } finally {
    if (stage) await rm(stage, { recursive: true, force: true });
    await rm(lock, { recursive: true, force: true });
  }
  return true;
}
