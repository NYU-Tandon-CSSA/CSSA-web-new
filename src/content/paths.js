/**
 * 可替换图片放在 public/content/，用 URL 引用，不经过 webpack import。
 * 换图 = 覆盖同名文件（或相册里任意新文件 + npm run sync-content）
 */
export function contentUrl(...parts) {
  const base = process.env.PUBLIC_URL || "";
  const path = parts.filter(Boolean).join("/");
  return `${base}/content/${path}`.replace(/\/+/g, "/");
}

/** 成员头像：固定文件名，直接覆盖 public/content/members/xxx.jpg */
export function memberPhoto(filename) {
  return contentUrl("members", filename);
}
