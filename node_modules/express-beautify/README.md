# express-beautify

This tool make express output HTML, JS, CSS human-readable, rendered by any template engine.

**Yes, minify also supported!**
You can beautify youe code at **development**, minify it at **production**.

##Usage

####  Install

````js
npm install express-beautify
````
####  Setup
````js
var express = require('express');
var engines = require('consolidate'); // Here use consolidate + Swig foe example
var expressBeautify = require('express-beautify')(/*Options*/);

var app = express();

    app.engine('html', engines.swig); // render html file using swig
    app.engine('js', engines.swig); // render js file using swig
    app.engine('css', engines.swig); // render css file using swig
    app.set('view engine', 'html');
    
    app.use(expressBeautify); // express-beautify filter
    
````
####  Examples 

````js
    // Render something
    app.get('/', function(req, res, next){
        res.render('index');
    });
    
    app.get('/renderJs', function(req, res, next){
        res.render('index.js');
    });
    
    app.get('/renderCss', function(req, res, next){
        res.render('index.css');
    });
    
    // Send something
    
    app.get('/sendHTML', function(req, res, next){
        res.sendHTML('<div>Hello <span>World</span></div>');
    });
    
    app.get('/sendJS', function(req, res, next){
        res.sendJS("(function(){alert('Hola!');})()");
    });
    
    app.get('/sendCSS', function(req, res, next){
        res.sendCSS("body{display:'none'}");
    });
    
    app.listen(8080);
    
````

#### Beautify Default Options
 See [js-beautify](https://www.npmjs.com/package/js-beautify)
````json
{
    "indent_size": 2,
    "indent_char": " ",
    "indent_level": 0,
    "indent_with_tabs": false,
    "preserve_newlines": true,
    "max_preserve_newlines": 1,
    "jslint_happy": false,
    "space_after_anon_function": false,
    "brace_style": "collapse",
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_before_conditional": true,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false,
    "wrap_line_length": 0
}
````

## Minify

````javascript
var expressMinify = require('express-beautify').minify(/*Options*/);
app.use(expressMinify);

````
#### Minify Default Options
See [html-minifier](https://www.npmjs.com/package/html-minifier)

````json
{
  "collapseWhitespace": true,
  "minifyCSS": true,
  "minifyJS": true,
  "removeAttributeQuotes": true,
  "removeComments": true,
}
````