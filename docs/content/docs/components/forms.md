---
title: Forms
description: PaperCSS Forms
---
<div class="form-group">
  <label for="paperInputs1">Input</label>
  <input type="text" placeholder="Nice input" id="paperInputs1">
</div>
<div class="row">
  <div class="col sm-4">
    <div class="form-group">
      <label for="paperInputs2">Block Level</label>
      <input class="input-block" type="text" id="paperInputs2">
    </div>
  </div>
  <div class="col sm-8">
    <div class="form-group">
      <label for="paperInputs3">Block Level</label>
      <input class="input-block" type="text" id="paperInputs3">
    </div>
  </div>
</div>
<div class="form-group">
  <label for="paperInputs4">Disabled</label>
  <input type="text" placeholder="Disabled" id="paperInputs4" disabled>
</div>
<div class="form-group">
  <label>Large Input</label>
  <textarea placeholder="Large input"></textarea>
</div>
<div class="form-group">
    <label>No Resize</label>
    <textarea class="no-resize" placeholder="No resize"></textarea>
</div>
<div class="form-group">
  <label for="paperSelects1">Select</label>
  <select id="paperSelects1">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <select>
</div>
<fieldset class="form-group">
  <legend>Some Radio Buttons</legend>
  <label for="paperRadios1" class="paper-radio">
    <input type="radio" name="paperRadios" id="paperRadios1" value="option 1">
    <span>This is the first option
      <span>
  </label>
  <label for="paperRadios2" class="paper-radio">
    <input type="radio" name="paperRadios" id="paperRadios2" value="option 2">
    <span>This is the second option
      <span>
  </label>
</fieldset>
<fieldset class="form-group">
  <legend>Some Check Boxes</legend>
  <label for="paperChecks1" class="paper-check">
    <input type="checkbox" name="paperChecks" id="paperChecks1" value="option 1">
    <span>This is the first check</span>
  </label>
  <label for="paperChecks2" class="paper-check">
    <input type="checkbox" name="paperChecks" id="paperChecks2" value="option 2">
    <span>This is the second check</span>
  </label>
</fieldset>

#### Code:

```html
<div class="form-group">
  <label for="paperInputs1">Input</label>
  <input type="text" placeholder="Nice input" id="paperInputs1">
</div>
<div class="row">
  <div class="col sm-4">
    <div class="form-group">
      <label for="paperInputs2">Block Level</label>
      <input class="input-block" type="text" id="paperInputs2">
    </div>
  </div>
  <div class="col sm-8">
    <div class="form-group">
      <label for="paperInputs3">Block Level</label>
      <input class="input-block" type="text" id="paperInputs3">
    </div>
  </div>
</div>
<div class="form-group">
  <label for="paperInputs4">Disabled</label>
  <input type="text" placeholder="Disabled" id="paperInputs4" disabled>
</div>
<div class="form-group">
  <label>Large Input</label>
  <textarea placeholder="Large input"></textarea>
</div>
<div class="form-group">
  <label>No Resize</label>
  <textarea class="no-resize" placeholder="No resize"></textarea>
</div>
<div class="form-group">
  <label for="paperSelects1">Select</label>
  <select id="paperSelects1">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  <select>
</div>
<fieldset class="form-group">
  <legend>Some Radio Buttons</legend>
  <label for="paperRadios1" class="paper-radio">
    <input type="radio" name="paperRadios" id="paperRadios1" value="option 1"> <span>This is the first option<span>
  </label>
  <label for="paperRadios2" class="paper-radio">
    <input type="radio" name="paperRadios" id="paperRadios2" value="option 2"> <span>This is the second option<span>
  </label>
</fieldset>
<fieldset class="form-group">
  <legend>Some Check Boxes</legend>
  <label for="paperChecks1" class="paper-check">
    <input type="checkbox" name="paperChecks" id="paperChecks1" value="option 1"> <span>This is the first check</span>
  </label>
  <label for="paperChecks2" class="paper-check">
    <input type="checkbox" name="paperChecks" id="paperChecks2" value="option 2"> <span>This is the second check</span>
  </label>
</fieldset>
```
