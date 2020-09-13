---
title: Dark Mode
description: PaperCSS Dark Mode
---

As of version `1.8.0`, PaperCSS supports a dark mode of the framework. Just add the `.dark` class to your `html` tag!

#### Examples

Here's what some of the components look like:

<div class="form-group">
  <label for="paperInputs1">Input</label>
  <input type="text" placeholder="Nice input" id="paperInputs1">
</div>

<button>
  Button
</button>

<div class="progress margin-bottom">
  <div class="bar w-25"></div>
</div>

<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Position</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Bob Dylan</td>
      <td>Musician</td>
      <td>California, USA</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Eric Clapton</td>
      <td>Musician</td>
      <td>Ohio, USA</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Daniel Kahneman</td>
      <td>Psychologist</td>
      <td>California, USA</td>
    </tr>
  </tbody>
</table>

<script>
  var html = document.documentElement;
  html.className += 'dark';
</script>

#### Code

```html
<html class='dark'>
  Dark mode styles are automatically applied with the dark class!
</html>
```
