---
title: Carousel
description: PaperCSS Carousel
---

<div id="paperCarousel1" class="paper-carousel border border-6">
  <div class="paper-carousel-inner">
    <input id="paper-carousel-1" name="paper-carousel" class="paper-carousel-open" type="radio" aria-hidden="true" hidden="" checked="checked" />
    <div class="paper-carousel-item">
      <img src="http://fakeimg.pl/2000x800/deefff/000/?text=PaperCSS" />
    </div>
    <input id="paper-carousel-2" name="paper-carousel" class="paper-carousel-open" type="radio" aria-hidden="true" hidden="" />
    <div class="paper-carousel-item">
      <img src="http://fakeimg.pl/2000x800/f5f0c6/000/?text=is" />
    </div>
    <input id="paper-carousel-3" name="paper-carousel" class="paper-carousel-open" type="radio" aria-hidden="true" hidden="" />
    <div class="paper-carousel-item">
      <img src="http://fakeimg.pl/2000x800/d0dbc2/000/?text=Awesome!" />
    </div>
    <input id="paper-carousel-4" name="paper-carousel" class="paper-carousel-open" type="radio" aria-hidden="true" hidden="" />
    <div class="paper-carousel-item">
      <h3 class="paper-carousel-title ">Yupp from top!</h3>
      <img src="http://fakeimg.pl/2000x800/f0cbc9/000/?text=There is title option?..." />
      <h3 class="paper-carousel-title ">Yepp from bottom!</h3>
    </div>
    <label for="paper-carousel-4" class="paper-carousel-control prev pc-control-1">‹</label>
    <label for="paper-carousel-2" class="paper-carousel-control next pc-control-1">›</label>
    <label for="paper-carousel-1" class="paper-carousel-control prev pc-control-2">‹</label>
    <label for="paper-carousel-3" class="paper-carousel-control next pc-control-2">›</label>
    <label for="paper-carousel-2" class="paper-carousel-control prev pc-control-3">‹</label>
    <label for="paper-carousel-4" class="paper-carousel-control next pc-control-3">›</label>
    <label for="paper-carousel-3" class="paper-carousel-control prev pc-control-4">‹</label>
    <label for="paper-carousel-1" class="paper-carousel-control next pc-control-4">›</label>
    <ol class="paper-carousel-indicators">
      <li> <label for="paper-carousel-1" class="paper-carousel-bullet">•</label> </li>
      <li> <label for="paper-carousel-2" class="paper-carousel-bullet">•</label> </li>
      <li> <label for="paper-carousel-3" class="paper-carousel-bullet">•</label> </li>
      <li> <label for="paper-carousel-4" class="paper-carousel-bullet">•</label> </li>
    </ol>
  </div>
</div>

#### Limitations:

- Max 10 slide.
- (without js) There is no autoslide. 

#### Code:

If you want pretence stocked papers, please add also a border style (example ```.border-6```) class to the ```.paper-carousel```.

```html
<!-- without stock -->
<div class="paper-carousel border">
<!-- with stock -->
<div class="paper-carousel border border-6"> 
```

```html
<div id="paperCarousel1" class="paper-carousel border border-6">
  <div class="paper-carousel-inner">
    <input id="paper-carousel-1" name="paper-carousel" class="paper-carousel-open" type="radio" aria-hidden="true" hidden="" checked="checked" />
    <div class="paper-carousel-item">
      <img src="http://fakeimg.pl/2000x800/deefff/000/?text=PaperCSS" />
    </div>
    <input id="paper-carousel-2" name="paper-carousel" class="paper-carousel-open" type="radio" aria-hidden="true" hidden="" />
    <div class="paper-carousel-item">
      <img src="http://fakeimg.pl/2000x800/f5f0c6/000/?text=is" />
    </div>
    <input id="paper-carousel-3" name="paper-carousel" class="paper-carousel-open" type="radio" aria-hidden="true" hidden="" />
    <div class="paper-carousel-item">
      <img src="http://fakeimg.pl/2000x800/d0dbc2/000/?text=Awesome!" />
    </div>
    <input id="paper-carousel-4" name="paper-carousel" class="paper-carousel-open" type="radio" aria-hidden="true" hidden="" />
    <div class="paper-carousel-item">
      <h3 class="paper-carousel-title ">Yupp from top!</h3>
      <img src="http://fakeimg.pl/2000x800/f0cbc9/000/?text=There is title option?..." />
      <h3 class="paper-carousel-title ">Yepp from bottom!</h3>
    </div>
    <label for="paper-carousel-4" class="paper-carousel-control prev pc-control-1">‹</label>
    <label for="paper-carousel-2" class="paper-carousel-control next pc-control-1">›</label>
    <label for="paper-carousel-1" class="paper-carousel-control prev pc-control-2">‹</label>
    <label for="paper-carousel-3" class="paper-carousel-control next pc-control-2">›</label>
    <label for="paper-carousel-2" class="paper-carousel-control prev pc-control-3">‹</label>
    <label for="paper-carousel-4" class="paper-carousel-control next pc-control-3">›</label>
    <label for="paper-carousel-3" class="paper-carousel-control prev pc-control-4">‹</label>
    <label for="paper-carousel-1" class="paper-carousel-control next pc-control-4">›</label>
    <ol class="paper-carousel-indicators">
      <li> <label for="paper-carousel-1" class="paper-carousel-bullet">•</label> </li>
      <li> <label for="paper-carousel-2" class="paper-carousel-bullet">•</label> </li>
      <li> <label for="paper-carousel-3" class="paper-carousel-bullet">•</label> </li>
      <li> <label for="paper-carousel-4" class="paper-carousel-bullet">•</label> </li>
    </ol>
  </div>
</div>
```

#### JS & jQuery snippet:

```js
var settingsTickTime = 3000; /* in miliseconds -> 1000ms = 1s */

var i;
var paperCarousel1 = document.getElementById('paperCarousel1');
/* jQuery:
var paperCarousel1 = $('#paperCarousel1'); */
var paperCarousel1SlideIndex = 1;

showpaperCarousel1Slides(paperCarousel1SlideIndex);

function pluspaperCarousel1Slides(n) {
  showpaperCarousel1Slides(paperCarousel1SlideIndex += n);
}

function showpaperCarousel1Slides(n) {
  var slides = document.getElementsByClassName("paper-carousel-open");
  /* jQuery:
  var slides = $(".paper-carousel-open"); */
  if (n > slides.length) {paperCarousel1SlideIndex = 1}
  if (n < 1) {paperCarousel1SlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].checked = false;
  }
  slides[paperCarousel1SlideIndex-1].checked = true;
}

var paperCarousel1Interval = setInterval( () => {
  pluspaperCarousel1Slides(1);
}, settingsTickTime);

paperCarousel1.onmouseenter = function(e) {
  clearInterval(paperCarousel1Interval);
};

paperCarousel1.onmouseleave = function(e) {
  paperCarousel1Interval = setInterval( () => {
    pluspaperCarousel1Slides(1);
  }, settingsTickTime);
};
```
