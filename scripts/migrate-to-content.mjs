/**
 * 一次性：把 src/images 里现有图片复制到 public/content（稳定文件名）
 * 运行：node scripts/migrate-to-content.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function copyFile(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn("skip (missing):", src);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log("copied:", path.relative(root, dest));
}

function copyDirImages(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  for (const name of fs.readdirSync(srcDir)) {
    if (/\.(jpe?g|png|gif|webp|svg)$/i.test(name)) {
      copyFile(path.join(srcDir, name), path.join(destDir, name));
    }
  }
}

const gallerySrc = path.join(root, "src/images/gallery");
const galleryDest = path.join(root, "public/content/gallery");
copyDirImages(gallerySrc, galleryDest);

const bannerMap = [
  ["src/images/Group_Photo_Fall2024.JPG", "public/content/banner/slide-1.jpg"],
  ["src/images/Tandon.jpg", "public/content/banner/slide-2.jpg"],
  ["src/images/last_man_standing.png", "public/content/banner/slide-3.png"],
  ["src/images/boardgame_night.png", "public/content/banner/slide-4.png"],
  ["src/images/feichengwurao.png", "public/content/banner/slide-5.png"],
];
for (const [src, dest] of bannerMap) {
  copyFile(path.join(root, src), path.join(root, dest));
}

const membersSrc = path.join(root, "src/images/members");
const membersDest = path.join(root, "public/content/members");
if (fs.existsSync(membersSrc)) {
  for (const name of fs.readdirSync(membersSrc)) {
    if (!/\.(jpe?g|png|gif|webp|svg)$/i.test(name)) continue;
    const stable = name.toLowerCase();
    copyFile(path.join(membersSrc, name), path.join(membersDest, stable));
  }
}

console.log("\n完成。请运行: npm run sync-content");
