### Flat Theme

**To Do:**

1. Add editor icons.
2. Add a grid of icons to demo.

**Issues:**

1. Disabled dijits use transparency. This is an issue with background colors other than white. http://imgur.com/tWOK7cK
2. Toggle button doesn't maintain width when unchecked.
3. Tab padding needs to be applied to top/bottom/left/right tab classes independently to avoid 1px transparent gap in container border between each tab.
4. Need to switch to a "opened" folder icon for `.dijitIconFolderOpen` and `.dijitFolderOpened`.
5. For input dijits with alternate color and required/validate, the border should also change via `.dijitTextBoxError` and equivalents. Alternate color styles are overriding.
6. Hover and selected calendar days look a bit off...

**Improvements**

1. Consider typography, styling for tables, etc; and some components like Bootstrap.
2. For alternate colors switch to a standardized class name like `alt-primary`, etc.