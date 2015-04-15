var beautifyJs = require('js-beautify');
var beautifyHtml = require('js-beautify').html;
var beautifyCss = require('js-beautify').css;
var minify;

module.exports = function(options) {
  var options = extend({
    indent_size: 2,
    max_preserve_newlines: 1
  }, options || {});

  return function(req, res, next) {
    var renderer = res.render;
    var beautify;
    res.render = function(view, locals, callback) {

      if (String(view).toLowerCase().indexOf('.css') >= 0) {
        beautify = beautifyCss
      } else if (String(view).toLowerCase().indexOf('.js') >= 0) {
        beautify = beautifyJs
      } else {
        beautify = beautifyHtml
      }

      if (callback) {
        renderer.call(this, view, locals, function(err, html) {
          callback(err, beautify(html, options))
        });
      } else {
        renderer.call(this, view, locals, function(err, html) {
          res.send(err || beautify(html, options));
        });
      }
    }

    res.sendHtml = res.sendHTML = function(body) {
      res.send(beautifyHtml(body, options));
    }

    res.sendCss = res.sendCSS = function(body) {
      res.send(beautifyCss(body, options));
    }

    res.sendJs = res.sendJS = function(body) {
      res.send(beautifyJs(body, options));
    }

    next();
  }
}

module.exports.minify = function(options){

  try{
    minify = require('html-minifier').minify;
  }catch(e){
    throw new Error('html-minifier is not installed')
  }
  
  var options = extend({
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
  }, options || {});

  return function(req, res, next) {
    var renderer = res.render;
    res.render = function(view, locals, callback) {

      if (callback) {
        renderer.call(this, view, locals, function(err, html) {
          callback(err, minify(html, options))
        });
      } else {
        renderer.call(this, view, locals, function(err, html) {
          res.send(err || minify(html, options));
        });
      }
    }

    res.sendHtml = res.sendHTML = function(body) {
      res.send(minify(body, options));
    }

    // adapter
    res.sendCss = res.sendCSS = function(body) {
      res.send(body);
    }

    res.sendJs = res.sendJS = function(body) {
      res.send(body);
    }

    next();
  }

}

// Underscore _.extend
// Extend a given object with all the properties in passed-in object(s).
function extend(obj) {
  if (! obj instanceof Object ) return obj;
  var source, prop;
  for (var i = 1, length = arguments.length; i < length; i++) {
    source = arguments[i];
    for (prop in source) {
      if (hasOwnProperty.call(source, prop)) {
        obj[prop] = source[prop];
      }
    }
  }
  return obj;
};