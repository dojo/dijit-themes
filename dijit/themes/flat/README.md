### Flat Theme

**To Do:**

1. Icons!
  * Is this is the icon set we want to go with?
  * Do we want a robust set of icons to come with the theme?
  * Editor icons are missing.
  * Add a grid of icons to demo.
2. Fix any outlying dijits using opacity for disabled.
3. As this is a "flat" theme, discuss whether calendar and and popups should have a box-shadow.

**Issues:**

1. Toggle button doesn't maintain width when unchecked.
2. For input dijits with alternate color and required/validate, the border should also change via `.dijitTextBoxError` and equivalents. Alternate color styles are overriding.
3. Hover and selected calendar days with background 50% border radius looks a bit off.
4. `.dijitValidationTextBoxError .dijitValidationContainer` line-height is being overridden by the default icon line-height causing the icon not to be vertically aligned properly. The line-height of `td.dijitMenuItemIconCell` is causing the icon to be shifted down.

**Improvements**

1. Consider typography, complimentary styling for native elements, helper classes, etc; and some components like Bootstrap.
2. Alternate colors for text input dijits, checkboxes, radio buttons, sliders, title pane, tooltips.
