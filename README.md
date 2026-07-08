# kintai-pro

> PWA対応・オフライン対応を前提とした高機能勤怠管理システム

![Version](https://img.shields.io/badge/version-v0.1.0-blue)
![Status](https://img.shields.io/badge/status-Development-orange)
![License](https://img.shields.io/badge/license-MIT-green)

---

# 概要

Kintai Pro は、

- 勤怠管理
- 給与試算
- 有給管理
- シフト管理
- Excel出力
- PDF印刷
- PWA対応

を備えた Web アプリケーションです。

ブラウザのみで動作し、
PC・スマートフォン・タブレットに対応します。

---

# 主な機能

## 勤怠管理

- 16日～翌15日締め
- 月末支払日管理
- 32:00まで入力可能
- 6:00始まり
- 実働時間自動計算
- 残業時間自動計算
- 深夜勤務時間計算
- 深夜割増時間計算
- 休日勤務時間計算

---

## 給与計算

- 時給設定
- 深夜割増
- 時間外割増
- 休日割増
- 交通費
- 各種手当
- 給与試算

---

## 有給管理

- 有給残日数管理
- 有給取得履歴
- 自動残数計算

---

## シフト

シフトコード対応

例

|コード|勤務時間|
|------|---------|
|070|07:00～16:00|
|071|07:15～16:15|
|073|07:30～16:30|
|074|07:45～16:45|
|080|08:00～17:00|
|090|09:00～18:00|
|230|23:00～32:00|

テンプレートは自由に追加できます。

---

## 出力

- Excel
- PDF
- 印鑑欄付き勤務表
- バックアップ
- 復元

---

## グラフ

- 月間勤務時間
- 月間残業時間
- 年間勤務推移
- 年間給与推移

---

# 対応デバイス

- Windows
- macOS
- Android
- iPhone
- iPad

---

# 使用技術

- HTML5
- CSS3
- JavaScript (ES2023)
- LocalStorage
- IndexedDB
- Chart.js
- SheetJS
- jsPDF
- PWA
- Service Worker

---

# フォルダ構成

```
kintai-pro/

├── README.md
├── index.html
├── manifest.json
├── service-worker.js

├── docs/
│   ├── specification.md
│   ├── database.md
│   ├── design.md
│   └── changelog.md

├── css/
│   ├── style.css
│   ├── mobile.css
│   ├── print.css
│   └── theme.css

├── js/
│   ├── app.js
│   ├── attendance.js
│   ├── calculator.js
│   ├── payroll.js
│   ├── holidays.js
│   ├── settings.js
│   ├── templates.js
│   ├── graph.js
│   ├── backup.js
│   └── utils.js

├── assets/
│   ├── icons/
│   └── logo/

└── data/
    └── holidays.json
```

---

# 開発ロードマップ

## Version 0.1

- [ ] 基本画面
- [ ] ダッシュボード
- [ ] 勤怠入力
- [ ] 保存機能

---

## Version 0.2

- [ ] 勤務時間計算
- [ ] 残業計算
- [ ] 深夜勤務計算

---

## Version 0.3

- [ ] シフトテンプレート
- [ ] 設定画面
- [ ] 勤務区分

---

## Version 0.4

- [ ] 給与計算
- [ ] 有給管理

---

## Version 0.5

- [ ] Excel出力
- [ ] PDF出力

---

## Version 0.6

- [ ] グラフ
- [ ] バックアップ
- [ ] 復元

---

## Version 1.0

- [ ] PWA対応
- [ ] オフライン対応
- [ ] 正式リリース

---

# ライセンス

MIT License

---

# 開発

設計・実装サポート：ChatGPT

リポジトリ管理：GitHub
