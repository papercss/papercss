---
title: Popovers
description: PaperCSS Popovers
---
### Basic usage

You can add popovers, also called tooltips, on your elements. popover attribute is the popover text content, popover-position attribute can be: top, left, right, bottom.

<div class="row flex-spaces">
  <div class="sm-3 col">
    <p popover="Popover on left" popover-position="left">Popover left position</p>
  </div>
  <div class="sm-3 col">
    <p popover="Popover on top" popover-position="top">Popover top position</p>
  </div>
  <div class="sm-3 col">
    <p popover="Popover on bottom" popover-position="bottom">Popover bottom position</p>
  </div>
  <div class="sm-3 col">
    <p popover="Popover on right" popover-position="right">Popover right position</p>
  </div>
</div>

#### Code:

```html
<p popover="Popover on left" popover-position="left">Popover left position</p>
<p popover="Popover on top" popover-position="top">Popover top position</p>
<p popover="Popover on bottom" popover-position="bottom">Popover bottom position</p>
<p popover="Popover on right" popover-position="right">Popover right position</p>
```

But you can also popover on pretty much any element you want, it can be on a button, on a table cell, ...

<div class="row flex-center">
  <div class="sm-6 col">
    <button popover="Popover on top" popover-position="top">Popover on top and on a button!</button>
  </div>
</div>

#### Code:

```html
<button popover="Popover on top" popover-position="top">Popover on top and on a button!</button>
```


