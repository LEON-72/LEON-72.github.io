---
layout: default
title: 初めてのGitHub Pages
date: 2025-12-17
last_modified_at: 2025-12-27
---
この投稿は**HxSコンピューター部 Advent Calendar 2025**の2〇日目の記事です。

## やってみたかった
GitHub Pagesの存在は前から知っていて、GitHubで静的なサイトを作れるんだなぁと思っていた。
せっかくなら年越し前にやって気持ちよく今年を終わってやろうと思ったので作りました。

## GitHub Pagesでサイトを公開するには
`ユーザー名.github.io`という名前のリポジトリを作成すると`https://ユーザー名.github.io/`にアクセスすることができるようになる。  
リポジトリの直下に`index.html`を作り、何かしら書き込むとトップページの完成！  
そして、できたのが[こちら](https://leon-72.github.io/)となります。

## トップページと言えば…
ブログをこれから書いていくにはトップページからアクセスできるようにする必要がある。  
フォルダ構成としては
```
リポジトリ名/
├─ _config.yml （サイトの設定ファイル）
├─ _layouts/ （共通デザインのテンプレート）
│   └─ default.html
├─ _posts/ （ブログを入れるフォルダ）
│   └─ 2025-12-27-first-post.md
└─ index.html （トップページ）
```
となっています。  
今回はJekyllを使ってMarkdownで書いた記事を自動でHTMLに変換する仕組みを使っています。
詳しくは調べてください。
### _config.yml
ここではサイト名などを決めます。
```yaml
title: My Blog
description: 開発ログや日常の記録
remote_theme: pages-themes/cayman  # 初めはGitHubの公式テーマを使うと良い
```
### _layout/default.html
このファイルにはヘッダーやフッターなど、どのページでも表示したい共通部分を書きます。
`{{ }}`の中にそれぞれのページの内容が入ります。
例えば...
{%  raw %}
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ page.title }} | {{ site.title }}</title>
</head>
<body>
    <header>
        <h1><a href="/">{{ site.title }}</a></h1>
    </header>
    
    <main>
        {{ content }}
    </main>

    <footer>
        <p>&copy; 2025 {{ site.title }}</p>
    </footer>
</body>
</html>
```
{% endfor %}
のようにすると毎回ヘッダーやフッターを書かなくて済みますね。  
今はGitHubの公式テーマを使っていますが、こだわりたい場合はcssを書くことでデザインを整えることもできます。

### index.html
トップページはこのファイルに書きます
```html
---
layout: default
title: Home
---

<h2>最新の記事</h2>
<ul>
  {% for post in site.posts %}
    <li>
      <span>{{ post.date | date: "%Y/%m/%d" }}</span> - 
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
```
このような感じで自分だけのトップページを作りましょう！　　
※`index.html`は`_layouts/default.html`の`{{}}`内に埋め込まれるのでhtmlタグやheadタグ、bodyタグは書く必要がありません。
### _posts/2025-12-27-first-post.md
やっとここまでたどり着きました。
```markdown
---
layout: default
title: タイトル名
---
ここから記事を書く
```

## ブログを書くシステムが完成！
あとは_posts/の中にどんどん記事をかけますね。  
Jekyllを使うのでMarkdownで書けてHTMLやCSSで整える必要が無いのもいいですね！