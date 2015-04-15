CHANGE LOG
==========

Version 2.1
-----------
* Fixed a path separator bug in gulpfile.js which prevented gulp from building the app.

Version 2.0
-----------
* React upgraded to v0.12.2 (all packages upgraded to latest versions).
Bootstrap upgraded to v3.3.2.
* Enabled server side rendering (currently only NodeJS backend supported).
* Changes in the way Route components are defined now as we have switched to using react-router instead of rrouter. See routes.jsx for an example.
* Faster (about 3x) build times as we switched to webpack-dev-server handled by a new Gulp task (react:development).
* Integrated with React Hot Loader and BrowserSync.
* Changes to Nav, TabPane, Sidebar and SidebarControlBtn components with regards to key property being deprecated in React v0.12.2. See respective files for differences.


Version 1.0
-----------
* Initial Release
