---
title: Navbar
description: PaperCSS Navbar
---

<nav class="border fixed split-nav">
  <div class="nav-brand">
    <h3><a href="/">Get PaperCSS</a></h3>
  </div>
  <div class="collapsible">
    <input id="collapsible0" type="checkbox" name="collapsible0">
    <button>
      <label for="collapsible0">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
    </button>
    <div class="collapsible-body">
      <ul class="inline">
        <li><a href="/docs/">Documentation</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="https://github.com/rhyneav/papercss" target="_blank">Github</a></li>
      </ul>
    </div>
  </div>
</nav>

<nav class="border split-nav">
  <div class="nav-brand">
    <h3><a href="#">Get PaperCSS</a></h3>
  </div>
  <div class="collapsible">
    <input id="collapsible1" type="checkbox" name="collapsible1">
    <button>
      <label for="collapsible1">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
    </button>
    <div class="collapsible-body">
      <ul class="inline">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Github</a></li>
      </ul>
    </div>
  </div>
</nav>

#### Code:

Add ```.fixed``` to ```<nav>``` to fix the nav to the top to have it scroll the whole page. It's also mobile responsive and will show a hamburger menu on small screens. No JavaScript required!

```html
<nav class="border fixed split-nav">
  <div class="nav-brand">
    <h3><a href="#">Get PaperCSS</a></h3>
  </div>
  <div class="collapsible">
    <input id="collapsible1" type="checkbox" name="collapsible1">
    <button>
    <label for="collapsible1">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
    </button>
    <div class="collapsible-body">
      <ul class="inline">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Github</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### Not Split Navbar

<nav class="border">
  <div class="nav-brand">
    <h3><a href="#">Get PaperCSS</a></h3>
  </div>
  <div class="collapsible">
    <input id="collapsible2" type="checkbox" name="collapsible2">
    <button>
      <label for="collapsible2">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
    </button>
    <div class="collapsible-body">
      <ul class="inline">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Github</a></li>
      </ul>
    </div>
  </div>
</nav>

#### Code:

```html
<nav class="border fixed">
  <div class="nav-brand">
    <h4><a href="#">Get PaperCSS</a></h4>
  </div>
  <div class="collapsible">
    <input id="collapsible2" type="checkbox" name="collapsible2">
    <button>
      <label for="collapsible2">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
    </button>
    <div class="collapsible-body">
      <ul class="inline">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Github</a></li>
      </ul>
    </div>
  </div>
</nav>
```
