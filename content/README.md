# 可替换图片（本地开发）

换图**不用改代码**，按下面做即可。

## 相册 `gallery/`

- 把照片丢进此文件夹，**文件名随意**
- 运行 `npm run sync-content`（`npm start` 前会自动跑）
- `git push` 部署

## 首页轮播 `banner/`

- **固定槽位**：`slide-1.jpg` … `slide-5.png`（见 `slides.json`）
- 换图 = **用新图覆盖同名文件**，不用改 React 代码
- 只改标题文字：编辑 `slides.json` 里的 `alt`

## 换届 / 加新人 `teams.json` + `members/`

1. 照片放进 `members/`，如 `zhangsan.jpg`
2. 编辑 **`teams.json`**，在 `cabinetTeam` / `boardTeam` 等数组里复制 `_memberTemplate` 加一条
3. `git push`

离任：从数组里删掉那条。换头像：覆盖同名文件，不用改 JSON。没照片用 `"photo": "unknow.png"`。

## 成员换头像（已在名单里的人）

- 覆盖 `tim.jpg`、`helen.jpg` 等即可

## 首次从旧目录迁移

```bash
node scripts/migrate-to-content.mjs
npm run sync-content
```
