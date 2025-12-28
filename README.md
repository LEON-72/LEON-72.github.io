# My Blog
Jekyllを使用したブログです。マークダウンで記事を執筆し、GitHub Pagesで自動的に公開されます。

## 構成
```
blog/
├── .github/workflows/  # GitHub Actions設定
├── templates/         # HTMLテンプレート（ヘッダー・フッター等）
├── posts-md/          # マークダウンソース（ここに記事を書く）
├── posts/             # 生成されたHTML（自動生成）
├── css/               # スタイルシート
├── index.html         # トップページ（自動生成）
├── about.html         # Aboutページ（自動生成）
├── posts.html         # 記事一覧ページ（自動生成）
├── build.js           # ビルドスクリプト
└── package.json       # 依存関係
```

## セットアップ
このブログをローカルでプレビューを見るには、RubyとJekyllのインストールが必要です。
### 1.Rubyのインストール
- **Windows:**[RubyInstaller](https://rubyinstaller.org/)を使用し、Ruby+Devkitの最新版をインストールしてください。
- **Mac:**`brew install ruby`でインストール可能です。
- **Linux:**各ディストリビューションのパッケージマネージャーからインストールしてください。

### 2.Jekyll と依存関係のインストール
```Bash
# Bundlerのインストール
gem install bundler

# 依存パッケージのインストール
bundle install
```
### 3.ローカルでプレビュー
```Bash
bundle exec jekyll serve
```
ブラウザで`http://localhost:4000`にアクセスして確認してください。

## 記事の書き方
### 新しい記事を作成
`_posts/`ディレクトリに新しい`.md`ファイルを作成します。  
ファイル名規則:`YYYY-MM-DD-タイトル.md`の形式にする必要があります。

### フロントマター (Front Matter)
記事の冒頭には必ず --- で囲まれた設定情報を記述してください。
```Markdown
---
layout: post
title: "記事のタイトル"
date: 2025-12-28
excerpt: "トップページに表示される独自の要約文（省略すると本文から自動抽出されます）"
---
```
### 執筆時の注意点 (Liquidタグのエラー回避)
本文中で`{{ }}`や`{% %}`などの記法を「そのまま文字として」表示したい場合は、Jekyllのエラーを防ぐために以下のように記述してください。\
```Markdown
{% row %}{{ }}{% endraw %}
```
警告ボックス: 本文中で目立たせたい注意書きがある場合は、以下のタグが使用可能です。
```html
<div class="warning">
  <strong>WARNING:</strong>ここに警告内容を書く
</div>
```

### カスタマイズ
- **デザイン:**`assets/css/main.css`を編集して色や余白を調整します。
- **サイト情報:**`_config.yml`でサイトのタイトル、サブタイトル、著者名を変更できます。
- **共通レイアウト:**`_layouts/`内のHTMLを編集することで、全ページ共通のヘッダーやフッターをカスタマイズできます。

## デプロイ
GitHubの`main`ブランチにプッシュするだけで、GitHub Actionsがビルドを開始し、数分以内に公開サイトへ反映されます。

## ライセンス
MIT License