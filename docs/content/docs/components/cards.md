---
title: Cards
description: PaperCSS Cards
---
### Full card example

It is possible to not put all the sub-classes like card-title, card-subtitle, card-text, ... But instead the framework will recognize the element properly if it's a h4, h5, p, ... And you need to put all this content on a div with card class.

<div class="row flex-center">
  <div class="card" style="width: 20rem;">
    <img class="image-top" src="https://picsum.photos/768" alt="Card example image">
    <div class="card-body">
      <h4 class="card-title">My awesome Paper card!</h4>
      <h5 class="card-subtitle">Nice looking subtitle.</h5>
      <p class="card-text">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
      <button>Let me go here!</button>
    </div>
  </div>
</div>

#### Code:

```html
<div class="card" style="width: 20rem;">
  <img src="https://picsum.photos/768" alt="Card example image">

  <div class="card-body">
    <h4 class="card-title">My awesome Paper card!</h4>
    <h5 class="card-subtitle">Nice looking subtitle.</h5>
    <p class="card-text">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
    <button>Let me go here!</button>
  </div>
</div>
```

### Card title, text, links

<div class="row flex-center">
  <div class="card" style="width: 20rem;">
    <div class="card-body">
      <h4 class="card-title">My awesome Paper card!</h4>
      <h5 class="card-subtitle">Nice looking subtitle.</h5>
      <p class="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
      <a class="card-link" href="#">First link</a>
      <a class="card-link" href="#">Second link</a>
    </div>
  </div>
</div>

#### Code:

```html
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">My awesome Paper card!</h4>
    <h5 class="card-subtitle">Nice looking subtitle.</h5>
    <p class="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
    <a class="card-link" href="#">First link</a>
    <a class="card-link" href="#">Second link</a>
  </div>
</div>
```

### Image on top or bottom

<div class="row flex-center">
  <div class="card" style="width: 20rem;">
    <div class="card-body">
      <h4 class="card-title">My awesome Paper card!</h4>
      <h5 class="card-subtitle">Nice looking subtitle.</h5>
      <p class="card-text">You can also place image on the bottom of the card.</p>
      <button>Let me go here!</button>
    </div>
    <img class="image-bottom" src="https://unsplash.it/550/250" alt="Card example image">
  </div>
</div>

#### Code:

```html
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">My awesome Paper card!</h4>
    <h5 class="card-subtitle">Nice looking subtitle.</h5>
    <p class="card-text">You can also place image on the bottom of the card.</p>
    <button>Let me go here!</button>
  </div>
  <img class="image-bottom" src="https://unsplash.it/550/250" alt="Card example image">
</div>
```

### Header and footer

<div class="row flex-center">
  <div class="card" style="width: 20rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
      <h4 class="card-title">My awesome Paper card!</h4>
      <h5 class="card-subtitle">Nice looking subtitle.</h5>
      <p class="card-text">You can also place image on the bottom of the card.</p>
      <button>Let me go here!</button>
    </div>
    <div class="card-footer">Footer</div>
  </div>
</div>

#### Code:

```html
<div class="card" style="width: 20rem;">
  <div class="card-header">Header</div>
    <div class="card-body">
      <h4 class="card-title">My awesome Paper card!</h4>
      <h5 class="card-subtitle">Nice looking subtitle.</h5>
      <p class="card-text">You can also place image on the bottom of the card.</p>
      <button>Let me go here!</button>
    </div>
  <div class="card-footer">Footer</div>
</div>
```
