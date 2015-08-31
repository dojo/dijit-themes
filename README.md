# themes
Dojo 1.x modern themes

### Getting Started

1. Install globally with npm `stylus` and `grunt-cli`.
2. Run `grunt bower-install-simple` to install Dojo and Dijit dependencies.
3. Run `grunt` to open the Dijit theme tester.

### Contributing New Themes

For general contributing guidelines see [Dojo's Contributing Guildlines](https://github.com/dojo/dojo/blob/master/CONTRIBUTING.md).

Adding a new theme:

1. Create a uniquely named directory in `dijit/themes`, also being the name of the theme.
2. Add the directory to `.gitignore`.
3. Add [Grunt](http://gruntjs.com/) tasks for the theme to `Gruntfile.js`.

Helpful information:

* [Dojo Documentation](http://dojotoolkit.org/documentation/)
* Kenneth Franqueiro's [dijit-claro-stylus](https://github.com/kfranqueiro/dijit-claro-stylus)
* [Stylus](https://learnboost.github.io/stylus/)
* [Grunt](http://gruntjs.com/)

## Themes

### Flat Theme

A _flat_ theme for Dijit based on [dijit-claro-stylus](https://github.com/kfranqueiro/dijit-claro-stylus) and loosely on [dojo-theme-flat](https://github.com/Esri/dojo-theme-flat). A complimentary [dgrid skin](https://github.com/SitePen/dgrid/pull/1174) is also being developed.

This theme is currently in **development**. Contributions welcome.

Run `grunt flat` to compile CSS and open Flat Theme's test application.
