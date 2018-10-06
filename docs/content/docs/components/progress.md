---
title: Progress
description: PaperCSS Progress Bars
---
Progress components are built with two HTML elements:

* A `.progress` wrapper element.
* A `.progress-bar` element to show the progress so far.

### Basic usage

<div class="row">
  <div class="progress margin-bottom">
    <div class="progress-bar progress-0"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-50"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-75"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-100"></div>
  </div>
</div>

#### Code

```html
<div class="row">
  <div class="progress margin-bottom">
    <div class="progress-bar progress-0"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-50"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-75"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-100"></div>
  </div>
</div>
```

Note how we can specify the width using `.progress-50`, `.progress-75`, etc. The default progress bar width is 0%.

### Backgrounds

<div class="row">
  <div class="progress margin-bottom">
    <div class="progress-bar progress-primary progress-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-secondary progress-40"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-success progress-55"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-warning progress-70"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-danger progress-85"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-muted progress-100"></div>
  </div>
</div>

#### Code

```html
<div class="row">
  <div class="progress margin-bottom">
    <div class="progress-bar progress-primary progress-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-secondary progress-40"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-success progress-55"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-warning progress-70"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-danger progress-85"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-muted progress-100"></div>
  </div>
</div>
```

### Labels

<div class="row">
  <div class="progress margin-bottom">
    <div class="progress-bar progress-primary progress-25">25%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-secondary progress-40">40%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-success progress-55">55%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-warning progress-70">70%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-danger progress-85">85%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-muted progress-100">100%</div>
  </div>
</div>

#### Code

```html
<div class="row">
  <div class="progress margin-bottom">
    <div class="progress-bar progress-primary progress-25">25%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-secondary progress-40">40%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-success progress-55">55%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-warning progress-70">70%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-danger progress-85">85%</div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-muted progress-100">100%</div>
  </div>
</div>
```

### Striped

<div class="row">
  <div class="progress margin-bottom">
    <div class="progress-bar progress-primary progress-striped progress-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-secondary progress-striped progress-40"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-success progress-striped progress-55"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-warning progress-striped progress-70"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-danger progress-striped progress-85"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-muted progress-striped progress-100"></div>
  </div>
</div>

#### Code

```html
<div class="row">
  <div class="progress margin-bottom">
    <div class="progress-bar progress-primary progress-striped progress-25"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-secondary progress-striped progress-40"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-success progress-striped progress-55"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-warning progress-striped progress-70"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-danger progress-striped progress-85"></div>
  </div>
  <div class="progress margin-bottom">
    <div class="progress-bar progress-muted progress-striped progress-100"></div>
  </div>
</div>
```
