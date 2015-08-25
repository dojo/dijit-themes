### Flat Theme

**To Do:**

1. Add editor icons.
2. Add a grid of icons to demo.

**Issues:**

1. Disabled dijits use transparency. This is an issue with background colors other than white. http://imgur.com/tWOK7cK
2. Toggle button doesn't maintain width when unchecked.
3. Tab padding needs to be applied to top/bottom/left/right tab classes independently to avoid 1px transparent gap in container border between each tab.
4. On lower quality displays the hover color (light gray) of menu items, selected Select options, MenuBar hover, etc are almost indistinguishable (Esri flat theme uses blue w/ white text).
5. Need to switch to a "opened" folder icon for `.dijitIconFolderOpen` and `.dijitFolderOpened`.
6. For input dijits with alternate color and required/validate, the border should also change via `.dijitTextBoxError` and equivalents. Alternate color styles are overriding.

**Updates to Yiweima's flat theme:**

1. Add default padding to ContentPane.
2. Increase padding for ContentPane in Tab/AccordionContainer.
3. Change Tooltip opacity to 1 (hard to read content when over other elements).
4. Add background color to RadioButton.
5. Fix `.dijitTab .tabLabel` minimum height to match icon size (caused border issue with top tabs).
6. Add padding to `.dijitSpinnerButtonInner` to fix up/down buttons (there may be a better way).
