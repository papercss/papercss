---
title: Lists
description: PaperCSS Lists
---

### Ordered Lists

<ol>
  <li>Do this</li>
  <li>Then this</li>
  <li>Finally this</li>
  <li>Then we'll go one deeper
    <ol>
      <li>Dillon</li>
      <li>Francis
        <ol>
          <li>What if we went...</li>
          <li>One more deeper?
            <ol>
              <li>DJ</li>
              <li>Hanzel
                <ol>
                  <li>Five levels should be enough</li>
                  <li>Right?</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </li>
  <li>But don't forget this</li>
</ol>

### Unordered Lists

<ul>
  <li>Let's try this</li>
  <li>Let's try this again
    <ul>
      <li>And now we are nested</li>
      <li>Pretty cool?
        <ul>
          <li>The list items are just text</li>
          <li>From this font
            <ul>
              <li>We'll keep going</li>
              <li>Until we hit
                <ul>
                  <li>LEVEL 5</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>And now we're are the top!</li>
</ul>

### Inline List

<ul class="inline">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>

#### Codes:

```html
<ol>
  <li>Do this</li>
  <li>Then this</li>
  <li>Finally this</li>
  <li>Then we'll go one deeper
    <ol>
      <li>Dillon</li>
      <li>Francis
        <ol>
          <li>What if we went...</li>
          <li>One more deeper?
            <ol>
              <li>DJ</li>
              <li>Hanzel
                <ol>
                  <li>Five levels should be enough</li>
                  <li>Right?</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </li>
  <li>But don't forget this</li>
</ol>

<!-- Replace ol with ul for unordered lists. Go up to 5 levels deep! -->

<!-- For inline lists -->
<ul class="inline">...</ul>
```
