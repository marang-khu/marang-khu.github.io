# khu.uihim.net Google Sites → GitHub Pages migration package

## 已完成
- 建立可攜式靜態網站資料夾結構。
- 保留目前已確認的 Google Sites 路徑階層。
- 建立共用 `assets/css/style.css`。
- 將目前對話中提供的「學歷」HTML 實際轉入 `/個人/學歷/index.html`。
- 加入 `.nojekyll`，可直接用 GitHub Pages 發布。

## 尚未完成
Google Sites 的公開頁面目前無法由此抓取環境直接取得完整 HTML；
Google Drive 連線也未提供 New Google Sites 本體，因此其他頁面目前只有路徑骨架，
沒有自行改寫或臆造原頁內容。

最可靠的完整搬移來源是 Google Takeout 的 Google Sites 匯出，
或由 Google Sites 編輯端另行匯出／複製正文與圖片，再併入此骨架。

## 主要路徑
見 `site-map.json`。

## GitHub Pages
把本資料夾內容放進 `marang-khu.github.io` repository 的 root 即可。
正式切換 `khu.uihim.net` 前，先以 `https://marang-khu.github.io/` 測試。
