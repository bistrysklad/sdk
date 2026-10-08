import {execFileSync} from 'node:child_process';
import {mkdtemp,rm,readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const dir=await mkdtemp(join(tmpdir(),'bistrysklad-package-'));
try {
 const output=execFileSync('npm',['pack','--json','--pack-destination',dir],{encoding:'utf8'});
 const [packed]=JSON.parse(output.slice(output.indexOf('[')));
 const allowed=/^(dist\/[^/]+\.(js|cjs|d\.ts|d\.cts)|docs\/[a-z.]+\.md|examples\/(README\.md|index\.html|server\.ts|integration\.ts)|package\.json|README\.md|LICENSE|CHANGELOG\.md)$/;
 for(const {path}of packed.files)if(!allowed.test(path))throw new Error(`Unexpected published file: ${path}`);
 const manifest=JSON.parse(await readFile('package.json','utf8'));
 if(manifest.publishConfig?.access!=='public'||manifest.publishConfig?.registry!=='https://registry.npmjs.org')throw new Error('Registry/public access must be explicit');
 for(const required of ['dist/index.js','dist/index.cjs','dist/index.d.ts','dist/index.d.cts','dist/node.js','dist/cli.js','docs/integration.md','docs/methods.md'])
  if(!packed.files.some(f=>f.path===required))throw new Error(`Missing published file: ${required}`);
 const extraction=join(dir,'unpacked');
 execFileSync('mkdir',['-p',extraction]);execFileSync('tar',['-xzf',join(dir,packed.filename),'-C',extraction]);
 const pattern=/(?:gh[pousr]_[A-Za-z0-9]{30,}|npm_[A-Za-z0-9]{30,}|-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----|postgres(?:ql)?:\/\/[^\s]+:[^\s]+@|\.production\/private|project-context\.md)/;
 for(const {path}of packed.files){const text=await readFile(join(extraction,'package',path),'utf8');if(pattern.test(text))throw new Error(`Forbidden private content in ${path}`);}
 console.log(JSON.stringify({name:packed.name,version:packed.version,files:packed.files.length,size:packed.size,integrity:packed.integrity,sha:packed.shasum},null,2));
} finally {await rm(dir,{recursive:true,force:true});}
