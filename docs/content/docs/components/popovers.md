---
title: Popovers
description: PaperCSS Popovers
---
### Basic usage

You can add popovers, also called tooltips, on your elements. popover attribute is the popover text content, popover-position attribute can be: top, left, right, bottom.

<div class="row flex-spaces">
  <div class="sm-3 col">
    <p popover-left="Popover on left">Popover left position</p>
  </div>
  <div class="sm-3 col">
    <p popover-top="Popover on top">Popover top position</p>
  </div>
  <div class="sm-3 col">
    <p popover-bottom="Popover on bottom">Popover bottom position</p>
  </div>
  <div class="sm-3 col">
    <p popover-right="Popover on right">Popover right position</p>
  </div>
</div>

#### Code:

```html
<p popover-left="Popover on left">Popover left position</p>
<p popover-top="Popover on top">Popover top position</p>
<p popover-bottom="Popover on bottom">Popover bottom position</p>
<p popover-right="Popover on right">Popover right position</p>
```

But you can also popover on pretty much any element you want, it can be on a button, on a table cell, ...

<div class="row flex-center">
  <div class="sm-6 col">
    <button popover-top="Popover on top">Popover on top and on a button!</button>
  </div>
</div>

#### Code:

```html
<button popover-top="Popover on top">Popover on top and on a button!</button>
```


