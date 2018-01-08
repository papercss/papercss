---
title: Modals
description: PaperCSS Modals
---
### Simple modal example

This can be used to implement modals along with features like title, subtitle, text, button and links. Just use whichever component you need for your modal with proper classes and leave the rest on the framework.

<div class="row flex-spaces child-borders">
  <label class="paper-btn margin" for="modal-1">Open Modal!</label>
</div>
<input class="modal-state" id="modal-1" type="checkbox">
<div class="modal">
  <label class="modal-bg" for="modal-1"></label>
  <div class="modal-body">
    <label class="btn-close" for="modal-1">X</label>
    <h4 class="modal-title">Modal Title</h4>
    <h5 class="modal-subtitle">Modal Subtitle</h5>
    <p class="modal-text">This is an example of modal which is implemented with pure CSS! :D</p>
    <label for="modal-1" class="paper-btn">Nice!</label>
  </div>
</div>

#### Code:

```html
<div class="row flex-spaces child-borders">
  <label class="paper-btn margin" for="modal-1">Open Modal!</label>
</div>
<input class="modal-state" id="modal-1" type="checkbox">
<div class="modal">
  <label class="modal-bg" for="modal-1"></label>
  <div class="modal-body">
    <label class="btn-close" for="modal-1">X</label>
    <h4 class="modal-title">Modal Title</h4>
    <h5 class="modal-subtitle">Modal Subtitle</h5>
    <p class="modal-text">This is an example of modal which is implemented with pure CSS! :D</p>
    <label for="modal-1">Nice!</label>
  </div>
</div>
```

### Modal with title, text and links

<div class="row flex-spaces child-borders">
  <label class="paper-btn margin" for="modal-2">Another Modal!</label>
</div>
<input class="modal-state" id="modal-2" type="checkbox">
<div class="modal">
  <label class="modal-bg" for="modal-2"></label>
  <div class="modal-body">
    <label class="btn-close" for="modal-2">X</label>
    <h4 class="modal-title">Modal Title</h4>
    <h5 class="modal-subtitle">Modal Subtitle</h5>
    <p class="modal-text">This is another example of modal which is implemented with pure CSS! :D</p>
    <a href="/#download">Get PaperCSS</a>
    <label for="modal-2" class="modal-link">Close</label>
  </div>
</div>

#### Code:

```html
<div class="row flex-spaces child-borders">
  <label class="paper-btn margin" for="modal-2">Another Modal!</label>
</div>
<input class="modal-state" id="modal-2" type="checkbox">
<div class="modal">
  <label class="modal-bg" for="modal-2"></label>
  <div class="modal-body">
    <label class="btn-close" for="modal-2">X</label>
    <h4 class="modal-title">Modal Title</h4>
    <h5 class="modal-subtitle">Modal Subtitle</h5>
    <p class="modal-text">This is another example of modal which is implemented with pure CSS! :D</p>
    <a href="/#download">Get PaperCSS</a>
    <label for="modal-2" class="modal-link">Close</label>
  </div>
</div>
```
