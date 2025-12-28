---
layout: post
title: 初めてのGitHub Pages
date: 2025-12-27
last_modified_at: 2025-12-28
---
## やってみたかった
　GitHub Pagesの存在は前から知っていて、GitHubで静的なサイトを作れるんだなぁと思っていた。
せっかくなら年越し前にやって気持ちよく今年を終わってやろうと思ったので作りました。

## Jekyll を活用したディレクトリ構成
　ブログとして効率よく運用するために、今回はGitHub Pagesに標準搭載されている静的サイトジェネレーター**Jekyll**を使いました。  
Jekyllを使用することで、ヘッダーやフッターなどの共通部分をテンプレート化やMarkdownからHTMLへの自動変換が可能になります。  
プロジェクトの構成は以下の通りです。

{% raw %}
```
リポジトリ名/
├─ _config.yml （サイトの設定ファイル）
├─ _layouts/ （共通デザインのテンプレート）
│   └─ default.html
├─ _posts/ （ブログを入れるフォルダ）
│   └─ 2025-12-27-first-post.md
└─ index.html （トップページ）
```
{% endraw %}
## 各ファイルの役割
### _config.yml
ここではサイト名や使用するテーマを定義します。

{% raw %}
```yaml
title: My Blog
description: 開発ログや日常の記録
remote_theme: pages-themes/cayman  # 初めはGitHubの公式テーマを使うと良い
```
{% endraw %}

### _layout/default.html
このファイルにはヘッダーやフッターなど、どのページでも表示したい共通部分を書きます。
{% raw %}`{{ content }}`{% endraw %}の部分に記事の内容が流し込まれます。  
{% raw %}
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
{% endraw %}

### index.html
トップページは、_posts/にある記事を自動でリストアップするようにします。

{% raw %}
```html
---
layout: default
title: Home
---

<h2>最新の記事</h2>
{% for post in site.posts limit: 1 %}
<article class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <small style="color: #6a737d;">
        作成日: {{ post.date | date: "%Y/%m/%d" }}
        {% if post.last_modified_at %}
            （更新日: {{ post.last_modified_at | date: "%Y/%m/%d" }}）
        {% endif %}
    </small>
    <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
    <a href="{{ post.url | relative_url }}">記事を読む →</a>
</article>
{% endfor %}

<hr style="border: 0; border-top: 1px solid #e1e4e8; margin: 3rem 0;">

<h2>以前の記事</h2>
<ul style="list-style: none; padding: 0;">
    {% for post in site.posts offset: 1 %}
    <li style="margin-bottom: 1rem;">
        <span style="color: #6a737d; margin-right: 1rem;">
            {{ post.date | date: "%Y/%m/%d" }}
            {% if post.last_modified_at %}
                <span style="font-size: 0.8em;">(更新日: {{ post.last_modified_at | date: "%m/%d" }})</span>
            {% endif %}
        </span>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
</ul>
```
{% endraw %}

{% raw %}   
  **Memo:**`index.html`は`_layouts/default.html`の`{{}}`内に埋め込まれるので`<html>`タグや`<head>`タグ、`<body>`タグを書く必要はありません。
{% endraw %}
### _posts/2025-12-27-first-post.md
ようやく記事本文です。ファイル名は`YYYY-MM-DD-title.md`にします。

{% raw %}
```markdown
---
layout: default
title: タイトル名
---
ここから記事を書きます。
```
{% endraw %}
**Memo:**本文を執筆する際に注意する点があり、コードブロックに`{{ }}`を記述する場合は`{% raw %}`と`{% endraw %}`で囲む必要があります。これを忘れるとJekyllが実行する命令と勘違いしてエラーを起こします。

## まとめ
Jakyllを導入したことで、あとはMarkdownで記事を執筆しPushするだけでブログが更新されます。