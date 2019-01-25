---
title: Get PaperCSS
menu: main
weight: -270
---

#### Download

Download the latest version (1.6.1) using either of the links below. Or
download an older release via Github.

<div class="row flex-spaces text-center">
  <a class="paper-btn margin" href="https://github.com/rhyneav/papercss/releases/download/v1.6.1/paper.css">CSS File</a>
  <a class="paper-btn margin" href="https://github.com/rhyneav/papercss/releases/download/v1.6.1/paper.min.css">Minified CSS File</a>
  <a class="paper-btn margin" href="https://github.com/rhyneav/papercss/releases">Github Releases</a>
</div>

#### NPM

PaperCSS is available on NPM, current version 1.6.1. Install with <code>npm install papercss --save</code> and find the CSS in:

* node_modules/papercss/dist/paper.css
* node_modules/papercss/dist/paper.min.css

#### CDN

Don't want to download it? That's cool. You can just link to PaperCSS via
[unpkg's CDN](https://unpkg.com/#/). You can use either:

* [https://unpkg.com/papercss@1.6.1/dist/paper.css](https://unpkg.com/papercss@1.6.1/dist/paper.css)
* [https://unpkg.com/papercss@1.6.1/dist/paper.min.css](https://unpkg.com/papercss@1.6.1/dist/paper.min.css)

Here's a quick snippet to get started with PaperCSS:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://unpkg.com/papercss@1.6.1/dist/paper.min.css">
  <title>Document</title>
</head>
<body>
  <div class="paper container">
    <h1>Some Fresh Title</h1>
    <p>This is where some content would go.</p>
  </div>
</body>
</html>
```

#### Build it Yourself

If you'd rather customize things, you can build the CSS yourself via the git repo

```sh
git clone https://github.com/papercss/papercss.git
cd papercss
npm install
npm run build
```

Grab the CSS out of the /dist folder created

You can also go into src/core/_config.scss before building to change around the global styles of your new CSS.
