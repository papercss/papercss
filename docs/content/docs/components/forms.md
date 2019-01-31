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
<fieldset class="form-group">
  <legend>Some Switch</legend>
  <p>Default - standard outline style (square & circle)</p>
  <label class="paper-switch">
    <input id="paperSwitch4" name="paperSwitch4" type="checkbox" />
    <span class="paper-switch-slider"></span>
  </label>
  <label for="paperSwitch4" class="paper-switch-label">
    Square switch
  </label>
</fieldset>
<fieldset class="form-group">
  <label for="paperSwitch5" class="paper-switch-label">
    Square switch
  </label>
  <label class="paper-switch">
    <input id="paperSwitch5" name="paperSwitch5" type="checkbox" checked />
    <span class="paper-switch-slider"></span>
  </label>
</fieldset>
<fieldset class="form-group">
  <label class="paper-switch">
    <input id="paperSwitch6" name="paperSwitch6" type="checkbox" checked />
    <span class="paper-switch-slider round"></span>
  </label>
  <label for="paperSwitch6" class="paper-switch-label">
    Circle switch
  </label>
</fieldset>
<fieldset class="form-group">
  <label for="paperSwitch7" class="paper-switch-label">
    Circle switch
  </label>
  <label class="paper-switch">
    <input id="paperSwitch7" name="paperSwitch7" type="checkbox" />
    <span class="paper-switch-slider round"></span>
  </label>
</fieldset>
<fieldset class="form-group">
  <p>Type2 - inline style (square & circle)</p>
  <label class="paper-switch-2">
    <input id="paperSwitch8" name="paperSwitch8" type="checkbox" checked />
    <span class="paper-switch-slider"></span>
  </label>
  <label for="paperSwitch8" class="paper-switch-2-label">
    Square switch
  </label>
</fieldset>
<fieldset class="form-group">
  <label for="paperSwitch9" class="paper-switch-2-label">
    Square switch
  </label>
  <label class="paper-switch-2">
    <input id="paperSwitch9" name="paperSwitch9" type="checkbox" />
    <span class="paper-switch-slider"></span>
  </label>
</fieldset>
<fieldset class="form-group">
  <label class="paper-switch-2">
    <input id="paperSwitch10" name="paperSwitch10" type="checkbox" />
    <span class="paper-switch-slider round"></span>
  </label>
  <label for="paperSwitch10" class="paper-switch-2-label">
    Circle switch
  </label>
</fieldset>
<fieldset class="form-group">
  <label for="paperSwitch11" class="paper-switch-2-label">
    Circle switch
  </label>
  <label class="paper-switch-2">
    <input id="paperSwitch11" name="paperSwitch11" type="checkbox" checked />
    <span class="paper-switch-slider round"></span>
  </label>
</fieldset>
<fieldset class="form-group">
  <p>Type3 - tile style (square & circle)</p>
  <label for="paperSwitch1" class="paper-switch-tile">
    <input id="paperSwitch1" name="paperSwitch1" type="checkbox" />
    <div class="paper-switch-tile-card border">
      <div class="paper-switch-tile-card-front border">Front</div>
      <div class="paper-switch-tile-card-back border background-primary">Back</div>
    </div>
  </label>
  <label for="paperSwitch2" class="paper-switch-tile">
    <input id="paperSwitch2" name="paperSwitch2" type="checkbox" />
    <div class="paper-switch-tile-card border">
      <div class="paper-switch-tile-card-front border background-warning">Off</div>
      <div class="paper-switch-tile-card-back border background-secondary">On</div>
    </div>
  </label>
  <label for="paperSwitch3" class="paper-switch-tile">
    <input id="paperSwitch3" name="paperSwitch3" type="checkbox" />
    <div class="paper-switch-tile-card border">
      <div class="paper-switch-tile-card-front border background-danger">Declined</div>
      <div class="paper-switch-tile-card-back border background-success">Accepted</div>
    </div>
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
<fieldset class="form-group">
  <legend>Some Switch</legend>
  <p>Default - standard outline style (square & circle)</p>
  <label class="paper-switch">
    <input id="paperSwitch4" name="paperSwitch4" type="checkbox" />
    <span class="paper-switch-slider"></span>
  </label>
  <label for="paperSwitch4" class="paper-switch-label">
    Square switch
  </label>
