---
title: Progress
description: PaperCSS Progress Bars
---
Progress components are built with two HTML elements:

* A `.progress` wrapper element.
* A `.bar` element to show the progress so far.

### Basic usage

<div class="row">
  <div class="progress margin-bottom">
    <div class="bar w-0"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar w-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar w-50"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar w-75"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar w-100"></div>
  </div>
</div>

#### Code

```html
<div class="row">
  <div class="progress margin-bottom">
    <div class="bar w-0"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar w-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar w-50"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar w-75"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar w-100"></div>
  </div>
</div>
```

Note how we can specify the width using `.w-50`, `.w-75`, etc. If a width class is not provided then 0% is used as default.

### Backgrounds

<div class="row">
  <div class="progress margin-bottom">
    <div class="bar w-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar secondary w-40"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar success w-55"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar warning w-70"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar danger w-85"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar muted w-100"></div>
  </div>
</div>

#### Code

```html
<div class="row">
  <div class="progress margin-bottom">
    <div class="bar w-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar secondary w-40"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar success w-55"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar warning w-70"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar danger w-85"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar muted w-100"></div>
  </div>
</div>
```

### Labels

<div class="row">
  <div class="progress margin-bottom">
    <div class="bar w-25">25%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar secondary w-40">40%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar success w-55">55%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar warning w-70">70%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar danger w-85">85%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar muted w-100">100%</div>
  </div>
</div>

#### Code

```html
<div class="row">
  <div class="progress margin-bottom">
    <div class="bar w-25">25%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar secondary w-40">40%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar success w-55">55%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar warning w-70">70%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar danger w-85">85%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar muted w-100">100%</div>
  </div>
</div>
```

### Striped

<div class="row">
  <div class="progress margin-bottom">
    <div class="bar striped w-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar striped secondary w-40"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar striped success w-55"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar striped warning w-70"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar striped danger w-85"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar striped muted w-100"></div>
  </div>
</div>

#### Code

```html
<div class="row">
  <div class="progress margin-bottom">
    <div class="bar striped w-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar striped secondary w-40"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar striped success w-55"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar striped warning w-70"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar striped danger w-85"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="bar striped muted w-100"></div>
  </div>
</div>
```
