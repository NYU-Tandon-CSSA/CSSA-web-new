import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const contentRoot = path.join(root, "public/content");

const IMAGE_EXT = /\.(jpe?g|png|gif|webp|svg)$/i;

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listImages(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((name) => IMAGE_EXT.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function syncGallery() {
  const galleryDir = path.join(contentRoot, "gallery");
  ensureDir(galleryDir);
  const files = listImages(galleryDir);
  writeJson(path.join(galleryDir, "manifest.json"), {
    note: "自动生成。往 gallery/ 里放任意图片，运行 npm run sync-content 后刷新网站。",
    images: files.map((file) => ({ file, alt: file.replace(/\.[^.]+$/, "") })),
  });
  console.log(`gallery: ${files.length} 张`);
}

function syncBanner() {
  const bannerDir = path.join(contentRoot, "banner");
  ensureDir(bannerDir);
  const manifestPath = path.join(bannerDir, "slides.json");

  let slides;
  if (fs.existsSync(manifestPath)) {
    slides = JSON.parse(fs.readFileSync(manifestPath, "utf8")).slides;
  } else {
    slides = [
      { file: "slide-1.jpg", alt: "Group Photo" },
      { file: "slide-2.jpg", alt: "Tandon" },
      { file: "slide-3.jpg", alt: "Last Man Standing" },
      { file: "slide-4.jpg", alt: "Board Game Night" },
      { file: "slide-5.jpg", alt: "Feichengwurao" },
    ];
  }

  writeJson(manifestPath, {
    note: "换轮播图：直接覆盖 slide-1.jpg ~ slide-5.jpg，不用改代码。alt 文字可在此文件里改。",
    slides,
  });
  console.log(`banner: ${slides.length} 张`);
}

ensureDir(contentRoot);
syncGallery();
syncBanner();
console.log("sync-content 完成");