</fieldset>
<fieldset class="form-group">
  <label for="paperSwitch5" class="paper-switch-label">
    Square switch
  </label>
  <label class="paper-switch">
    <input id="paperSwitch5" name="paperSwitch5" type="checkbox" checked />
    <span class="paper-switch-slider"></span>
  </label>
</fieldset>
<fieldset class="form-group">
  <label class="paper-switch">
    <input id="paperSwitch6" name="paperSwitch6" type="checkbox" checked />
    <span class="paper-switch-slider round"></span>
  </label>
  <label for="paperSwitch6" class="paper-switch-label">
    Circle switch
  </label>
</fieldset>
<fieldset class="form-group">
  <label for="paperSwitch7" class="paper-switch-label">
    Circle switch
  </label>
  <label class="paper-switch">
    <input id="paperSwitch7" name="paperSwitch7" type="checkbox" />
    <span class="paper-switch-slider round"></span>
  </label>
</fieldset>
<fieldset class="form-group">
  <p>Type2 - inline style (square & circle)</p>
  <label class="paper-switch-2">
    <input id="paperSwitch8" name="paperSwitch8" type="checkbox" checked />
    <span class="paper-switch-slider"></span>
  </label>
  <label for="paperSwitch8" class="paper-switch-2-label">
    Square switch
  </label>
</fieldset>
<fieldset class="form-group">
  <label for="paperSwitch9" class="paper-switch-2-label">
    Square switch
  </label>
  <label class="paper-switch-2">
    <input id="paperSwitch9" name="paperSwitch9" type="checkbox" />
    <span class="paper-switch-slider"></span>
  </label>
</fieldset>
<fieldset class="form-group">
  <label class="paper-switch-2">
    <input id="paperSwitch10" name="paperSwitch10" type="checkbox" />
    <span class="paper-switch-slider round"></span>
  </label>
  <label for="paperSwitch10" class="paper-switch-2-label">
    Circle switch
  </label>
</fieldset>
<fieldset class="form-group">
  <label for="paperSwitch11" class="paper-switch-2-label">
    Circle switch
  </label>
  <label class="paper-switch-2">
    <input id="paperSwitch11" name="paperSwitch11" type="checkbox" checked />
    <span class="paper-switch-slider round"></span>
  </label>
</fieldset>
<fieldset class="form-group">
  <p>Type3 - tile style (square & circle)</p>
  <label for="paperSwitch1" class="paper-switch-tile">
    <input id="paperSwitch1" name="paperSwitch1" type="checkbox" />
    <div class="paper-switch-tile-card border">
      <div class="paper-switch-tile-card-front border">Front</div>
      <div class="paper-switch-tile-card-back border background-primary">Back</div>
    </div>
  </label>
  <label for="paperSwitch2" class="paper-switch-tile">
    <input id="paperSwitch2" name="paperSwitch2" type="checkbox" />
    <div class="paper-switch-tile-card border">
      <div class="paper-switch-tile-card-front border background-warning">Off</div>
      <div class="paper-switch-tile-card-back border background-secondary">On</div>
    </div>
  </label>
  <label for="paperSwitch3" class="paper-switch-tile">
    <input id="paperSwitch3" name="paperSwitch3" type="checkbox" />
    <div class="paper-switch-tile-card border">
      <div class="paper-switch-tile-card-front border background-danger">Declined</div>
      <div class="paper-switch-tile-card-back border background-success">Accepted</div>
    </div>
  </label>
</fieldset>
```
