---
title: Collapsibles
description: PaperCSS Collapsibles
---

Collapsibles are elements that expand when you click on them. You can hide/reveal content back on clicking.

<div class="row">
  <div class="collapsible">
    <input id="collapsible1" type="checkbox" name="collapsible">
    <label for="collapsible1">First</label>
    <div class="collapsible-body">
      <span>
        Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
      </span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible2" type="checkbox" name="collapsible">
    <label for="collapsible2">Second</label>
    <div class="collapsible-body">
      <span>
        Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken. Pork belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye shank flank doner cow kielbasa shankle.
      </span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible3" type="checkbox" name="collapsible">
    <label for="collapsible3">Third</label>
    <div class="collapsible-body">
      <span>
        Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
      </span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible4" type="checkbox" name="collapsible">
    <label for="collapsible4">Fourth</label>
    <div class="collapsible-body">
      <span>
        Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken. Pork belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye shank flank doner cow kielbasa shankle.
      </span>
    </div>
  </div>
</div>


#### Code:

```html
<div class="row">
  <div class="collapsible">
    <input id="collapsible1" type="checkbox" name="collapsible">
    <label for="collapsible1">First</label>
    <div class="collapsible-body">
      <span>Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken...</span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible2" type="checkbox" name="collapsible">
    <label for="collapsible2">Second</label>
    <div class="collapsible-body">
      <span>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola...</span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible3" type="checkbox" name="collapsible">
    <label for="collapsible3">Third</label>
    <div class="collapsible-body">
      <span>Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken...</span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible4" type="checkbox" name="collapsible">
    <label for="collapsible4">Fourth</label>
    <div class="collapsible-body">
      <span>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola...</span>
    </div>
  </div>
</div>
```

### Accordions

Use `input type="radio"` when you want to keep only one element collapsed at a time.

<div class="row">
  <div class="collapsible">
    <input id="collapsible5" type="radio" name="collapsible">
    <label for="collapsible5">First</label>
    <div class="collapsible-body">
      <span>
        Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
      </span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible6" type="radio" name="collapsible">
    <label for="collapsible6">Second</label>
    <div class="collapsible-body">
      <span>
        Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken. Pork belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye shank flank doner cow kielbasa shankle.
      </span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible7" type="radio" name="collapsible">
    <label for="collapsible7">Third</label>
    <div class="collapsible-body">
      <span>
        Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
      </span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible8" type="radio" name="collapsible">
    <label for="collapsible8">Fourth</label>
    <div class="collapsible-body">
      <span>
        Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken. Pork belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye shank flank doner cow kielbasa shankle.
      </span>
    </div>
  </div>
</div>


#### Code:

```html
<div class="row">
  <div class="collapsible">
    <input id="collapsible5" type="radio" name="collapsible">
    <label for="collapsible5">First</label>
    <div class="collapsible-body">
      <span>Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken...</span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible6" type="radio" name="collapsible">
    <label for="collapsible6">Second</label>
    <div class="collapsible-body">
      <span>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola...</span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible7" type="radio" name="collapsible">
    <label for="collapsible7">Third</label>
    <div class="collapsible-body">
      <span>Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken...</span>
    </div>
  </div>
  <div class="collapsible">
    <input id="collapsible8" type="radio" name="collapsible">
    <label for="collapsible8">Fourth</label>
    <div class="collapsible-body">
      <span>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola...</span>
    </div>
  </div>
</div>
```
