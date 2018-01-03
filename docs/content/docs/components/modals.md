---
title: Modals
description: PaperCSS Modals
---
### Simple modal example

This can be used to implement modals along with features like title, subtitle, text, button and links. Just use whichever component you need for your modal with proper classes and leave the rest on the framework.

<div class="row flex-spaces child-borders">
  <a href="#modal-1" class="paper-btn margin">Open Modal!</a>
</div>
<div class="modal row flex-spaces" id="modal-1">
  <div class="modal-body">
    <a href="#modals" class="btn-close">x</a>
    <h4 class="modal-title">Modal Title</h4>
    <h5 class="modal-subtitle">Modal Subtitle</h5>
    <p class="modal-text">This is an example of modal which is implemented with pure CSS! :D</p>
    <a href="#modals"><button>Nice!</button></a>
  </div>
</div>

#### Code:

```html
<div class="row flex-spaces child-borders">
  <a href="modal-1" class="paper-btn margin">Open Modal!</a>
</div>
<div class="modal row flex-spaces" id="modal-1">
  <div class="modal-body">
    <a class="btn-close" href="#modals">x</a>
    <h4 class="modal-title">Modal Title</h4>
    <h5 class="modal-subtitle">Modal Subtitle</h5>
    <p class="modal-text">This is an example of modal which is implemented with pure CSS! :D</p>
    <button>Nice!</button>
  </div>
</div>
```

### Modal with title, text and links

<div class="row flex-spaces child-borders">
  <a href="#modal-2" class="paper-btn margin">Another Modal!</a>
</div>
<div class="modal row flex-spaces" id="modal-2">
  <div class="modal-body">
    <a href="#modals" class="btn-close">x</a>
    <h4 class="modal-title">Modal Title</h4>
    <h5 class="modal-subtitle">Modal Subtitle</h5>
    <p class="modal-text">This is another example of modal which is implemented with pure CSS! :D</p>
    <a class="modal-link" href="#modals">OK</a>
    <a class="modal-link" href="#modals">Close</a>
  </div>
</div>

#### Code:

```html
<div class="row flex-space child-borders">
  <a href="modal-1" class="paper-btn margin">Open Modal!</a>
</div>
<div class="modal row flex-space" id="modal-1">
  <div class="modal-body">
    <a class="btn-close" href="#modals">x</a>
    <h4 class="modal-title">Modal Title</h4>
    <h5 class="modal-subtitle">Modal Subtitle</h5>
    <p class="modal-text">This is an example of modal which is implemented with pure CSS! :D</p>
    <a class="modal-link" href="#modals">OK</a>
    <a class="modal-link" href="#modals">Close</a>
  </div>
</div>
```
