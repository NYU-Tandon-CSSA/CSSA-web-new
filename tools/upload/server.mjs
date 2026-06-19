import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const PORT = Number(process.env.UPLOAD_PORT || 3333);

const UPLOAD_TARGETS = {
  gallery: "public/content/gallery",
  banner: "public/content/banner",
  members: "public/content/members",
};

const TARGET_LABELS = {
  gallery: "相册（任意文件名，上传后运行 npm run sync-content）",
  banner: "轮播（覆盖 slide-1.jpg ~ slide-5，见 slides.json）",
  members: "成员头像（覆盖 tim.jpg 等固定名）",
};

function sanitizeFilename(name) {
  const base = path.basename(name).replace(/[^a-zA-Z0-9._-]/g, "-");
  return base || `upload-${Date.now()}.jpg`;
}

function resolveTargetDir(targetKey) {
  const relative = UPLOAD_TARGETS[targetKey];
  if (!relative) {
    return null;
  }
  const absolute = path.resolve(repoRoot, relative);
  if (!absolute.startsWith(repoRoot)) {
    return null;
  }
  fs.mkdirSync(absolute, { recursive: true });
  return absolute;
}

const storage = multer.diskStorage({
  destination(req, _file, cb) {
    const dir = resolveTargetDir(req.body.target || req.query.target);
    if (!dir) {
      cb(new Error("无效的上传目录"));
      return;
    }
    cb(null, dir);
  },
  filename(req, file, cb) {
    const custom = (req.body.filename || "").trim();
    cb(null, sanitizeFilename(custom || file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024, files: 20 },
  fileFilter(_req, file, cb) {
    if (/\.(jpe?g|png|gif|webp|svg)$/i.test(file.originalname)) {
      cb(null, true);
    } else {
      cb(new Error("仅支持 jpg / png / gif / webp / svg"));
    }
  },
});

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/targets", (_req, res) => {
  res.json(
    Object.entries(UPLOAD_TARGETS).map(([id, relative]) => ({
      id,
      path: relative,
      label: TARGET_LABELS[id] || id,
    }))
  );
});

app.post("/api/upload", upload.array("files", 20), (req, res) => {
  const target = req.body.target;
  const dir = resolveTargetDir(target);
  if (!dir) {
    res.status(400).json({ error: "请选择有效的上传目录" });
    return;
  }

  const files = (req.files || []).map((f) => ({
    name: f.filename,
    path: path.relative(repoRoot, f.path),
    size: f.size,
  }));

  res.json({
    ok: true,
    target,
    files,
    gitHint: [
      `git add ${files.map((f) => f.path).join(" ")}`,
      target === "gallery" ? "npm run sync-content" : null,
      'git commit -m "update images"',
      "git push origin master",
    ].filter(Boolean),
  });
});

app.use((err, _req, res, _next) => {
  res.status(400).json({ error: err.message || "上传失败" });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`CSSA 本地上传页: http://127.0.0.1:${PORT}`);
  console.log("仅本机可访问。上传后请 git add / commit / push 部署。");
});
