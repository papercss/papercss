---
title: Flexbox
description: PaperCSS Flexbox
---

### Flexgrid

The flexgrid is a grid system that supports up to 12 columns per row. Because it
uses flexbox (rather than just %widths), we also get the benefit of the fun
parts of flexbox like alignment in more complex ways than normal.

<div class="demo">
  <div class="row">
    <div class="col-4 col">col-4 col</div>
    <div class="col-4 col">col-4 col</div>
    <div class="col-4 col">col-4 col</div>
  </div>
  <div class="row">
    <div class="col-3 col">col-3 col</div>
    <div class="col-9 col">col-9 col</div>
  </div>
  <div class="row">
    <div class="sm-6 md-8 lg-10 col">sm-6 md-8 lg-10 col</div>
    <div class="sm-6 md-4 lg-2 col">sm-6 md-4 lg-2 col</div>
  </div>
  <div class="row">
    <div class="sm-5 col">sm-5 col</div>
    <div class="col-fill col">col-fill col</div>
    <div class="col-fill col">col-fill col</div>
  </div>
  <div class="row">
    <div class="sm-4 col">Aligned</div>
    <div class="sm-4 col">Left (default)</div>
  </div>
  <div class="row flex-right">
    <div class="sm-4 col">Aligned</div>
    <div class="sm-4 col">Right (flex-right)</div>
  </div>
  <div class="row flex-center">
    <div class="sm-4 col">Aligned</div>
    <div class="sm-4 col">Center (flex-center)</div>
  </div>
  <div class="row flex-edges">
    <div class="sm-4 col">Aligned</div>
    <div class="sm-4 col">to edges (flex-edges)</div>
  </div>
  <div class="row flex-spaces">
    <div class="sm-4 col">Aligned</div>
    <div class="sm-4 col">to be evenly spaced (flex-spaces)</div>
  </div>
  <div class="row flex-top">
    <div class="sm-4 col">Aligned top</div>
    <div class="sm-4 col">Aligned top</div>
    <div class="sm-4 col">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
    </div>
  </div>
  <div class="row flex-middle">
    <div class="sm-4 col">Aligned middle</div>
    <div class="sm-4 col">Aligned middle</div>
    <div class="sm-4 col">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
    </div>
  </div>
  <div class="row flex-bottom">
    <div class="sm-4 col">Aligned bottom</div>
    <div class="sm-4 col">Aligned bottom</div>
    <div class="sm-4 col">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
    </div>
  </div>
  <div class="row">
    <div class="sm-3 col align-bottom">Align bottom</div>
    <div class="sm-3 col align-middle">Align middle</div>
    <div class="sm-3 col align-top">Align top</div>
    <div class="sm-3 col">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
    </div>
  </div>
</div>

#### Code:

```html
<div class="row">
  <div class="col-4 col">col-4 col</div>
  <div class="col-4 col">col-4 col</div>
  <div class="col-4 col">col-4 col</div>
</div>
<div class="row">
  <div class="col-3 col">col-3 col</div>
  <div class="col-9 col">col-9 col</div>
</div>
<div class="row">
  <div class="sm-6 md-8 lg-10 col">sm-6 md-8 lg-10 col</div>
  <div class="sm-6 md-4 lg-2 col">sm-6 md-4 lg-2 col</div>
</div>
<div class="row">
  <div class="sm-5 col">sm-5 col</div>
  <div class="col-fill col">col-fill col</div>
  <div class="col-fill col">col-fill col</div>
</div>
<div class="row">
  <div class="sm-4 col">Aligned</div>
  <div class="sm-4 col">Left (default)</div>
</div>
<div class="row flex-right">
  <div class="sm-4 col">Aligned</div>
  <div class="sm-4 col">Right (flex-right)</div>
</div>
<div class="row flex-center">
  <div class="sm-4 col">Aligned</div>
  <div class="sm-4 col">Center (flex-center)</div>
</div>
<div class="row flex-edges">
  <div class="sm-4 col">Aligned</div>
  <div class="sm-4 col">to edges (flex-edges)</div>
</div>
<div class="row flex-spaces">
  <div class="sm-4 col">Aligned</div>
  <div class="sm-4 col">to be evenly spaced (flex-spaces)</div>
</div>
<div class="row flex-top">
  <div class="sm-6 col">Aligned top</div>
  <div class="sm-6 col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
  </div>
</div>
<div class="row flex-middle">
  <div class="sm-6 col">Aligned middle</div>
  <div class="sm-6 col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
  </div>
</div>
<div class="row flex-bottom">
  <div class="sm-6 col">Aligned bottom</div>
  <div class="sm-6 col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
  </div>
</div>
<div class="row">
  <div class="sm-3 col align-bottom">Align bottom</div>
  <div class="sm-3 col align-middle">Align middle</div>
  <div class="sm-3 col align-top">Align top</div>
  <div class="sm-3 col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
  </div>
</div>
```
