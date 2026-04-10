import esbuild from "esbuild";
import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const packageJson = JSON.parse(await fs.readFile(path.join(rootDir, "package.json"), "utf8"));
const version = packageJson.version;
const downloadRootDir = path.join(rootDir, "downloads");
const bundleDirName = `stackline-loading-${version}`;
const bundleDir = path.join(downloadRootDir, bundleDirName);
const zipPath = path.join(downloadRootDir, `${bundleDirName}.zip`);
const browserBundlePath = path.join(bundleDir, "loading.browser.js");

const installGuide = `@stackline/loading ${version}

Browser bundle download
=======================

This folder is for browser applications that want to use the loading toolkit without npm.

Files
-----
- loading.browser.js
- LICENSE
- README.md

Script tag usage
----------------
<section id="loader-host" style="min-height: 160px; position: relative;"></section>
<script src="./loading.browser.js"></script>
<script>
  const host = document.getElementById("loader-host");
  const loader = StacklineLoading.createLoader({
    variant: "orbit",
    overlay: true,
    centered: true,
    size: 48,
    label: "Loading analytics"
  });

  loader.mount(host);
  loader.show();
</script>

Global name
-----------
window.StacklineLoading
`;

const downloadReadme = `# GitHub Downloads

This directory contains browser-ready downloads for developers who want to use \`@stackline/loading\` with plain JavaScript.

Current version:

- [${bundleDirName}.zip](./${bundleDirName}.zip)

Inside the archive:

- \`loading.browser.js\`
- \`README.md\`
- \`LICENSE\`
- \`INSTALLATION.txt\`
`;

await fs.rm(downloadRootDir, { recursive: true, force: true });
await fs.mkdir(bundleDir, { recursive: true });

await esbuild.build({
  entryPoints: [path.join(rootDir, "src/index.ts")],
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2019",
  platform: "browser",
  globalName: "StacklineLoading",
  outfile: browserBundlePath
});

await fs.copyFile(path.join(rootDir, "README.md"), path.join(bundleDir, "README.md"));
await fs.copyFile(path.join(rootDir, "LICENSE"), path.join(bundleDir, "LICENSE"));
await fs.writeFile(path.join(bundleDir, "INSTALLATION.txt"), installGuide, "utf8");
await fs.writeFile(path.join(downloadRootDir, "README.md"), downloadReadme, "utf8");

await execFileAsync("zip", ["-rq", zipPath, bundleDirName], {
  cwd: downloadRootDir
});

console.log(`Built GitHub download bundle into ${path.relative(rootDir, downloadRootDir)}/`);
