/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;
/******/
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.loaded = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(1);
  module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var route               = __webpack_require__(3);
  var PathnameRouting     = __webpack_require__(8);
  var HashRouting         = __webpack_require__(9);
  var Link                = __webpack_require__(4);
  var LinkMixin           = __webpack_require__(5);
  var descriptors         = __webpack_require__(6);
  var RoutingContextMixin = __webpack_require__(7);

  module.exports = {
    isRoutes: descriptors.isRoutes,
    Routes: descriptors.Routes,
    Route: descriptors.Route,
    Link:Link,
    LinkMixin:LinkMixin,
    start: PathnameRouting.start.bind(PathnameRouting),
    route:route,
    PathnameRouting:PathnameRouting,
    HashRouting:HashRouting,
    RoutingContextMixin:RoutingContextMixin
  };


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  /** @jsx React.DOM */
  window.RRouter = __webpack_require__(1);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';


  var Promise       = __webpack_require__(22);
  var matchRoutes   = __webpack_require__(10);
  var data          = __webpack_require__(11);
  var fetchViews    = __webpack_require__(12);
  var DummyRouting  = __webpack_require__(13);

  function route(routes, path, query) {
    query = query || '';
    return new Promise(function(resolve, reject)  {
      var match = matchRoutes(routes, path, query);
      return fetchViews(match).then(data.fetch).then(function(match)  {
        var routing = new DummyRouting(routes, match, path, query);
        var viewFactory = routing.createViewFactory(match);
        viewFactory.match = match;
        return viewFactory;
      }).then(resolve, reject);
    });
  }

  module.exports = route;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';


  var LinkMixin = __webpack_require__(5);

  var Link = React.createClass({displayName: 'Link',
    mixins: [LinkMixin],

    onClick: function(e) {
      e.preventDefault();
      if(this.href() === '#')
        return;
      this.activate();
    },

    render: function() {
      var href = this.href();
      var pathname = window.location.pathname;
      if(href.search('#') !== -1) {
        href = pathname + href;
      } else {
        href = pathname + '#' + href;
      }
      return this.transferPropsTo(
        React.DOM.a( {href:href, onClick:this.onClick}, 
          this.props.children
        )
      );
    }
  });

  module.exports = Link;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';


  var invariant           = __webpack_require__(14);
  var RoutingContextMixin = __webpack_require__(7);
  var makeHref            = __webpack_require__(15);

  var LinkMixin = {
    mixins: [RoutingContextMixin],

    propTypes: {
      to: React.PropTypes.string,
      href: React.PropTypes.string,
      query: React.PropTypes.object
    },

    activate: function() {
      var routing = this.getRouting();
      if (this.props.href) {
        routing.navigate(this.props.href, this.props.navigation);
      } else if (this.props.to) {
        routing.navigateTo(this.props.to, this.props, this.props.navigation);
      } else {
        invariant(
          false,
          'provide either "to" or "href" prop to Link component'
        );
      }
    },

    href: function() {
      if (this.props.href) {
        return this.props.href;
      } else if (this.props.to) {
        return this.getRouting().makeHref(this.props.to, this.props);
      } else {
        invariant(
          false,
          'provide either "to" or "href" prop to Link component'
        );
      }
    }
  };

  module.exports = LinkMixin;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var merge = __webpack_require__(16);

  var slashes = /(^\/)|(\/$)/g;

  /**
   * Route desriptor constructor
   *
   * @param {Object} props
   * @param {Object...} children
   * @returns {Route}
   */
  function Route(props) {
    props = props ? merge({}, props) : {};

    var path = props.path;

    if (typeof path === 'string') {
      path = path.replace(slashes, '');
    }

    delete props.path;

    var view = props.view;
    delete props.view;

    var viewPromise = props.viewPromise;
    delete props.viewPromise;

    var name = props.name;
    delete props.name;

    var __scope = props.__scope;
    delete props.__scope;

    var args = Array.prototype.slice.call(arguments, 1);

    var children = [];

    // so we support passing routes as arguments and arrays
    for (var i = 0, len = args.length; i < len; i++) {
      if (Array.isArray(args[i])) {
        children = children.concat(args[i]);
      } else {
        children.push(args[i]);
      }
    }

    var route = {path:path, name:name, view:view, viewPromise:viewPromise, props:props, children:children, __scope:__scope};
    buildNameIndex(route);
    return route;
  }

  function Routes(props) {
    props = merge(props, {__scope: true});
    var args = Array.prototype.slice.call(arguments, 1);
    args.unshift(props);
    return Route.apply(null, args);
  }

  function buildNameIndex(route) {
    if (route.__nameIndex !== undefined) {
      return;
    }

    var index = {};
    var prefix = route.name ? route.name + '/' : '';

    if (route.children && route.children.length > 0) {
      for (var i = 0, len = route.children.length; i < len; i++) {
        var r = route.children[i];
        buildNameIndex(r);
        for (var name in r.__nameIndex) {
          index[prefix + name] = [route].concat(r.__nameIndex[name]);
        }
      }
    }

    if (route.name !== undefined) {
      index[route.name] = [route];
    }

    Object.defineProperty(route, '__nameIndex', {
      enumerable: false,
      value: index
    });
  }

  function getTraceByName(route, name) {
    return route.__nameIndex[name];
  }

  function hasView(route) {
    return route.view !== undefined || route.viewPromise !== undefined;
  }

  function isRoutes(routes) {
    return (
      routes.hasOwnProperty('path')
      && routes.hasOwnProperty('view')
      && routes.hasOwnProperty('props')
      && routes.hasOwnProperty('children')
    );
  }

  module.exports = {
    Route:Route,
    Routes:Routes,
    isRoutes:isRoutes,
    getTraceByName:getTraceByName,
    hasView:hasView
  };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';


  var invariant = __webpack_require__(14);

  var contextTypes = {
    routing: React.PropTypes.object
  };

  var RoutingContextMixin = {
    contextTypes: contextTypes,

    getRouting: function() {
      invariant(
        this.context.routing,
        'no routing found in context'
      );
      return this.context.routing;
    }
  };

  module.exports = RoutingContextMixin;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var Routing = __webpack_require__(17);

  for(var Routing____Key in Routing){if(Routing.hasOwnProperty(Routing____Key)){PathnameRouting[Routing____Key]=Routing[Routing____Key];}}var ____SuperProtoOfRouting=Routing===null?null:Routing.prototype;PathnameRouting.prototype=Object.create(____SuperProtoOfRouting);PathnameRouting.prototype.constructor=PathnameRouting;PathnameRouting.__superConstructor__=Routing;function PathnameRouting(){if(Routing!==null){Routing.apply(this,arguments);}}

    PathnameRouting.prototype.getPath=function() {
      return window.location.pathname;
    };

    PathnameRouting.prototype.getQuery=function() {
      return window.location.search.substr(1);
    };

    PathnameRouting.prototype.pushPath=function(path) {
      window.history.pushState({}, '', path);
    };

    PathnameRouting.prototype.replacePath=function(path) {
      window.history.replaceState({}, '', path);
    };

    PathnameRouting.prototype.doStart=function() {
      window.addEventListener('popstate', this.onBackButton);
    };

    PathnameRouting.prototype.doStop=function() {
      window.removeEventListener('popstate', this.onBackButton);
    };


  module.exports = PathnameRouting;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var Routing = __webpack_require__(17);

  for(var Routing____Key in Routing){if(Routing.hasOwnProperty(Routing____Key)){HashRouting[Routing____Key]=Routing[Routing____Key];}}var ____SuperProtoOfRouting=Routing===null?null:Routing.prototype;HashRouting.prototype=Object.create(____SuperProtoOfRouting);HashRouting.prototype.constructor=HashRouting;HashRouting.__superConstructor__=Routing;function HashRouting(){if(Routing!==null){Routing.apply(this,arguments);}}

    HashRouting.prototype.getPath=function() {
      return this.getParsedPath().path;
    };

    HashRouting.prototype.getQuery=function() {
      return this.getParsedPath().query;
    };

    HashRouting.prototype.getParsedPath=function() {
      var path = window.location.hash.slice(1) || '/';
      var idx = path.indexOf('?');
      if (idx > -1) {
        return {path: path.substring(0, idx), query: path.substring(idx + 1)};
      } else {
        return {path:path, query: ''};
      }
    };

    HashRouting.prototype.pushPath=function(path) {
      window.location.hash = path;
    };

    HashRouting.prototype.replacePath=function(path) {
      var href = window.location.href.replace(/(javascript:|#).*$/, '');
      window.location.replace(href + '#' + path);
    };

    HashRouting.prototype.makeHref=function(name, params) {
      return '#' + ____SuperProtoOfRouting.makeHref.call(this,name, params);
    };

    HashRouting.prototype.doStart=function() {
      window.addEventListener('hashchange', this.onBackButton);
    };

    HashRouting.prototype.doStop=function() {
      window.removeEventListener('hashchange', this.onBackButton);
    };


  module.exports = HashRouting;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var pattern  = __webpack_require__(25);
  var qs       = __webpack_require__(24);
  var hasView  = __webpack_require__(6).hasView;
  var isString = __webpack_require__(18);

  /**
   * Normalize path
   *
   * @param {String} path
   * @returns {String}
   */
  function normalize(path) {
    if (!path) {
      return '/';
    }
    if (path[0] !== '/') {
      path = '/' + path;
    }
    if (path[path.length - 1] !== '/') {
      path = path + '/';
    }
    return path;
  }

  /**
   * Match route against path
   *
   * @param {Route} route
   * @param {String} path
   * @returns {Match|Null}
   */
  function matchRoute(route, path) {

    if (route.pattern === undefined && route.path !== undefined) {
      var routePattern;

      if (route.path instanceof RegExp) {
        routePattern = route.path;
      } else {
        var routePath = normalize(route.path);
        routePattern = route.children.length > 0 ? routePath + '*' : routePath;
      }

      Object.defineProperty(route, 'pattern', {
        enumerable: false,
        value: pattern.newPattern(routePattern)
      });
    }

    if (route.pattern) {
      var match = route.pattern.match(path);

      if (match) {
        if (route.pattern.isRegex) {
          match = {_: match};
        }

        if (!match._ || match._[0] === '/' || match._[0] === '') {
          delete match._;
        }
      }

      return match;

    } else {
      return path === '/' || path === '' ? {} : {_: [path]};
    }
  }

  function matchRoutesImpl(routes, path, query, trace, activeTrace, originalPath) {
    routes = Array.isArray(routes) ? routes : [routes];
    trace = trace || [];
    activeTrace = activeTrace || [];
    originalPath = originalPath === undefined ? path : originalPath;

    for (var i = 0, len = routes.length; i < len; i++) {
      var route = routes[i];
      var match = matchRoute(route, normalize(path));

      if (!match) {
        continue;
      }

      var step = {route:route, match:match, props: {query:query}};

      trace = trace.concat(step);

      activeTrace = route.view !== undefined ?
        [step] : activeTrace.concat(step);

      if ((match._ || !hasView(route)) && route.children.length > 0) {
        return matchRoutesImpl(
          route.children, match._ ? match._[0] : '/', query,
          trace, activeTrace, originalPath);
      } else {
        return {path: originalPath, query:query, route:route, trace:trace, activeTrace:activeTrace};
      }
    }

    return {
      path: originalPath,
      query:query,
      route: undefined,
      trace: [],
      activeTrace: []
    };
  }

  /**
   * Match routes against path
   *
   * @param {Route} routes
   * @param {String} path
   * @returns {Match}
   */
  function matchRoutes(routes, path, query) {
    query = query === undefined ? {} : isString(query) ? qs.parse(query) : query;
    return matchRoutesImpl(routes, path, query);
  }

  module.exports = matchRoutes;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var Promise       = __webpack_require__(22);
  var merge         = __webpack_require__(16);
  var emptyFunction = __webpack_require__(19);
  var getStepProps  = __webpack_require__(20);

  /**
   * Make task
   *
   * @param {String} name
   * @param {Function} fetch
   * @returns {Function}
   */
  function makeTask(fetch, deferred) {
    return function start(props, promises, match) {
      var promise = fetch(props, promises, match);

      if (promise.isFulfilled()) {
        deferred.resolve(promise.value());
        return promise;
      } else {
        return promise.then(
          function(result)  {
            deferred.resolve(result);
            return result;
          },
          function(err)  {
            deferred.reject(err);
            throw err;
          }
        );
      }
    };
  }

  var isPromisePropRe = /([a-zA-Z0-9]+)Promise$/;

  /**
   * Fetch all promises defined in props
   *
   * @param {Object} props
   * @returns {Promise<Object>}
   */
  function fetchProps(props, match) {
    var newProps = {};

    var deferreds = {};
    var promises = {};
    var tasks = {};

    var name;

    for (name in props) {
      var m = isPromisePropRe.exec(name);
      if (m) {
        var promiseName = m[1];
        var deferred = Promise.defer();
        tasks[promiseName] = makeTask(props[name], deferred);
        deferreds[promiseName] = deferred.promise;
      } else {
        newProps[name] = props[name];
      }
    }

    // not *Promise props, shortcircuit!
    if (Object.keys(deferreds).length === 0) {
      return Promise.resolve(props);
    }

    var isFulfilled = true;

    for (name in tasks) {
      var promise = tasks[name](newProps, deferreds, match);
      isFulfilled = isFulfilled && promise.isFulfilled();
      promises[name] = promise.isFulfilled() ? promise.value() : promise;
    }

    // every promise is resolved (probably from some DB cache?), shortcircuit!
    if (isFulfilled) {
      return Promise.resolve(merge(newProps, promises));
    }

    return Promise.props(promises)
      .then(function(props)  {return merge(newProps, props);})
      .finally(function()  {
        for (var name in deferreds) {
          deferreds[name].catch(emptyFunction);
        }
      });
  }

  function fetchStep(step, match) {
    var props = fetchProps(getStepProps(step), match);
    // step is resolved, shortcircuit!
    if (props.isFulfilled()) {
      return Promise.resolve(
        merge(step, {props: merge(step.props, props.value())}));
    } else {
      return Promise.props(props).then(function(props) 
        {return merge(step, {props: merge(step.props, props)});});
    }
  }

  function fetchProgressively(match, onProgress, onError) {
    var activeTrace = match.activeTrace;
    var latch = activeTrace.length;

    activeTrace.forEach(function(step, idx)  {
      var promise = fetchStep(step, match);

      if (promise.isFulfilled()) {
        latch = latch - 1;
        activeTrace = activeTrace.slice(0);
        activeTrace[idx] = promise.value();
      } else {
        promise.then(function(step)  {
          activeTrace = activeTrace.slice(0);
          activeTrace[idx] = step;
          onProgress(merge(match, {activeTrace:activeTrace}));
        }).catch(onError);
      }
    });

    return merge(match, {activeTrace:activeTrace});
  }

  function fetch(match) {
    return Promise.all(match.activeTrace.map(function(step) {
      return fetchStep(step, match);
    })).then(function(activeTrace)  {return merge(match, {activeTrace:activeTrace});});
  }

  module.exports = {
    fetch:fetch,
    fetchProgressively:fetchProgressively,
    fetchProps:fetchProps
  };


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var merge   = __webpack_require__(16);
  var Promise = __webpack_require__(22);

  function fetchViewsStep(step) {
    var props = merge(step.match, step.route.props);
    return step.route.viewPromise ?
      step.route.viewPromise(props).then(function(view)  {return merge(step, {view:view});}) :
      step;
  }

  /**
   * Fetch views for match
   *
   * @param {Match} match
   * @returns {Match}
   */
  function fetchViews(match) {
    var activeTrace = match.activeTrace.map(fetchViewsStep);

    return activeTrace.some(Promise.is) ?
      Promise.all(activeTrace).then(function(activeTrace)  {return merge(match, {activeTrace:activeTrace});}) :
      Promise.resolve(merge(match, {activeTrace:activeTrace}));
  }

  module.exports = fetchViews;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var Routing = __webpack_require__(17);

  for(var Routing____Key in Routing){if(Routing.hasOwnProperty(Routing____Key)){DummyRouting[Routing____Key]=Routing[Routing____Key];}}var ____SuperProtoOfRouting=Routing===null?null:Routing.prototype;DummyRouting.prototype=Object.create(____SuperProtoOfRouting);DummyRouting.prototype.constructor=DummyRouting;DummyRouting.__superConstructor__=Routing;

    function DummyRouting(routes, match, path, query) {
      this.routes = routes;
      this.match = match;
      this.path = path;
      this.query = query;
    }

    DummyRouting.prototype.getPath=function() {
      return this.path;
    };

    DummyRouting.prototype.getQuery=function() {
      return this.query;
    };

    DummyRouting.prototype.update=function() {
      throw new Error('not implemented');
    };

    DummyRouting.prototype.pushPath=function(path) {
      throw new Error('not implemented');
    };

    DummyRouting.prototype.replacePath=function(path) {
      throw new Error('not implemented');
    };

    DummyRouting.prototype.doStart=function() {
      throw new Error('not implemented');
    };

    DummyRouting.prototype.doStop=function() {
      throw new Error('not implemented');
    };


  module.exports = DummyRouting;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright 2013-2014 Facebook, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * @providesModule invariant
   */

  "use strict";

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var invariant = function(condition) {
    if (!condition) {
      var error = new Error(
        'Minified exception occured; use the non-minified dev environment for ' +
        'the full error message and additional helpful warnings.'
      );
      error.framesToPop = 1;
      throw error;
    }
  };

  if (process.env.NODE_ENV !== 'production') {
    invariant = function(condition, format, a, b, c, d, e, f) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }

      if (!condition) {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        var error = new Error(
          'Invariant Violation: ' +
          format.replace(/%s/g, function() { return args[argIndex++]; })
        );
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
      }
    };
  }

  module.exports = invariant;
  
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var invariant       = __webpack_require__(14);
  var getTraceByName  = __webpack_require__(6).getTraceByName;

  function makeHref(routes, name, match, params) {
    params = params || {};
    var pattern = getPattern(routes, name, match);
    // TODO: handle optional and splat params
    return pattern.replace(
      /:[a-zA-Z0-9_]+/g,
      function(name)  {return params[name.slice(1)];}
    );
  }

  function getPattern(routes, name, match) {
    var trace = getScopedTrace(routes, name, match);

    invariant(
      trace !== undefined && trace.length > 0,
      'cannot resolve "%s" route reference', name
    );

    var href = '';
    for (var i = 0, len = trace.length; i < len; i++) {
      var route = trace[i];
      if (route.path && route.path.length > 0) {
        href = href + '/' + route.path;
      }
    }

    return href === '' ? '/' : href;
  }

  function getScopedTrace(routes, name, match) {
    if (name[0] === '/') {
      return getTraceByName(routes, name.slice(1));
    } else {
      var trace = match.trace.map(function(step)  {return step.route;});
      var scope = trace[0];

      for (var i = trace.length - 1; i >= 0; i--) {
        if (trace[i].__scope) {
          scope = trace[i];
          break;
        }
      }

      return trace
        .slice(0, i)
        .concat(getTraceByName(scope, name));
    }
  }

  module.exports = makeHref;
  module.exports.getPattern = getPattern;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2014 Facebook, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * @providesModule merge
   */

  "use strict";

  var mergeInto = __webpack_require__(21);

  /**
   * Shallow merges two structures into a return value, without mutating either.
   *
   * @param {?object} one Optional object with properties to merge from.
   * @param {?object} two Optional object with properties to merge from.
   * @return {object} The shallow extension of one by two.
   */
  var merge = function(one, two) {
    var result = {};
    mergeInto(result, one);
    mergeInto(result, two);
    return result;
  };

  module.exports = merge;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';


  var makeViewFactory = __webpack_require__(23);
  var matchRoutes     = __webpack_require__(10);
  var data            = __webpack_require__(11);
  var fetchViews      = __webpack_require__(12);
  var makeHref        = __webpack_require__(15);

  function throwError(err) {
    throw err;
  }



    function Routing(routes, onRoute, onError) {
      this.routes = routes;
      this.onRoute = onRoute;
      this.onError = onError || throwError;
      this.onChange = this.onChange.bind(this);
      this.onBackButton = this.onBackButton.bind(this);
      this.path = null;
      this.match = null;
      this.started = false;
    }

    Routing.prototype.onChange=function(navigation) {
      navigation = navigation || {};
      var path = this.getPath();
      var query = this.getQuery();
      if (this.path !== path || this.query !== query) {
        this.$Routing_route(path, query, navigation);
      }
    };

    Routing.prototype.onBackButton=function() {
      this.onChange({back: true});
    };

    Routing.prototype.update=function() {
      this.$Routing_route(this.getPath(), this.getQuery());
    };

    Routing.prototype.$Routing_route=function(path, query, navigation) {
      this.path = path;
      this.query = query;
      this.match = matchRoutes(this.routes, path, query);

      var expectedMatch = this.match;

      var render = function(match)  {
        if (this.match === expectedMatch) {
          var viewFactory = this.createViewFactory(match);
          try {
            this.onRoute(viewFactory, match, navigation);
          } catch(e) {
            match = matchRoutes(this.routes, '/404', query);
            viewFactory = this.createViewFactory(match);
            this.onRoute(viewFactory, match, navigation);
            throw e;
          }
        }
      }.bind(this);

      var promise = fetchViews(this.match);

      if (promise.isFulfilled()) {
        render(data.fetchProgressively(promise.value(), render, this.onError));
      } else {
        promise.then(function(match)  {
          render(data.fetchProgressively(match, render, this.onError));
        }.bind(this), this.onError);
      }

      return this.match;
    };

    Routing.prototype.createViewFactory=function(match) {
      var context = {routing: this};
      var viewFactory = makeViewFactory(match);
      return function contextualViewFactory(props) {
        return React.withContext(context, function()  {return viewFactory(props);});
      }
    };

    Routing.prototype.navigate=function(path, navigation) {
      navigation = navigation || {};
      if (navigation.replace) {
        this.replacePath(path, navigation);
      } else {
        this.pushPath(path, navigation);
      }
      return this.onChange(navigation);
    };

    Routing.prototype.navigateTo=function(routeRef, props, navigation) {
      var path = this.makeHref(routeRef, props);
      this.navigate(path, navigation);
    };

    Routing.prototype.makeHref=function(name, params) {
      return makeHref(this.routes, name, this.match, params);
    };

    Routing.prototype.start=function() {
      if (!this.started) {
        this.doStart();
        this.onChange({initial: true});
        this.started = true;
      }
      return this;
    };

    Routing.prototype.stop=function() {
      if (this.started) {
        this.doStop();
        this.started = false;
      }
      return this;
    };

    Routing.start=function(routes, onRoute, onError) {
      return new this(routes, onRoute, onError).start();
    };


  module.exports = Routing;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  function isString(o) {
    return Object.prototype.toString.call(o) === '[object String]';
  }

  module.exports = isString;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2014 Facebook, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * @providesModule emptyFunction
   */
  'use strict';

  var copyProperties = __webpack_require__(27);

  function makeEmptyFunction(arg) {
    return function() {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  function emptyFunction() {}

  copyProperties(emptyFunction, {
    thatReturns: makeEmptyFunction,
    thatReturnsFalse: makeEmptyFunction(false),
    thatReturnsTrue: makeEmptyFunction(true),
    thatReturnsNull: makeEmptyFunction(null),
    thatReturnsThis: function() { return this; },
    thatReturnsArgument: function(arg) { return arg; }
  });

  module.exports = emptyFunction;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var mergeInto = __webpack_require__(21);

  function getStepProps(step) {
    var props = {};
    mergeInto(props, step.match);
    mergeInto(props, step.route.props);
    mergeInto(props, step.props);
    return props;
  }

  module.exports = getStepProps;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2014 Facebook, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * @providesModule mergeInto
   * @typechecks static-only
   */

  "use strict";

  var mergeHelpers = __webpack_require__(28);

  var checkMergeObjectArg = mergeHelpers.checkMergeObjectArg;

  /**
   * Shallow merges two structures by mutating the first parameter.
   *
   * @param {object} one Object to be merged into.
   * @param {?object} two Optional object with properties to merge from.
   */
  function mergeInto(one, two) {
    checkMergeObjectArg(one);
    if (two != null) {
      checkMergeObjectArg(two);
      for (var key in two) {
        if (!two.hasOwnProperty(key)) {
          continue;
        }
        one[key] = two[key];
      }
    }
  }

  module.exports = mergeInto;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  var Promise = __webpack_require__(29)();
  module.exports = Promise;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @jsx React.DOM
   */
  'use strict';

  var invariant    = __webpack_require__(14);
  var merge        = __webpack_require__(16);
  var getStepProps = __webpack_require__(20);

  var isViewPropRe = /([a-zA-Z0-9]+)View$/;

  function getViewProps(allProps) {
    var views = {};
    var props = {};

    for (var name in allProps) {
      var m = isViewPropRe.exec(name);
      if (m) {
        var prop = m[1];

        invariant(
          !allProps.hasOwnProperty(prop),
          'view property "' + name + '" would overwrite regular property "' + prop + '"'
        );

        views[prop] = allProps[name];
      } else {
        props[name] = allProps[name];
      }
    }

    return {views:views, props:props};
  }

  function makeViewFactory(viewClass, viewProps) {
    return function viewFactory(props) {
      props = props !== null && props !== undefined ?
        merge(viewProps, props) :
        viewProps;
      return viewClass(props);
    };
  }

  function collectSubViews(props, subViews) {
    var r = getViewProps(props);
    var views = {};

    for (var name in r.views) {
      views[name] = makeViewFactory(r.views[name], merge(r.props, subViews));
    }

    return views;
  }

  /**
   * Make view factory for a match object
   *
   * @param {Match} match
   * @param {Object} props
   * @returns {ReactComponent}
   */
  function makeViewFactoryForMatch(match) {
    var views = {};

    for (var i = match.activeTrace.length - 1; i >= 0; i--) {
      var step = match.activeTrace[i];
      var stepProps = getStepProps(step);

      views = merge(views, collectSubViews(stepProps, views));

      if (step.route.view !== undefined) {
        return makeViewFactory(step.route.view, merge(stepProps, views));
      }
    }
  }

  module.exports = makeViewFactoryForMatch;
  module.exports.getViewProps = getViewProps;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Object#toString() ref for stringify().
   */

  var toString = Object.prototype.toString;

  /**
   * Object#hasOwnProperty ref
   */

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * Array#indexOf shim.
   */

  var indexOf = typeof Array.prototype.indexOf === 'function'
    ? function(arr, el) { return arr.indexOf(el); }
    : function(arr, el) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === el) return i;
        }
        return -1;
      };

  /**
   * Array.isArray shim.
   */

  var isArray = Array.isArray || function(arr) {
    return toString.call(arr) == '[object Array]';
  };

  /**
   * Object.keys shim.
   */

  var objectKeys = Object.keys || function(obj) {
    var ret = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        ret.push(key);
      }
    }
    return ret;
  };

  /**
   * Array#forEach shim.
   */

  var forEach = typeof Array.prototype.forEach === 'function'
    ? function(arr, fn) { return arr.forEach(fn); }
    : function(arr, fn) {
        for (var i = 0; i < arr.length; i++) fn(arr[i]);
      };

  /**
   * Array#reduce shim.
   */

  var reduce = function(arr, fn, initial) {
    if (typeof arr.reduce === 'function') return arr.reduce(fn, initial);
    var res = initial;
    for (var i = 0; i < arr.length; i++) res = fn(res, arr[i]);
    return res;
  };

  /**
   * Cache non-integer test regexp.
   */

  var isint = /^[0-9]+$/;

  function promote(parent, key) {
    if (parent[key].length == 0) return parent[key] = {}
    var t = {};
    for (var i in parent[key]) {
      if (hasOwnProperty.call(parent[key], i)) {
        t[i] = parent[key][i];
      }
    }
    parent[key] = t;
    return t;
  }

  function parse(parts, parent, key, val) {
    var part = parts.shift();
    
    // illegal
    if (Object.getOwnPropertyDescriptor(Object.prototype, key)) return;
    
    // end
    if (!part) {
      if (isArray(parent[key])) {
        parent[key].push(val);
      } else if ('object' == typeof parent[key]) {
        parent[key] = val;
      } else if ('undefined' == typeof parent[key]) {
        parent[key] = val;
      } else {
        parent[key] = [parent[key], val];
      }
      // array
    } else {
      var obj = parent[key] = parent[key] || [];
      if (']' == part) {
        if (isArray(obj)) {
          if ('' != val) obj.push(val);
        } else if ('object' == typeof obj) {
          obj[objectKeys(obj).length] = val;
        } else {
          obj = parent[key] = [parent[key], val];
        }
        // prop
      } else if (~indexOf(part, ']')) {
        part = part.substr(0, part.length - 1);
        if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
        parse(parts, obj, part, val);
        // key
      } else {
        if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
        parse(parts, obj, part, val);
      }
    }
  }

  /**
   * Merge parent key/val pair.
   */

  function merge(parent, key, val){
    if (~indexOf(key, ']')) {
      var parts = key.split('[')
        , len = parts.length
        , last = len - 1;
      parse(parts, parent, 'base', val);
      // optimize
    } else {
      if (!isint.test(key) && isArray(parent.base)) {
        var t = {};
        for (var k in parent.base) t[k] = parent.base[k];
        parent.base = t;
      }
      set(parent.base, key, val);
    }

    return parent;
  }

  /**
   * Compact sparse arrays.
   */

  function compact(obj) {
    if ('object' != typeof obj) return obj;

    if (isArray(obj)) {
      var ret = [];

      for (var i in obj) {
        if (hasOwnProperty.call(obj, i)) {
          ret.push(obj[i]);
        }
      }

      return ret;
    }

    for (var key in obj) {
      obj[key] = compact(obj[key]);
    }

    return obj;
  }

  /**
   * Parse the given obj.
   */

  function parseObject(obj){
    var ret = { base: {} };

    forEach(objectKeys(obj), function(name){
      merge(ret, name, obj[name]);
    });

    return compact(ret.base);
  }

  /**
   * Parse the given str.
   */

  function parseString(str){
    var ret = reduce(String(str).split('&'), function(ret, pair){
      var eql = indexOf(pair, '=')
        , brace = lastBraceInKey(pair)
        , key = pair.substr(0, brace || eql)
        , val = pair.substr(brace || eql, pair.length)
        , val = val.substr(indexOf(val, '=') + 1, val.length);

      // ?foo
      if ('' == key) key = pair, val = '';
      if ('' == key) return ret;

      return merge(ret, decode(key), decode(val));
    }, { base: {} }).base;

    return compact(ret);
  }

  /**
   * Parse the given query `str` or `obj`, returning an object.
   *
   * @param {String} str | {Object} obj
   * @return {Object}
   * @api public
   */

  exports.parse = function(str){
    if (null == str || '' == str) return {};
    return 'object' == typeof str
      ? parseObject(str)
      : parseString(str);
  };

  /**
   * Turn the given `obj` into a query string
   *
   * @param {Object} obj
   * @return {String}
   * @api public
   */

  var stringify = exports.stringify = function(obj, prefix) {
    if (isArray(obj)) {
      return stringifyArray(obj, prefix);
    } else if ('[object Object]' == toString.call(obj)) {
      return stringifyObject(obj, prefix);
    } else if ('string' == typeof obj) {
      return stringifyString(obj, prefix);
    } else {
      return prefix + '=' + encodeURIComponent(String(obj));
    }
  };

  /**
   * Stringify the given `str`.
   *
   * @param {String} str
   * @param {String} prefix
   * @return {String}
   * @api private
   */

  function stringifyString(str, prefix) {
    if (!prefix) throw new TypeError('stringify expects an object');
    return prefix + '=' + encodeURIComponent(str);
  }

  /**
   * Stringify the given `arr`.
   *
   * @param {Array} arr
   * @param {String} prefix
   * @return {String}
   * @api private
   */

  function stringifyArray(arr, prefix) {
    var ret = [];
    if (!prefix) throw new TypeError('stringify expects an object');
    for (var i = 0; i < arr.length; i++) {
      ret.push(stringify(arr[i], prefix + '[' + i + ']'));
    }
    return ret.join('&');
  }

  /**
   * Stringify the given `obj`.
   *
   * @param {Object} obj
   * @param {String} prefix
   * @return {String}
   * @api private
   */

  function stringifyObject(obj, prefix) {
    var ret = []
      , keys = objectKeys(obj)
      , key;

    for (var i = 0, len = keys.length; i < len; ++i) {
      key = keys[i];
      if ('' == key) continue;
      if (null == obj[key]) {
        ret.push(encodeURIComponent(key) + '=');
      } else {
        ret.push(stringify(obj[key], prefix
          ? prefix + '[' + encodeURIComponent(key) + ']'
          : encodeURIComponent(key)));
      }
    }

    return ret.join('&');
  }

  /**
   * Set `obj`'s `key` to `val` respecting
   * the weird and wonderful syntax of a qs,
   * where "foo=bar&foo=baz" becomes an array.
   *
   * @param {Object} obj
   * @param {String} key
   * @param {String} val
   * @api private
   */

  function set(obj, key, val) {
    var v = obj[key];
    if (Object.getOwnPropertyDescriptor(Object.prototype, key)) return;
    if (undefined === v) {
      obj[key] = val;
    } else if (isArray(v)) {
      v.push(val);
    } else {
      obj[key] = [v, val];
    }
  }

  /**
   * Locate last brace in `str` within the key.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */

  function lastBraceInKey(str) {
    var len = str.length
      , brace
      , c;
    for (var i = 0; i < len; ++i) {
      c = str[i];
      if (']' == c) brace = false;
      if ('[' == c) brace = true;
      if ('=' == c && !brace) return i;
    }
  }

  /**
   * Decode `str`.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */

  function decode(str) {
    try {
      return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (err) {
      return str;
    }
  }


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  // Generated by CoffeeScript 1.7.1
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  module.exports = {
    PatternPrototype: {
      match: function(url) {
        var bound, captured, i, match, name, value, _i, _len;
        match = this.regex.exec(url);
        if (match == null) {
          return null;
        }
        captured = match.slice(1);
        if (this.isRegex) {
          return captured;
        }
        bound = {};
        for (i = _i = 0, _len = captured.length; _i < _len; i = ++_i) {
          value = captured[i];
          name = this.names[i];
          if (value == null) {
            continue;
          }
          if (name === '_') {
            if (bound._ == null) {
              bound._ = [];
            }
            bound._.push(value);
          } else {
            bound[name] = value;
          }
        }
        return bound;
      }
    },
    newPattern: function(arg, separator) {
      var isRegex, pattern, regexString;
      if (separator == null) {
        separator = '/';
      }
      isRegex = arg instanceof RegExp;
      if (!(('string' === typeof arg) || isRegex)) {
        throw new TypeError('argument must be a regex or a string');
      }
      [':', '*'].forEach(function(forbidden) {
        if (separator === forbidden) {
          throw new Error("separator can't be " + forbidden);
        }
      });
      pattern = Object.create(module.exports.PatternPrototype);
      pattern.isRegex = isRegex;
      pattern.regex = isRegex ? arg : (regexString = module.exports.toRegexString(arg, separator), new RegExp(regexString));
      if (!isRegex) {
        pattern.names = module.exports.getNames(arg, separator);
      }
      return pattern;
    },
    escapeForRegex: function(string) {
      return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    },
    getNames: function(arg, separator) {
      var escapedSeparator, name, names, regex, results;
      if (separator == null) {
        separator = '/';
      }
      if (arg instanceof RegExp) {
        return [];
      }
      escapedSeparator = module.exports.escapeForRegex(separator);
      regex = new RegExp("((:?:[^" + escapedSeparator + "\(\)]+)|(?:[\*]))", 'g');
      names = [];
      results = regex.exec(arg);
      while (results != null) {
        name = results[1].slice(1);
        if (name === '_') {
          throw new TypeError(":_ can't be used as a pattern name in pattern " + arg);
        }
        if (__indexOf.call(names, name) >= 0) {
          throw new TypeError("duplicate pattern name :" + name + " in pattern " + arg);
        }
        names.push(name || '_');
        results = regex.exec(arg);
      }
      return names;
    },
    escapeSeparators: function(string, separator) {
      var escapedSeparator, regex;
      if (separator == null) {
        separator = '/';
      }
      escapedSeparator = module.exports.escapeForRegex(separator);
      regex = new RegExp(escapedSeparator, 'g');
      return string.replace(regex, escapedSeparator);
    },
    toRegexString: function(string, separator) {
      var escapedSeparator, stringWithEscapedSeparators;
      if (separator == null) {
        separator = '/';
      }
      stringWithEscapedSeparators = module.exports.escapeSeparators(string, separator);
      stringWithEscapedSeparators = stringWithEscapedSeparators.replace(/\((.*?)\)/g, '(?:$1)?').replace(/\*/g, '(.*?)');
      escapedSeparator = module.exports.escapeForRegex(separator);
      module.exports.getNames(string, separator).forEach(function(name) {
        return stringWithEscapedSeparators = stringWithEscapedSeparators.replace(':' + name, "([^\\" + separator + "]+)");
      });
      return "^" + stringWithEscapedSeparators + "$";
    }
  };


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  // shim for using process in browser

  var process = module.exports = {};

  process.nextTick = (function () {
      var canSetImmediate = typeof window !== 'undefined'
      && window.setImmediate;
      var canPost = typeof window !== 'undefined'
      && window.postMessage && window.addEventListener
      ;

      if (canSetImmediate) {
          return function (f) { return window.setImmediate(f) };
      }

      if (canPost) {
          var queue = [];
          window.addEventListener('message', function (ev) {
              var source = ev.source;
              if ((source === window || source === null) && ev.data === 'process-tick') {
                  ev.stopPropagation();
                  if (queue.length > 0) {
                      var fn = queue.shift();
                      fn();
                  }
              }
          }, true);

          return function nextTick(fn) {
              queue.push(fn);
              window.postMessage('process-tick', '*');
          };
      }

      return function nextTick(fn) {
          setTimeout(fn, 0);
      };
  })();

  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];

  function noop() {}

  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;

  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  }

  // TODO(shtylman)
  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright 2013-2014 Facebook, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * @providesModule copyProperties
   */
  'use strict';

  /**
   * Copy properties from one or more objects (up to 5) into the first object.
   * This is a shallow copy. It mutates the first object and also returns it.
   *
   * NOTE: `arguments` has a very significant performance penalty, which is why
   * we don't support unlimited arguments.
   */
  function copyProperties(obj, a, b, c, d, e, f) {
    obj = obj || {};

    if (process.env.NODE_ENV !== 'production') {
      if (f) {
        throw new Error('Too many arguments passed to copyProperties');
      }
    }

    var args = [a, b, c, d, e];
    var ii = 0, v;
    while (args[ii]) {
      v = args[ii++];
      for (var k in v) {
        obj[k] = v[k];
      }

      // IE ignores toString in object iteration.. See:
      // webreflection.blogspot.com/2007/07/quick-fix-internet-explorer-and.html
      if (v.hasOwnProperty && v.hasOwnProperty('toString') &&
          (typeof v.toString !== 'undefined') && (obj.toString !== v.toString)) {
        obj.toString = v.toString;
      }
    }

    return obj;
  }

  module.exports = copyProperties;
  
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2014 Facebook, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * @providesModule mergeHelpers
   *
   * requiresPolyfills: Array.isArray
   */

  "use strict";

  var invariant = __webpack_require__(14);
  var keyMirror = __webpack_require__(30);

  /**
   * Maximum number of levels to traverse. Will catch circular structures.
   * @const
   */
  var MAX_MERGE_DEPTH = 36;

  /**
   * We won't worry about edge cases like new String('x') or new Boolean(true).
   * Functions are considered terminals, and arrays are not.
   * @param {*} o The item/object/value to test.
   * @return {boolean} true iff the argument is a terminal.
   */
  var isTerminal = function(o) {
    return typeof o !== 'object' || o === null;
  };

  var mergeHelpers = {

    MAX_MERGE_DEPTH: MAX_MERGE_DEPTH,

    isTerminal: isTerminal,

    /**
     * Converts null/undefined values into empty object.
     *
     * @param {?Object=} arg Argument to be normalized (nullable optional)
     * @return {!Object}
     */
    normalizeMergeArg: function(arg) {
      return arg === undefined || arg === null ? {} : arg;
    },

    /**
     * If merging Arrays, a merge strategy *must* be supplied. If not, it is
     * likely the caller's fault. If this function is ever called with anything
     * but `one` and `two` being `Array`s, it is the fault of the merge utilities.
     *
     * @param {*} one Array to merge into.
     * @param {*} two Array to merge from.
     */
    checkMergeArrayArgs: function(one, two) {
      invariant(
        Array.isArray(one) && Array.isArray(two),
        'Tried to merge arrays, instead got %s and %s.',
        one,
        two
      );
    },

    /**
     * @param {*} one Object to merge into.
     * @param {*} two Object to merge from.
     */
    checkMergeObjectArgs: function(one, two) {
      mergeHelpers.checkMergeObjectArg(one);
      mergeHelpers.checkMergeObjectArg(two);
    },

    /**
     * @param {*} arg
     */
    checkMergeObjectArg: function(arg) {
      invariant(
        !isTerminal(arg) && !Array.isArray(arg),
        'Tried to merge an object, instead got %s.',
        arg
      );
    },

    /**
     * Checks that a merge was not given a circular object or an object that had
     * too great of depth.
     *
     * @param {number} Level of recursion to validate against maximum.
     */
    checkMergeLevel: function(level) {
      invariant(
        level < MAX_MERGE_DEPTH,
        'Maximum deep merge depth exceeded. You may be attempting to merge ' +
        'circular structures in an unsupported way.'
      );
    },

    /**
     * Checks that the supplied merge strategy is valid.
     *
     * @param {string} Array merge strategy.
     */
    checkArrayStrategy: function(strategy) {
      invariant(
        strategy === undefined || strategy in mergeHelpers.ArrayStrategies,
        'You must provide an array strategy to deep merge functions to ' +
        'instruct the deep merge how to resolve merging two arrays.'
      );
    },

    /**
     * Set of possible behaviors of merge algorithms when encountering two Arrays
     * that must be merged together.
     * - `clobber`: The left `Array` is ignored.
     * - `indexByIndex`: The result is achieved by recursively deep merging at
     *   each index. (not yet supported.)
     */
    ArrayStrategies: keyMirror({
      Clobber: true,
      IndexByIndex: true
    })

  };

  module.exports = mergeHelpers;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  var old;
  if (typeof Promise !== "undefined") old = Promise;
  function noConflict(bluebird) {
      try { if (Promise === bluebird) Promise = old; }
      catch (e) {}
      return bluebird;
  }
  module.exports = function() {
  var util = __webpack_require__(31);
  var async = __webpack_require__(32);
  var errors = __webpack_require__(33);

  var INTERNAL = function(){};
  var APPLY = {};
  var NEXT_FILTER = {e: null};

  var cast = __webpack_require__(34)(Promise, INTERNAL);
  var PromiseArray = __webpack_require__(35)(Promise, INTERNAL, cast);
  var CapturedTrace = __webpack_require__(36)();
  var CatchFilter = __webpack_require__(37)(NEXT_FILTER);
  var PromiseResolver = __webpack_require__(38);

  var isArray = util.isArray;

  var errorObj = util.errorObj;
  var tryCatch1 = util.tryCatch1;
  var tryCatch2 = util.tryCatch2;
  var tryCatchApply = util.tryCatchApply;
  var RangeError = errors.RangeError;
  var TypeError = errors.TypeError;
  var CancellationError = errors.CancellationError;
  var TimeoutError = errors.TimeoutError;
  var OperationalError = errors.OperationalError;
  var originatesFromRejection = errors.originatesFromRejection;
  var markAsOriginatingFromRejection = errors.markAsOriginatingFromRejection;
  var canAttach = errors.canAttach;
  var thrower = util.thrower;
  var apiRejection = __webpack_require__(39)(Promise);


  var makeSelfResolutionError = function Promise$_makeSelfResolutionError() {
      return new TypeError("circular promise resolution chain");
  };

  function Promise(resolver) {
      if (typeof resolver !== "function") {
          throw new TypeError("the promise constructor requires a resolver function");
      }
      if (this.constructor !== Promise) {
          throw new TypeError("the promise constructor cannot be invoked directly");
      }
      this._bitField = 0;
      this._fulfillmentHandler0 = void 0;
      this._rejectionHandler0 = void 0;
      this._promise0 = void 0;
      this._receiver0 = void 0;
      this._settledValue = void 0;
      this._boundTo = void 0;
      if (resolver !== INTERNAL) this._resolveFromResolver(resolver);
  }

  Promise.prototype.bind = function Promise$bind(thisArg) {
      var ret = new Promise(INTERNAL);
      ret._follow(this);
      ret._propagateFrom(this, 2 | 1);
      ret._setBoundTo(thisArg);
      return ret;
  };

  Promise.prototype.toString = function Promise$toString() {
      return "[object Promise]";
  };

  Promise.prototype.caught = Promise.prototype["catch"] =
  function Promise$catch(fn) {
      var len = arguments.length;
      if (len > 1) {
          var catchInstances = new Array(len - 1),
              j = 0, i;
          for (i = 0; i < len - 1; ++i) {
              var item = arguments[i];
              if (typeof item === "function") {
                  catchInstances[j++] = item;
              } else {
                  var catchFilterTypeError =
                      new TypeError(
                          "A catch filter must be an error constructor "
                          + "or a filter function");

                  this._attachExtraTrace(catchFilterTypeError);
                  async.invoke(this._reject, this, catchFilterTypeError);
                  return;
              }
          }
          catchInstances.length = j;
          fn = arguments[i];

          this._resetTrace();
          var catchFilter = new CatchFilter(catchInstances, fn, this);
          return this._then(void 0, catchFilter.doFilter, void 0,
              catchFilter, void 0);
      }
      return this._then(void 0, fn, void 0, void 0, void 0);
  };

  Promise.prototype.then =
  function Promise$then(didFulfill, didReject, didProgress) {
      return this._then(didFulfill, didReject, didProgress,
          void 0, void 0);
  };


  Promise.prototype.done =
  function Promise$done(didFulfill, didReject, didProgress) {
      var promise = this._then(didFulfill, didReject, didProgress,
          void 0, void 0);
      promise._setIsFinal();
  };

  Promise.prototype.spread = function Promise$spread(didFulfill, didReject) {
      return this._then(didFulfill, didReject, void 0,
          APPLY, void 0);
  };

  Promise.prototype.isCancellable = function Promise$isCancellable() {
      return !this.isResolved() &&
          this._cancellable();
  };

  Promise.prototype.toJSON = function Promise$toJSON() {
      var ret = {
          isFulfilled: false,
          isRejected: false,
          fulfillmentValue: void 0,
          rejectionReason: void 0
      };
      if (this.isFulfilled()) {
          ret.fulfillmentValue = this._settledValue;
          ret.isFulfilled = true;
      } else if (this.isRejected()) {
          ret.rejectionReason = this._settledValue;
          ret.isRejected = true;
      }
      return ret;
  };

  Promise.prototype.all = function Promise$all() {
      return new PromiseArray(this).promise();
  };


  Promise.is = function Promise$Is(val) {
      return val instanceof Promise;
  };

  Promise.all = function Promise$All(promises) {
      return new PromiseArray(promises).promise();
  };

  Promise.prototype.error = function Promise$_error(fn) {
      return this.caught(originatesFromRejection, fn);
  };

  Promise.prototype._resolveFromSyncValue =
  function Promise$_resolveFromSyncValue(value) {
      if (value === errorObj) {
          this._cleanValues();
          this._setRejected();
          this._settledValue = value.e;
          this._ensurePossibleRejectionHandled();
      } else {
          var maybePromise = cast(value, void 0);
          if (maybePromise instanceof Promise) {
              this._follow(maybePromise);
          } else {
              this._cleanValues();
              this._setFulfilled();
              this._settledValue = value;
          }
      }
  };

  Promise.method = function Promise$_Method(fn) {
      if (typeof fn !== "function") {
          throw new TypeError("fn must be a function");
      }
      return function Promise$_method() {
          var value;
          switch(arguments.length) {
          case 0: value = tryCatch1(fn, this, void 0); break;
          case 1: value = tryCatch1(fn, this, arguments[0]); break;
          case 2: value = tryCatch2(fn, this, arguments[0], arguments[1]); break;
          default:
              var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
              value = tryCatchApply(fn, args, this); break;
          }
          var ret = new Promise(INTERNAL);
          ret._setTrace(void 0);
          ret._resolveFromSyncValue(value);
          return ret;
      };
  };

  Promise.attempt = Promise["try"] = function Promise$_Try(fn, args, ctx) {
      if (typeof fn !== "function") {
          return apiRejection("fn must be a function");
      }
      var value = isArray(args)
          ? tryCatchApply(fn, args, ctx)
          : tryCatch1(fn, ctx, args);

      var ret = new Promise(INTERNAL);
      ret._setTrace(void 0);
      ret._resolveFromSyncValue(value);
      return ret;
  };

  Promise.defer = Promise.pending = function Promise$Defer() {
      var promise = new Promise(INTERNAL);
      promise._setTrace(void 0);
      return new PromiseResolver(promise);
  };

  Promise.bind = function Promise$Bind(thisArg) {
      var ret = new Promise(INTERNAL);
      ret._setTrace(void 0);
      ret._setFulfilled();
      ret._setBoundTo(thisArg);
      return ret;
  };

  Promise.cast = function Promise$_Cast(obj) {
      var ret = cast(obj, void 0);
      if (!(ret instanceof Promise)) {
          var val = ret;
          ret = new Promise(INTERNAL);
          ret._setTrace(void 0);
          ret._setFulfilled();
          ret._cleanValues();
          ret._settledValue = val;
      }
      return ret;
  };

  Promise.resolve = Promise.fulfilled = Promise.cast;

  Promise.reject = Promise.rejected = function Promise$Reject(reason) {
      var ret = new Promise(INTERNAL);
      ret._setTrace(void 0);
      markAsOriginatingFromRejection(reason);
      ret._cleanValues();
      ret._setRejected();
      ret._settledValue = reason;
      if (!canAttach(reason)) {
          var trace = new Error(reason + "");
          ret._setCarriedStackTrace(trace);
      }
      ret._ensurePossibleRejectionHandled();
      return ret;
  };

  Promise.onPossiblyUnhandledRejection =
  function Promise$OnPossiblyUnhandledRejection(fn) {
          CapturedTrace.possiblyUnhandledRejection = typeof fn === "function"
                                                      ? fn : void 0;
  };

  var unhandledRejectionHandled;
  Promise.onUnhandledRejectionHandled =
  function Promise$onUnhandledRejectionHandled(fn) {
      unhandledRejectionHandled = typeof fn === "function" ? fn : void 0;
  };

  var debugging = false || !!(
      typeof process !== "undefined" &&
      typeof process.execPath === "string" &&
      typeof process.env === "object" &&
      (process.env["BLUEBIRD_DEBUG"] ||
          process.env["NODE_ENV"] === "development")
  );


  Promise.longStackTraces = function Promise$LongStackTraces() {
      if (async.haveItemsQueued() &&
          debugging === false
     ) {
          throw new Error("cannot enable long stack traces after promises have been created");
      }
      debugging = CapturedTrace.isSupported();
  };

  Promise.hasLongStackTraces = function Promise$HasLongStackTraces() {
      return debugging && CapturedTrace.isSupported();
  };

  Promise.prototype._then =
  function Promise$_then(
      didFulfill,
      didReject,
      didProgress,
      receiver,
      internalData
  ) {
      var haveInternalData = internalData !== void 0;
      var ret = haveInternalData ? internalData : new Promise(INTERNAL);

      if (!haveInternalData) {
          if (debugging) {
              var haveSameContext = this._peekContext() === this._traceParent;
              ret._traceParent = haveSameContext ? this._traceParent : this;
          }
          ret._propagateFrom(this, 7);
      }

      var callbackIndex =
          this._addCallbacks(didFulfill, didReject, didProgress, ret, receiver);

      if (this.isResolved()) {
          async.invoke(this._queueSettleAt, this, callbackIndex);
      }

      return ret;
  };

  Promise.prototype._length = function Promise$_length() {
      return this._bitField & 262143;
  };

  Promise.prototype._isFollowingOrFulfilledOrRejected =
  function Promise$_isFollowingOrFulfilledOrRejected() {
      return (this._bitField & 939524096) > 0;
  };

  Promise.prototype._isFollowing = function Promise$_isFollowing() {
      return (this._bitField & 536870912) === 536870912;
  };

  Promise.prototype._setLength = function Promise$_setLength(len) {
      this._bitField = (this._bitField & -262144) |
          (len & 262143);
  };

  Promise.prototype._setFulfilled = function Promise$_setFulfilled() {
      this._bitField = this._bitField | 268435456;
  };

  Promise.prototype._setRejected = function Promise$_setRejected() {
      this._bitField = this._bitField | 134217728;
  };

  Promise.prototype._setFollowing = function Promise$_setFollowing() {
      this._bitField = this._bitField | 536870912;
  };

  Promise.prototype._setIsFinal = function Promise$_setIsFinal() {
      this._bitField = this._bitField | 33554432;
  };

  Promise.prototype._isFinal = function Promise$_isFinal() {
      return (this._bitField & 33554432) > 0;
  };

  Promise.prototype._cancellable = function Promise$_cancellable() {
      return (this._bitField & 67108864) > 0;
  };

  Promise.prototype._setCancellable = function Promise$_setCancellable() {
      this._bitField = this._bitField | 67108864;
  };

  Promise.prototype._unsetCancellable = function Promise$_unsetCancellable() {
      this._bitField = this._bitField & (~67108864);
  };

  Promise.prototype._setRejectionIsUnhandled =
  function Promise$_setRejectionIsUnhandled() {
      this._bitField = this._bitField | 2097152;
  };

  Promise.prototype._unsetRejectionIsUnhandled =
  function Promise$_unsetRejectionIsUnhandled() {
      this._bitField = this._bitField & (~2097152);
      if (this._isUnhandledRejectionNotified()) {
          this._unsetUnhandledRejectionIsNotified();
          this._notifyUnhandledRejectionIsHandled();
      }
  };

  Promise.prototype._isRejectionUnhandled =
  function Promise$_isRejectionUnhandled() {
      return (this._bitField & 2097152) > 0;
  };

  Promise.prototype._setUnhandledRejectionIsNotified =
  function Promise$_setUnhandledRejectionIsNotified() {
      this._bitField = this._bitField | 524288;
  };

  Promise.prototype._unsetUnhandledRejectionIsNotified =
  function Promise$_unsetUnhandledRejectionIsNotified() {
      this._bitField = this._bitField & (~524288);
  };

  Promise.prototype._isUnhandledRejectionNotified =
  function Promise$_isUnhandledRejectionNotified() {
      return (this._bitField & 524288) > 0;
  };

  Promise.prototype._setCarriedStackTrace =
  function Promise$_setCarriedStackTrace(capturedTrace) {
      this._bitField = this._bitField | 1048576;
      this._fulfillmentHandler0 = capturedTrace;
  };

  Promise.prototype._unsetCarriedStackTrace =
  function Promise$_unsetCarriedStackTrace() {
      this._bitField = this._bitField & (~1048576);
      this._fulfillmentHandler0 = void 0;
  };

  Promise.prototype._isCarryingStackTrace =
  function Promise$_isCarryingStackTrace() {
      return (this._bitField & 1048576) > 0;
  };

  Promise.prototype._getCarriedStackTrace =
  function Promise$_getCarriedStackTrace() {
      return this._isCarryingStackTrace()
          ? this._fulfillmentHandler0
          : void 0;
  };

  Promise.prototype._receiverAt = function Promise$_receiverAt(index) {
      var ret = index === 0
          ? this._receiver0
          : this[(index << 2) + index - 5 + 4];
      if (this._isBound() && ret === void 0) {
          return this._boundTo;
      }
      return ret;
  };

  Promise.prototype._promiseAt = function Promise$_promiseAt(index) {
      return index === 0
          ? this._promise0
          : this[(index << 2) + index - 5 + 3];
  };

  Promise.prototype._fulfillmentHandlerAt =
  function Promise$_fulfillmentHandlerAt(index) {
      return index === 0
          ? this._fulfillmentHandler0
          : this[(index << 2) + index - 5 + 0];
  };

  Promise.prototype._rejectionHandlerAt =
  function Promise$_rejectionHandlerAt(index) {
      return index === 0
          ? this._rejectionHandler0
          : this[(index << 2) + index - 5 + 1];
  };

  Promise.prototype._addCallbacks = function Promise$_addCallbacks(
      fulfill,
      reject,
      progress,
      promise,
      receiver
  ) {
      var index = this._length();

      if (index >= 262143 - 5) {
          index = 0;
          this._setLength(0);
      }

      if (index === 0) {
          this._promise0 = promise;
          if (receiver !== void 0) this._receiver0 = receiver;
          if (typeof fulfill === "function" && !this._isCarryingStackTrace())
              this._fulfillmentHandler0 = fulfill;
          if (typeof reject === "function") this._rejectionHandler0 = reject;
          if (typeof progress === "function") this._progressHandler0 = progress;
      } else {
          var base = (index << 2) + index - 5;
          this[base + 3] = promise;
          this[base + 4] = receiver;
          this[base + 0] = typeof fulfill === "function"
                                              ? fulfill : void 0;
          this[base + 1] = typeof reject === "function"
                                              ? reject : void 0;
          this[base + 2] = typeof progress === "function"
                                              ? progress : void 0;
      }
      this._setLength(index + 1);
      return index;
  };

  Promise.prototype._setProxyHandlers =
  function Promise$_setProxyHandlers(receiver, promiseSlotValue) {
      var index = this._length();

      if (index >= 262143 - 5) {
          index = 0;
          this._setLength(0);
      }
      if (index === 0) {
          this._promise0 = promiseSlotValue;
          this._receiver0 = receiver;
      } else {
          var base = (index << 2) + index - 5;
          this[base + 3] = promiseSlotValue;
          this[base + 4] = receiver;
          this[base + 0] =
          this[base + 1] =
          this[base + 2] = void 0;
      }
      this._setLength(index + 1);
  };

  Promise.prototype._proxyPromiseArray =
  function Promise$_proxyPromiseArray(promiseArray, index) {
      this._setProxyHandlers(promiseArray, index);
  };

  Promise.prototype._proxyPromise = function Promise$_proxyPromise(promise) {
      promise._setProxied();
      this._setProxyHandlers(promise, -1);
  };

  Promise.prototype._setBoundTo = function Promise$_setBoundTo(obj) {
      if (obj !== void 0) {
          this._bitField = this._bitField | 8388608;
          this._boundTo = obj;
      } else {
          this._bitField = this._bitField & (~8388608);
      }
  };

  Promise.prototype._isBound = function Promise$_isBound() {
      return (this._bitField & 8388608) === 8388608;
  };

  Promise.prototype._resolveFromResolver =
  function Promise$_resolveFromResolver(resolver) {
      var promise = this;
      this._setTrace(void 0);
      this._pushContext();

      function Promise$_resolver(val) {
          if (promise._tryFollow(val)) {
              return;
          }
          promise._fulfill(val);
      }
      function Promise$_rejecter(val) {
          var trace = canAttach(val) ? val : new Error(val + "");
          promise._attachExtraTrace(trace);
          markAsOriginatingFromRejection(val);
          promise._reject(val, trace === val ? void 0 : trace);
      }
      var r = tryCatch2(resolver, void 0, Promise$_resolver, Promise$_rejecter);
      this._popContext();

      if (r !== void 0 && r === errorObj) {
          var e = r.e;
          var trace = canAttach(e) ? e : new Error(e + "");
          promise._reject(e, trace);
      }
  };

  Promise.prototype._spreadSlowCase =
  function Promise$_spreadSlowCase(targetFn, promise, values, boundTo) {
      var promiseForAll = new PromiseArray(values).promise();
      var promise2 = promiseForAll._then(function() {
          return targetFn.apply(boundTo, arguments);
      }, void 0, void 0, APPLY, void 0);
      promise._follow(promise2);
  };

  Promise.prototype._callSpread =
  function Promise$_callSpread(handler, promise, value) {
      var boundTo = this._boundTo;
      if (isArray(value)) {
          for (var i = 0, len = value.length; i < len; ++i) {
              if (cast(value[i], void 0) instanceof Promise) {
                  this._spreadSlowCase(handler, promise, value, boundTo);
                  return;
              }
          }
      }
      promise._pushContext();
      return tryCatchApply(handler, value, boundTo);
  };

  Promise.prototype._callHandler =
  function Promise$_callHandler(
      handler, receiver, promise, value) {
      var x;
      if (receiver === APPLY && !this.isRejected()) {
          x = this._callSpread(handler, promise, value);
      } else {
          promise._pushContext();
          x = tryCatch1(handler, receiver, value);
      }
      promise._popContext();
      return x;
  };

  Promise.prototype._settlePromiseFromHandler =
  function Promise$_settlePromiseFromHandler(
      handler, receiver, value, promise
  ) {
      if (!(promise instanceof Promise)) {
          handler.call(receiver, value, promise);
          return;
      }
      var x = this._callHandler(handler, receiver, promise, value);
      if (promise._isFollowing()) return;

      if (x === errorObj || x === promise || x === NEXT_FILTER) {
          var err = x === promise
                      ? makeSelfResolutionError()
                      : x.e;
          var trace = canAttach(err) ? err : new Error(err + "");
          if (x !== NEXT_FILTER) promise._attachExtraTrace(trace);
          promise._rejectUnchecked(err, trace);
      } else {
          var castValue = cast(x, promise);
          if (castValue instanceof Promise) {
              if (castValue.isRejected() &&
                  !castValue._isCarryingStackTrace() &&
                  !canAttach(castValue._settledValue)) {
                  var trace = new Error(castValue._settledValue + "");
                  promise._attachExtraTrace(trace);
                  castValue._setCarriedStackTrace(trace);
              }
              promise._follow(castValue);
              promise._propagateFrom(castValue, 1);
          } else {
              promise._fulfillUnchecked(x);
          }
      }
  };

  Promise.prototype._follow =
  function Promise$_follow(promise) {
      this._setFollowing();

      if (promise.isPending()) {
          this._propagateFrom(promise, 1);
          promise._proxyPromise(this);
      } else if (promise.isFulfilled()) {
          this._fulfillUnchecked(promise._settledValue);
      } else {
          this._rejectUnchecked(promise._settledValue,
              promise._getCarriedStackTrace());
      }

      if (promise._isRejectionUnhandled()) promise._unsetRejectionIsUnhandled();

      if (debugging &&
          promise._traceParent == null) {
          promise._traceParent = this;
      }
  };

  Promise.prototype._tryFollow =
  function Promise$_tryFollow(value) {
      if (this._isFollowingOrFulfilledOrRejected() ||
          value === this) {
          return false;
      }
      var maybePromise = cast(value, void 0);
      if (!(maybePromise instanceof Promise)) {
          return false;
      }
      this._follow(maybePromise);
      return true;
  };

  Promise.prototype._resetTrace = function Promise$_resetTrace() {
      if (debugging) {
          this._trace = new CapturedTrace(this._peekContext() === void 0);
      }
  };

  Promise.prototype._setTrace = function Promise$_setTrace(parent) {
      if (debugging) {
          var context = this._peekContext();
          this._traceParent = context;
          var isTopLevel = context === void 0;
          if (parent !== void 0 &&
              parent._traceParent === context) {
              this._trace = parent._trace;
          } else {
              this._trace = new CapturedTrace(isTopLevel);
          }
      }
      return this;
  };

  Promise.prototype._attachExtraTrace =
  function Promise$_attachExtraTrace(error) {
      if (debugging) {
          var promise = this;
          var stack = error.stack;
          stack = typeof stack === "string" ? stack.split("\n") : [];
          CapturedTrace.protectErrorMessageNewlines(stack);
          var headerLineCount = 1;
          var combinedTraces = 1;
          while(promise != null &&
              promise._trace != null) {
              stack = CapturedTrace.combine(
                  stack,
                  promise._trace.stack.split("\n")
              );
              promise = promise._traceParent;
              combinedTraces++;
          }

          var stackTraceLimit = Error.stackTraceLimit || 10;
          var max = (stackTraceLimit + headerLineCount) * combinedTraces;
          var len = stack.length;
          if (len > max) {
              stack.length = max;
          }

          if (len > 0)
              stack[0] = stack[0].split("\u0002\u0000\u0001").join("\n");

          if (stack.length <= headerLineCount) {
              error.stack = "(No stack trace)";
          } else {
              error.stack = stack.join("\n");
          }
      }
  };

  Promise.prototype._cleanValues = function Promise$_cleanValues() {
      if (this._cancellable()) {
          this._cancellationParent = void 0;
      }
  };

  Promise.prototype._propagateFrom =
  function Promise$_propagateFrom(parent, flags) {
      if ((flags & 1) > 0 && parent._cancellable()) {
          this._setCancellable();
          this._cancellationParent = parent;
      }
      if ((flags & 4) > 0) {
          this._setBoundTo(parent._boundTo);
      }
      if ((flags & 2) > 0) {
          this._setTrace(parent);
      }
  };

  Promise.prototype._fulfill = function Promise$_fulfill(value) {
      if (this._isFollowingOrFulfilledOrRejected()) return;
      this._fulfillUnchecked(value);
  };

  Promise.prototype._reject =
  function Promise$_reject(reason, carriedStackTrace) {
      if (this._isFollowingOrFulfilledOrRejected()) return;
      this._rejectUnchecked(reason, carriedStackTrace);
  };

  Promise.prototype._settlePromiseAt = function Promise$_settlePromiseAt(index) {
      var handler = this.isFulfilled()
          ? this._fulfillmentHandlerAt(index)
          : this._rejectionHandlerAt(index);

      var value = this._settledValue;
      var receiver = this._receiverAt(index);
      var promise = this._promiseAt(index);

      if (typeof handler === "function") {
          this._settlePromiseFromHandler(handler, receiver, value, promise);
      } else {
          var done = false;
          var isFulfilled = this.isFulfilled();
          if (receiver !== void 0) {
              if (receiver instanceof Promise &&
                  receiver._isProxied()) {
                  receiver._unsetProxied();

                  if (isFulfilled) receiver._fulfillUnchecked(value);
                  else receiver._rejectUnchecked(value,
                      this._getCarriedStackTrace());
                  done = true;
              } else if (receiver instanceof PromiseArray) {
                  if (isFulfilled) receiver._promiseFulfilled(value, promise);
                  else receiver._promiseRejected(value, promise);
                  done = true;
              }
          }

          if (!done) {
              if (isFulfilled) promise._fulfill(value);
              else promise._reject(value, this._getCarriedStackTrace());
          }
      }

      if (index >= 256) {
          this._queueGC();
      }
  };

  Promise.prototype._isProxied = function Promise$_isProxied() {
      return (this._bitField & 4194304) === 4194304;
  };

  Promise.prototype._setProxied = function Promise$_setProxied() {
      this._bitField = this._bitField | 4194304;
  };

  Promise.prototype._unsetProxied = function Promise$_unsetProxied() {
      this._bitField = this._bitField & (~4194304);
  };

  Promise.prototype._isGcQueued = function Promise$_isGcQueued() {
      return (this._bitField & -1073741824) === -1073741824;
  };

  Promise.prototype._setGcQueued = function Promise$_setGcQueued() {
      this._bitField = this._bitField | -1073741824;
  };

  Promise.prototype._unsetGcQueued = function Promise$_unsetGcQueued() {
      this._bitField = this._bitField & (~-1073741824);
  };

  Promise.prototype._queueGC = function Promise$_queueGC() {
      if (this._isGcQueued()) return;
      this._setGcQueued();
      async.invokeLater(this._gc, this, void 0);
  };

  Promise.prototype._gc = function Promise$gc() {
      var len = this._length() * 5;
      for (var i = 0; i < len; i++) {
          delete this[i];
      }
      this._setLength(0);
      this._unsetGcQueued();
  };

  Promise.prototype._queueSettleAt = function Promise$_queueSettleAt(index) {
      if (this._isRejectionUnhandled()) this._unsetRejectionIsUnhandled();
      async.invoke(this._settlePromiseAt, this, index);
  };

  Promise.prototype._fulfillUnchecked =
  function Promise$_fulfillUnchecked(value) {
      if (!this.isPending()) return;
      if (value === this) {
          var err = makeSelfResolutionError();
          this._attachExtraTrace(err);
          return this._rejectUnchecked(err, void 0);
      }
      this._cleanValues();
      this._setFulfilled();
      this._settledValue = value;
      var len = this._length();

      if (len > 0) {
          async.invoke(this._settlePromises, this, len);
      }
  };

  Promise.prototype._rejectUncheckedCheckError =
  function Promise$_rejectUncheckedCheckError(reason) {
      var trace = canAttach(reason) ? reason : new Error(reason + "");
      this._rejectUnchecked(reason, trace === reason ? void 0 : trace);
  };

  Promise.prototype._rejectUnchecked =
  function Promise$_rejectUnchecked(reason, trace) {
      if (!this.isPending()) return;
      if (reason === this) {
          var err = makeSelfResolutionError();
          this._attachExtraTrace(err);
          return this._rejectUnchecked(err);
      }
      this._cleanValues();
      this._setRejected();
      this._settledValue = reason;

      if (this._isFinal()) {
          async.invokeLater(thrower, void 0, trace === void 0 ? reason : trace);
          return;
      }
      var len = this._length();

      if (trace !== void 0) this._setCarriedStackTrace(trace);

      if (len > 0) {
          async.invoke(this._rejectPromises, this, null);
      } else {
          this._ensurePossibleRejectionHandled();
      }
  };

  Promise.prototype._rejectPromises = function Promise$_rejectPromises() {
      this._settlePromises();
      this._unsetCarriedStackTrace();
  };

  Promise.prototype._settlePromises = function Promise$_settlePromises() {
      var len = this._length();
      for (var i = 0; i < len; i++) {
          this._settlePromiseAt(i);
      }
  };

  Promise.prototype._ensurePossibleRejectionHandled =
  function Promise$_ensurePossibleRejectionHandled() {
      this._setRejectionIsUnhandled();
      if (CapturedTrace.possiblyUnhandledRejection !== void 0) {
          async.invokeLater(this._notifyUnhandledRejection, this, void 0);
      }
  };

  Promise.prototype._notifyUnhandledRejectionIsHandled =
  function Promise$_notifyUnhandledRejectionIsHandled() {
      if (typeof unhandledRejectionHandled === "function") {
          async.invokeLater(unhandledRejectionHandled, void 0, this);
      }
  };

  Promise.prototype._notifyUnhandledRejection =
  function Promise$_notifyUnhandledRejection() {
      if (this._isRejectionUnhandled()) {
          var reason = this._settledValue;
          var trace = this._getCarriedStackTrace();

          this._setUnhandledRejectionIsNotified();

          if (trace !== void 0) {
              this._unsetCarriedStackTrace();
              reason = trace;
          }
          if (typeof CapturedTrace.possiblyUnhandledRejection === "function") {
              CapturedTrace.possiblyUnhandledRejection(reason, this);
          }
      }
  };

  var contextStack = [];
  Promise.prototype._peekContext = function Promise$_peekContext() {
      var lastIndex = contextStack.length - 1;
      if (lastIndex >= 0) {
          return contextStack[lastIndex];
      }
      return void 0;

  };

  Promise.prototype._pushContext = function Promise$_pushContext() {
      if (!debugging) return;
      contextStack.push(this);
  };

  Promise.prototype._popContext = function Promise$_popContext() {
      if (!debugging) return;
      contextStack.pop();
  };

  Promise.noConflict = function Promise$NoConflict() {
      return noConflict(Promise);
  };

  Promise.setScheduler = function(fn) {
      if (typeof fn !== "function") throw new TypeError("fn must be a function");
      async._schedule = fn;
  };

  if (!CapturedTrace.isSupported()) {
      Promise.longStackTraces = function(){};
      debugging = false;
  }

  Promise._makeSelfResolutionError = makeSelfResolutionError;
  __webpack_require__(40)(Promise, NEXT_FILTER, cast);
  __webpack_require__(41)(Promise);
  __webpack_require__(42)(Promise);
  __webpack_require__(43)(Promise, PromiseArray, cast, INTERNAL);
  Promise.RangeError = RangeError;
  Promise.CancellationError = CancellationError;
  Promise.TimeoutError = TimeoutError;
  Promise.TypeError = TypeError;
  Promise.OperationalError = OperationalError;
  Promise.RejectionError = OperationalError;
  Promise.AggregateError = errors.AggregateError;

  util.toFastProperties(Promise);
  util.toFastProperties(Promise.prototype);
  Promise.Promise = Promise;
  __webpack_require__(44)(Promise,INTERNAL,cast);
  __webpack_require__(45)(Promise,INTERNAL,cast);
  __webpack_require__(46)(Promise);
  __webpack_require__(47)(Promise,apiRejection,INTERNAL,cast);
  __webpack_require__(48)(Promise,PromiseArray,apiRejection,cast,INTERNAL);
  __webpack_require__(49)(Promise);
  __webpack_require__(50)(Promise,INTERNAL);
  __webpack_require__(51)(Promise,PromiseArray,cast);
  __webpack_require__(52)(Promise,PromiseArray,apiRejection,cast,INTERNAL);
  __webpack_require__(53)(Promise,PromiseArray);
  __webpack_require__(54)(Promise,PromiseArray,apiRejection);
  __webpack_require__(55)(Promise,PromiseArray);
  __webpack_require__(56)(Promise,INTERNAL);
  __webpack_require__(57)(Promise,INTERNAL);
  __webpack_require__(58)(Promise,PromiseArray);
  __webpack_require__(59)(Promise,INTERNAL);
  __webpack_require__(60)(Promise,apiRejection,cast);

  Promise.prototype = Promise.prototype;
  return Promise;

  };
  
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2014 Facebook, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * @providesModule keyMirror
   * @typechecks static-only
   */

  "use strict";

  var invariant = __webpack_require__(14);

  /**
   * Constructs an enumeration with keys equal to their value.
   *
   * For example:
   *
   *   var COLORS = keyMirror({blue: null, red: null});
   *   var myColor = COLORS.blue;
   *   var isColorValid = !!COLORS[myColor];
   *
   * The last line could not be performed if the values of the generated enum were
   * not equal to their keys.
   *
   *   Input:  {key1: val1, key2: val2}
   *   Output: {key1: key1, key2: key2}
   *
   * @param {object} obj
   * @return {object}
   */
  var keyMirror = function(obj) {
    var ret = {};
    var key;
    invariant(
      obj instanceof Object && !Array.isArray(obj),
      'keyMirror(...): Argument must be an object.'
    );
    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }
      ret[key] = key;
    }
    return ret;
  };

  module.exports = keyMirror;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  var es5 = __webpack_require__(61);
  var haveGetters = (function(){
      try {
          var o = {};
          es5.defineProperty(o, "f", {
              get: function () {
                  return 3;
              }
          });
          return o.f === 3;
      }
      catch (e) {
          return false;
      }

  })();
  var canEvaluate = typeof navigator == "undefined";
  var errorObj = {e: {}};
  function tryCatch1(fn, receiver, arg) {
      try { return fn.call(receiver, arg); }
      catch (e) {
          errorObj.e = e;
          return errorObj;
      }
  }

  function tryCatch2(fn, receiver, arg, arg2) {
      try { return fn.call(receiver, arg, arg2); }
      catch (e) {
          errorObj.e = e;
          return errorObj;
      }
  }

  function tryCatch3(fn, receiver, arg, arg2, arg3) {
      try { return fn.call(receiver, arg, arg2, arg3); }
      catch (e) {
          errorObj.e = e;
          return errorObj;
      }
  }

  function tryCatch4(fn, receiver, arg, arg2, arg3, arg4) {
      try { return fn.call(receiver, arg, arg2, arg3, arg4); }
      catch (e) {
          errorObj.e = e;
          return errorObj;
      }
  }

  function tryCatchApply(fn, args, receiver) {
      try { return fn.apply(receiver, args); }
      catch (e) {
          errorObj.e = e;
          return errorObj;
      }
  }

  var inherits = function(Child, Parent) {
      var hasProp = {}.hasOwnProperty;

      function T() {
          this.constructor = Child;
          this.constructor$ = Parent;
          for (var propertyName in Parent.prototype) {
              if (hasProp.call(Parent.prototype, propertyName) &&
                  propertyName.charAt(propertyName.length-1) !== "$"
             ) {
                  this[propertyName + "$"] = Parent.prototype[propertyName];
              }
          }
      }
      T.prototype = Parent.prototype;
      Child.prototype = new T();
      return Child.prototype;
  };

  function asString(val) {
      return typeof val === "string" ? val : ("" + val);
  }

  function isPrimitive(val) {
      return val == null || val === true || val === false ||
          typeof val === "string" || typeof val === "number";

  }

  function isObject(value) {
      return !isPrimitive(value);
  }

  function maybeWrapAsError(maybeError) {
      if (!isPrimitive(maybeError)) return maybeError;

      return new Error(asString(maybeError));
  }

  function withAppended(target, appendee) {
      var len = target.length;
      var ret = new Array(len + 1);
      var i;
      for (i = 0; i < len; ++i) {
          ret[i] = target[i];
      }
      ret[i] = appendee;
      return ret;
  }

  function getDataPropertyOrDefault(obj, key, defaultValue) {
      if (es5.isES5) {
          var desc = Object.getOwnPropertyDescriptor(obj, key);
          if (desc != null) {
              return desc.get == null && desc.set == null
                      ? desc.value
                      : defaultValue;
          }
      } else {
          return {}.hasOwnProperty.call(obj, key) ? obj[key] : void 0;
      }
  }

  function notEnumerableProp(obj, name, value) {
      if (isPrimitive(obj)) return obj;
      var descriptor = {
          value: value,
          configurable: true,
          enumerable: false,
          writable: true
      };
      es5.defineProperty(obj, name, descriptor);
      return obj;
  }


  var wrapsPrimitiveReceiver = (function() {
      return this !== "string";
  }).call("string");

  function thrower(r) {
      throw r;
  }

  var inheritedDataKeys = (function() {
      if (es5.isES5) {
          return function(obj, opts) {
              var ret = [];
              var visitedKeys = Object.create(null);
              var getKeys = Object(opts).includeHidden
                  ? Object.getOwnPropertyNames
                  : Object.keys;
              while (obj != null) {
                  var keys;
                  try {
                      keys = getKeys(obj);
                  } catch (e) {
                      return ret;
                  }
                  for (var i = 0; i < keys.length; ++i) {
                      var key = keys[i];
                      if (visitedKeys[key]) continue;
                      visitedKeys[key] = true;
                      var desc = Object.getOwnPropertyDescriptor(obj, key);
                      if (desc != null && desc.get == null && desc.set == null) {
                          ret.push(key);
                      }
                  }
                  obj = es5.getPrototypeOf(obj);
              }
              return ret;
          };
      } else {
          return function(obj) {
              var ret = [];
              /*jshint forin:false */
              for (var key in obj) {
                  ret.push(key);
              }
              return ret;
          };
      }

  })();

  function isClass(fn) {
      try {
          if (typeof fn === "function") {
              var keys = es5.keys(fn.prototype);
              return keys.length > 0 &&
                     !(keys.length === 1 && keys[0] === "constructor");
          }
          return false;
      } catch (e) {
          return false;
      }
  }

  function toFastProperties(obj) {
      /*jshint -W027*/
      function f() {}
      f.prototype = obj;
      return f;
      eval(obj);
  }

  var rident = /^[a-z$_][a-z$_0-9]*$/i;
  function isIdentifier(str) {
      return rident.test(str);
  }

  function filledRange(count, prefix, suffix) {
      var ret = new Array(count);
      for(var i = 0; i < count; ++i) {
          ret[i] = prefix + i + suffix;
      }
      return ret;
  }

  var ret = {
      isClass: isClass,
      isIdentifier: isIdentifier,
      inheritedDataKeys: inheritedDataKeys,
      getDataPropertyOrDefault: getDataPropertyOrDefault,
      thrower: thrower,
      isArray: es5.isArray,
      haveGetters: haveGetters,
      notEnumerableProp: notEnumerableProp,
      isPrimitive: isPrimitive,
      isObject: isObject,
      canEvaluate: canEvaluate,
      errorObj: errorObj,
      tryCatch1: tryCatch1,
      tryCatch2: tryCatch2,
      tryCatch3: tryCatch3,
      tryCatch4: tryCatch4,
      tryCatchApply: tryCatchApply,
      inherits: inherits,
      withAppended: withAppended,
      asString: asString,
      maybeWrapAsError: maybeWrapAsError,
      wrapsPrimitiveReceiver: wrapsPrimitiveReceiver,
      toFastProperties: toFastProperties,
      filledRange: filledRange
  };

  module.exports = ret;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  var schedule = __webpack_require__(62);
  var Queue = __webpack_require__(63);
  var errorObj = __webpack_require__(31).errorObj;
  var tryCatch1 = __webpack_require__(31).tryCatch1;
  var _process = typeof process !== "undefined" ? process : void 0;

  function Async() {
      this._isTickUsed = false;
      this._schedule = schedule;
      this._length = 0;
      this._lateBuffer = new Queue(16);
      this._functionBuffer = new Queue(65536);
      var self = this;
      this.consumeFunctionBuffer = function Async$consumeFunctionBuffer() {
          self._consumeFunctionBuffer();
      };
  }

  Async.prototype.haveItemsQueued = function Async$haveItemsQueued() {
      return this._length > 0;
  };

  Async.prototype.invokeLater = function Async$invokeLater(fn, receiver, arg) {
      if (_process !== void 0 &&
          _process.domain != null &&
          !fn.domain) {
          fn = _process.domain.bind(fn);
      }
      this._lateBuffer.push(fn, receiver, arg);
      this._queueTick();
  };

  Async.prototype.invoke = function Async$invoke(fn, receiver, arg) {
      if (_process !== void 0 &&
          _process.domain != null &&
          !fn.domain) {
          fn = _process.domain.bind(fn);
      }
      var functionBuffer = this._functionBuffer;
      functionBuffer.push(fn, receiver, arg);
      this._length = functionBuffer.length();
      this._queueTick();
  };

  Async.prototype._consumeFunctionBuffer =
  function Async$_consumeFunctionBuffer() {
      var functionBuffer = this._functionBuffer;
      while (functionBuffer.length() > 0) {
          var fn = functionBuffer.shift();
          var receiver = functionBuffer.shift();
          var arg = functionBuffer.shift();
          fn.call(receiver, arg);
      }
      this._reset();
      this._consumeLateBuffer();
  };

  Async.prototype._consumeLateBuffer = function Async$_consumeLateBuffer() {
      var buffer = this._lateBuffer;
      while(buffer.length() > 0) {
          var fn = buffer.shift();
          var receiver = buffer.shift();
          var arg = buffer.shift();
          var res = tryCatch1(fn, receiver, arg);
          if (res === errorObj) {
              this._queueTick();
              if (fn.domain != null) {
                  fn.domain.emit("error", res.e);
              } else {
                  throw res.e;
              }
          }
      }
  };

  Async.prototype._queueTick = function Async$_queue() {
      if (!this._isTickUsed) {
          this._schedule(this.consumeFunctionBuffer);
          this._isTickUsed = true;
      }
  };

  Async.prototype._reset = function Async$_reset() {
      this._isTickUsed = false;
      this._length = 0;
  };

  module.exports = new Async();
  
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  var Objectfreeze = __webpack_require__(61).freeze;
  var util = __webpack_require__(31);
  var inherits = util.inherits;
  var notEnumerableProp = util.notEnumerableProp;

  function markAsOriginatingFromRejection(e) {
      try {
          notEnumerableProp(e, "isOperational", true);
      }
      catch(ignore) {}
  }

  function originatesFromRejection(e) {
      if (e == null) return false;
      return ((e instanceof OperationalError) ||
          e["isOperational"] === true);
  }

  function isError(obj) {
      return obj instanceof Error;
  }

  function canAttach(obj) {
      return isError(obj);
  }

  function subError(nameProperty, defaultMessage) {
      function SubError(message) {
          if (!(this instanceof SubError)) return new SubError(message);
          this.message = typeof message === "string" ? message : defaultMessage;
          this.name = nameProperty;
          if (Error.captureStackTrace) {
              Error.captureStackTrace(this, this.constructor);
          }
      }
      inherits(SubError, Error);
      return SubError;
  }

  var _TypeError, _RangeError;
  var CancellationError = subError("CancellationError", "cancellation error");
  var TimeoutError = subError("TimeoutError", "timeout error");
  var AggregateError = subError("AggregateError", "aggregate error");
  try {
      _TypeError = TypeError;
      _RangeError = RangeError;
  } catch(e) {
      _TypeError = subError("TypeError", "type error");
      _RangeError = subError("RangeError", "range error");
  }

  var methods = ("join pop push shift unshift slice filter forEach some " +
      "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

  for (var i = 0; i < methods.length; ++i) {
      if (typeof Array.prototype[methods[i]] === "function") {
          AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
      }
  }

  AggregateError.prototype.length = 0;
  AggregateError.prototype["isOperational"] = true;
  var level = 0;
  AggregateError.prototype.toString = function() {
      var indent = Array(level * 4 + 1).join(" ");
      var ret = "\n" + indent + "AggregateError of:" + "\n";
      level++;
      indent = Array(level * 4 + 1).join(" ");
      for (var i = 0; i < this.length; ++i) {
          var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
          var lines = str.split("\n");
          for (var j = 0; j < lines.length; ++j) {
              lines[j] = indent + lines[j];
          }
          str = lines.join("\n");
          ret += str + "\n";
      }
      level--;
      return ret;
  };

  function OperationalError(message) {
      this.name = "OperationalError";
      this.message = message;
      this.cause = message;
      this["isOperational"] = true;

      if (message instanceof Error) {
          this.message = message.message;
          this.stack = message.stack;
      } else if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
      }

  }
  inherits(OperationalError, Error);

  var key = "__BluebirdErrorTypes__";
  var errorTypes = Error[key];
  if (!errorTypes) {
      errorTypes = Objectfreeze({
          CancellationError: CancellationError,
          TimeoutError: TimeoutError,
          OperationalError: OperationalError,
          RejectionError: OperationalError,
          AggregateError: AggregateError
      });
      notEnumerableProp(Error, key, errorTypes);
  }

  module.exports = {
      Error: Error,
      TypeError: _TypeError,
      RangeError: _RangeError,
      CancellationError: errorTypes.CancellationError,
      OperationalError: errorTypes.OperationalError,
      TimeoutError: errorTypes.TimeoutError,
      AggregateError: errorTypes.AggregateError,
      originatesFromRejection: originatesFromRejection,
      markAsOriginatingFromRejection: markAsOriginatingFromRejection,
      canAttach: canAttach
  };


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, INTERNAL) {
  var util = __webpack_require__(31);
  var canAttach = __webpack_require__(33).canAttach;
  var errorObj = util.errorObj;
  var isObject = util.isObject;

  function getThen(obj) {
      try {
          return obj.then;
      }
      catch(e) {
          errorObj.e = e;
          return errorObj;
      }
  }

  function Promise$_Cast(obj, originalPromise) {
      if (isObject(obj)) {
          if (obj instanceof Promise) {
              return obj;
          }
          else if (isAnyBluebirdPromise(obj)) {
              var ret = new Promise(INTERNAL);
              ret._setTrace(void 0);
              obj._then(
                  ret._fulfillUnchecked,
                  ret._rejectUncheckedCheckError,
                  ret._progressUnchecked,
                  ret,
                  null
              );
              ret._setFollowing();
              return ret;
          }
          var then = getThen(obj);
          if (then === errorObj) {
              if (originalPromise !== void 0 && canAttach(then.e)) {
                  originalPromise._attachExtraTrace(then.e);
              }
              return Promise.reject(then.e);
          } else if (typeof then === "function") {
              return Promise$_doThenable(obj, then, originalPromise);
          }
      }
      return obj;
  }

  var hasProp = {}.hasOwnProperty;
  function isAnyBluebirdPromise(obj) {
      return hasProp.call(obj, "_promise0");
  }

  function Promise$_doThenable(x, then, originalPromise) {
      var resolver = Promise.defer();
      var called = false;
      try {
          then.call(
              x,
              Promise$_resolveFromThenable,
              Promise$_rejectFromThenable,
              Promise$_progressFromThenable
          );
      } catch(e) {
          if (!called) {
              called = true;
              var trace = canAttach(e) ? e : new Error(e + "");
              if (originalPromise !== void 0) {
                  originalPromise._attachExtraTrace(trace);
              }
              resolver.promise._reject(e, trace);
          }
      }
      return resolver.promise;

      function Promise$_resolveFromThenable(y) {
          if (called) return;
          called = true;

          if (x === y) {
              var e = Promise._makeSelfResolutionError();
              if (originalPromise !== void 0) {
                  originalPromise._attachExtraTrace(e);
              }
              resolver.promise._reject(e, void 0);
              return;
          }
          resolver.resolve(y);
      }

      function Promise$_rejectFromThenable(r) {
          if (called) return;
          called = true;
          var trace = canAttach(r) ? r : new Error(r + "");
          if (originalPromise !== void 0) {
              originalPromise._attachExtraTrace(trace);
          }
          resolver.promise._reject(r, trace);
      }

      function Promise$_progressFromThenable(v) {
          if (called) return;
          var promise = resolver.promise;
          if (typeof promise._progress === "function") {
              promise._progress(v);
          }
      }
  }

  return Promise$_Cast;
  };


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, INTERNAL, cast) {
  var canAttach = __webpack_require__(33).canAttach;
  var util = __webpack_require__(31);
  var isArray = util.isArray;

  function toResolutionValue(val) {
      switch(val) {
      case -1: return void 0;
      case -2: return [];
      case -3: return {};
      }
  }

  function PromiseArray(values) {
      var promise = this._promise = new Promise(INTERNAL);
      var parent = void 0;
      if (values instanceof Promise) {
          parent = values;
          promise._propagateFrom(parent, 1 | 4);
      }
      promise._setTrace(parent);
      this._values = values;
      this._length = 0;
      this._totalResolved = 0;
      this._init(void 0, -2);
  }
  PromiseArray.prototype.length = function PromiseArray$length() {
      return this._length;
  };

  PromiseArray.prototype.promise = function PromiseArray$promise() {
      return this._promise;
  };

  PromiseArray.prototype._init =
  function PromiseArray$_init(_, resolveValueIfEmpty) {
      var values = cast(this._values, void 0);
      if (values instanceof Promise) {
          this._values = values;
          values._setBoundTo(this._promise._boundTo);
          if (values.isFulfilled()) {
              values = values._settledValue;
              if (!isArray(values)) {
                  var err = new Promise.TypeError("expecting an array, a promise or a thenable");
                  this.__hardReject__(err);
                  return;
              }
          } else if (values.isPending()) {
              values._then(
                  PromiseArray$_init,
                  this._reject,
                  void 0,
                  this,
                  resolveValueIfEmpty
             );
              return;
          } else {
              values._unsetRejectionIsUnhandled();
              this._reject(values._settledValue);
              return;
          }
      } else if (!isArray(values)) {
          var err = new Promise.TypeError("expecting an array, a promise or a thenable");
          this.__hardReject__(err);
          return;
      }

      if (values.length === 0) {
          if (resolveValueIfEmpty === -5) {
              this._resolveEmptyArray();
          }
          else {
              this._resolve(toResolutionValue(resolveValueIfEmpty));
          }
          return;
      }
      var len = this.getActualLength(values.length);
      var newLen = len;
      var newValues = this.shouldCopyValues() ? new Array(len) : this._values;
      var isDirectScanNeeded = false;
      for (var i = 0; i < len; ++i) {
          var maybePromise = cast(values[i], void 0);
          if (maybePromise instanceof Promise) {
              if (maybePromise.isPending()) {
                  maybePromise._proxyPromiseArray(this, i);
              } else {
                  maybePromise._unsetRejectionIsUnhandled();
                  isDirectScanNeeded = true;
              }
          } else {
              isDirectScanNeeded = true;
          }
          newValues[i] = maybePromise;
      }
      this._values = newValues;
      this._length = newLen;
      if (isDirectScanNeeded) {
          this._scanDirectValues(len);
      }
  };

  PromiseArray.prototype._settlePromiseAt =
  function PromiseArray$_settlePromiseAt(index) {
      var value = this._values[index];
      if (!(value instanceof Promise)) {
          this._promiseFulfilled(value, index);
      } else if (value.isFulfilled()) {
          this._promiseFulfilled(value._settledValue, index);
      } else if (value.isRejected()) {
          this._promiseRejected(value._settledValue, index);
      }
  };

  PromiseArray.prototype._scanDirectValues =
  function PromiseArray$_scanDirectValues(len) {
      for (var i = 0; i < len; ++i) {
          if (this._isResolved()) {
              break;
          }
          this._settlePromiseAt(i);
      }
  };

  PromiseArray.prototype._isResolved = function PromiseArray$_isResolved() {
      return this._values === null;
  };

  PromiseArray.prototype._resolve = function PromiseArray$_resolve(value) {
      this._values = null;
      this._promise._fulfill(value);
  };

  PromiseArray.prototype.__hardReject__ =
  PromiseArray.prototype._reject = function PromiseArray$_reject(reason) {
      this._values = null;
      var trace = canAttach(reason) ? reason : new Error(reason + "");
      this._promise._attachExtraTrace(trace);
      this._promise._reject(reason, trace);
  };

  PromiseArray.prototype._promiseProgressed =
  function PromiseArray$_promiseProgressed(progressValue, index) {
      if (this._isResolved()) return;
      this._promise._progress({
          index: index,
          value: progressValue
      });
  };


  PromiseArray.prototype._promiseFulfilled =
  function PromiseArray$_promiseFulfilled(value, index) {
      if (this._isResolved()) return;
      this._values[index] = value;
      var totalResolved = ++this._totalResolved;
      if (totalResolved >= this._length) {
          this._resolve(this._values);
      }
  };

  PromiseArray.prototype._promiseRejected =
  function PromiseArray$_promiseRejected(reason, index) {
      if (this._isResolved()) return;
      this._totalResolved++;
      this._reject(reason);
  };

  PromiseArray.prototype.shouldCopyValues =
  function PromiseArray$_shouldCopyValues() {
      return true;
  };

  PromiseArray.prototype.getActualLength =
  function PromiseArray$getActualLength(len) {
      return len;
  };

  return PromiseArray;
  };


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function() {
  var inherits = __webpack_require__(31).inherits;
  var defineProperty = __webpack_require__(61).defineProperty;

  var rignore = new RegExp(
      "\\b(?:[a-zA-Z0-9.]+\\$_\\w+|" +
      "tryCatch(?:1|2|3|4|Apply)|new \\w*PromiseArray|" +
      "\\w*PromiseArray\\.\\w*PromiseArray|" +
      "setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|" +
      "process._tickCallback|nextTick|Async\\$\\w+)\\b"
  );

  var rtraceline = null;
  var formatStack = null;

  function formatNonError(obj) {
      var str;
      if (typeof obj === "function") {
          str = "[function " +
              (obj.name || "anonymous") +
              "]";
      } else {
          str = obj.toString();
          var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
          if (ruselessToString.test(str)) {
              try {
                  var newStr = JSON.stringify(obj);
                  str = newStr;
              }
              catch(e) {

              }
          }
          if (str.length === 0) {
              str = "(empty array)";
          }
      }
      return ("(<" + snip(str) + ">, no stack trace)");
  }

  function snip(str) {
      var maxChars = 41;
      if (str.length < maxChars) {
          return str;
      }
      return str.substr(0, maxChars - 3) + "...";
  }

  function CapturedTrace(ignoreUntil, isTopLevel) {
      this.captureStackTrace(CapturedTrace, isTopLevel);

  }
  inherits(CapturedTrace, Error);

  CapturedTrace.prototype.captureStackTrace =
  function CapturedTrace$captureStackTrace(ignoreUntil, isTopLevel) {
      captureStackTrace(this, ignoreUntil, isTopLevel);
  };

  CapturedTrace.possiblyUnhandledRejection =
  function CapturedTrace$PossiblyUnhandledRejection(reason) {
      if (typeof console === "object") {
          var message;
          if (typeof reason === "object" || typeof reason === "function") {
              var stack = reason.stack;
              message = "Possibly unhandled " + formatStack(stack, reason);
          } else {
              message = "Possibly unhandled " + String(reason);
          }
          if (typeof console.error === "function" ||
              typeof console.error === "object") {
              console.error(message);
          } else if (typeof console.log === "function" ||
              typeof console.log === "object") {
              console.log(message);
          }
      }
  };

  CapturedTrace.combine = function CapturedTrace$Combine(current, prev) {
      var curLast = current.length - 1;
      for (var i = prev.length - 1; i >= 0; --i) {
          var line = prev[i];
          if (current[curLast] === line) {
              current.pop();
              curLast--;
          } else {
              break;
          }
      }

      current.push("From previous event:");
      var lines = current.concat(prev);

      var ret = [];

      for (var i = 0, len = lines.length; i < len; ++i) {

          if ((rignore.test(lines[i]) ||
              (i > 0 && !rtraceline.test(lines[i])) &&
              lines[i] !== "From previous event:")
         ) {
              continue;
          }
          ret.push(lines[i]);
      }
      return ret;
  };

  CapturedTrace.protectErrorMessageNewlines = function(stack) {
      for (var i = 0; i < stack.length; ++i) {
          if (rtraceline.test(stack[i])) {
              break;
          }
      }

      if (i <= 1) return;

      var errorMessageLines = [];
      for (var j = 0; j < i; ++j) {
          errorMessageLines.push(stack.shift());
      }
      stack.unshift(errorMessageLines.join("\u0002\u0000\u0001"));
  };

  CapturedTrace.isSupported = function CapturedTrace$IsSupported() {
      return typeof captureStackTrace === "function";
  };

  var captureStackTrace = (function stackDetection() {
      if (typeof Error.stackTraceLimit === "number" &&
          typeof Error.captureStackTrace === "function") {
          rtraceline = /^\s*at\s*/;
          formatStack = function(stack, error) {
              if (typeof stack === "string") return stack;

              if (error.name !== void 0 &&
                  error.message !== void 0) {
                  return error.name + ". " + error.message;
              }
              return formatNonError(error);


          };
          var captureStackTrace = Error.captureStackTrace;
          return function CapturedTrace$_captureStackTrace(
              receiver, ignoreUntil) {
              captureStackTrace(receiver, ignoreUntil);
          };
      }
      var err = new Error();

      if (typeof err.stack === "string" &&
          typeof "".startsWith === "function" &&
          (err.stack.startsWith("stackDetection@")) &&
          stackDetection.name === "stackDetection") {

          defineProperty(Error, "stackTraceLimit", {
              writable: true,
              enumerable: false,
              configurable: false,
              value: 25
          });
          rtraceline = /@/;
          var rline = /[@\n]/;

          formatStack = function(stack, error) {
              if (typeof stack === "string") {
                  return (error.name + ". " + error.message + "\n" + stack);
              }

              if (error.name !== void 0 &&
                  error.message !== void 0) {
                  return error.name + ". " + error.message;
              }
              return formatNonError(error);
          };

          return function captureStackTrace(o) {
              var stack = new Error().stack;
              var split = stack.split(rline);
              var len = split.length;
              var ret = "";
              for (var i = 0; i < len; i += 2) {
                  ret += split[i];
                  ret += "@";
                  ret += split[i + 1];
                  ret += "\n";
              }
              o.stack = ret;
          };
      } else {
          formatStack = function(stack, error) {
              if (typeof stack === "string") return stack;

              if ((typeof error === "object" ||
                  typeof error === "function") &&
                  error.name !== void 0 &&
                  error.message !== void 0) {
                  return error.name + ". " + error.message;
              }
              return formatNonError(error);
          };

          return null;
      }
  })();

  return CapturedTrace;
  };


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(NEXT_FILTER) {
  var util = __webpack_require__(31);
  var errors = __webpack_require__(33);
  var tryCatch1 = util.tryCatch1;
  var errorObj = util.errorObj;
  var keys = __webpack_require__(61).keys;
  var TypeError = errors.TypeError;

  function CatchFilter(instances, callback, promise) {
      this._instances = instances;
      this._callback = callback;
      this._promise = promise;
  }

  function CatchFilter$_safePredicate(predicate, e) {
      var safeObject = {};
      var retfilter = tryCatch1(predicate, safeObject, e);

      if (retfilter === errorObj) return retfilter;

      var safeKeys = keys(safeObject);
      if (safeKeys.length) {
          errorObj.e = new TypeError(
              "Catch filter must inherit from Error "
            + "or be a simple predicate function");
          return errorObj;
      }
      return retfilter;
  }

  CatchFilter.prototype.doFilter = function CatchFilter$_doFilter(e) {
      var cb = this._callback;
      var promise = this._promise;
      var boundTo = promise._boundTo;
      for (var i = 0, len = this._instances.length; i < len; ++i) {
          var item = this._instances[i];
          var itemIsErrorType = item === Error ||
              (item != null && item.prototype instanceof Error);

          if (itemIsErrorType && e instanceof item) {
              var ret = tryCatch1(cb, boundTo, e);
              if (ret === errorObj) {
                  NEXT_FILTER.e = ret.e;
                  return NEXT_FILTER;
              }
              return ret;
          } else if (typeof item === "function" && !itemIsErrorType) {
              var shouldHandle = CatchFilter$_safePredicate(item, e);
              if (shouldHandle === errorObj) {
                  var trace = errors.canAttach(errorObj.e)
                      ? errorObj.e
                      : new Error(errorObj.e + "");
                  this._promise._attachExtraTrace(trace);
                  e = errorObj.e;
                  break;
              } else if (shouldHandle) {
                  var ret = tryCatch1(cb, boundTo, e);
                  if (ret === errorObj) {
                      NEXT_FILTER.e = ret.e;
                      return NEXT_FILTER;
                  }
                  return ret;
              }
          }
      }
      NEXT_FILTER.e = e;
      return NEXT_FILTER;
  };

  return CatchFilter;
  };


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  var util = __webpack_require__(31);
  var maybeWrapAsError = util.maybeWrapAsError;
  var errors = __webpack_require__(33);
  var TimeoutError = errors.TimeoutError;
  var OperationalError = errors.OperationalError;
  var async = __webpack_require__(32);
  var haveGetters = util.haveGetters;
  var es5 = __webpack_require__(61);

  function isUntypedError(obj) {
      return obj instanceof Error &&
          es5.getPrototypeOf(obj) === Error.prototype;
  }

  function wrapAsOperationalError(obj) {
      var ret;
      if (isUntypedError(obj)) {
          ret = new OperationalError(obj);
      } else {
          ret = obj;
      }
      errors.markAsOriginatingFromRejection(ret);
      return ret;
  }

  function nodebackForPromise(promise) {
      function PromiseResolver$_callback(err, value) {
          if (promise === null) return;

          if (err) {
              var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
              promise._attachExtraTrace(wrapped);
              promise._reject(wrapped);
          } else if (arguments.length > 2) {
              var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
              promise._fulfill(args);
          } else {
              promise._fulfill(value);
          }

          promise = null;
      }
      return PromiseResolver$_callback;
  }


  var PromiseResolver;
  if (!haveGetters) {
      PromiseResolver = function PromiseResolver(promise) {
          this.promise = promise;
          this.asCallback = nodebackForPromise(promise);
          this.callback = this.asCallback;
      };
  }
  else {
      PromiseResolver = function PromiseResolver(promise) {
          this.promise = promise;
      };
  }
  if (haveGetters) {
      var prop = {
          get: function() {
              return nodebackForPromise(this.promise);
          }
      };
      es5.defineProperty(PromiseResolver.prototype, "asCallback", prop);
      es5.defineProperty(PromiseResolver.prototype, "callback", prop);
  }

  PromiseResolver._nodebackForPromise = nodebackForPromise;

  PromiseResolver.prototype.toString = function PromiseResolver$toString() {
      return "[object PromiseResolver]";
  };

  PromiseResolver.prototype.resolve =
  PromiseResolver.prototype.fulfill = function PromiseResolver$resolve(value) {
      if (!(this instanceof PromiseResolver)) {
          throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
      }

      var promise = this.promise;
      if (promise._tryFollow(value)) {
          return;
      }
      async.invoke(promise._fulfill, promise, value);
  };

  PromiseResolver.prototype.reject = function PromiseResolver$reject(reason) {
      if (!(this instanceof PromiseResolver)) {
          throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
      }

      var promise = this.promise;
      errors.markAsOriginatingFromRejection(reason);
      var trace = errors.canAttach(reason) ? reason : new Error(reason + "");
      promise._attachExtraTrace(trace);
      async.invoke(promise._reject, promise, reason);
      if (trace !== reason) {
          async.invoke(this._setCarriedStackTrace, this, trace);
      }
  };

  PromiseResolver.prototype.progress =
  function PromiseResolver$progress(value) {
      if (!(this instanceof PromiseResolver)) {
          throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
      }
      async.invoke(this.promise._progress, this.promise, value);
  };

  PromiseResolver.prototype.cancel = function PromiseResolver$cancel() {
      async.invoke(this.promise.cancel, this.promise, void 0);
  };

  PromiseResolver.prototype.timeout = function PromiseResolver$timeout() {
      this.reject(new TimeoutError("timeout"));
  };

  PromiseResolver.prototype.isResolved = function PromiseResolver$isResolved() {
      return this.promise.isResolved();
  };

  PromiseResolver.prototype.toJSON = function PromiseResolver$toJSON() {
      return this.promise.toJSON();
  };

  PromiseResolver.prototype._setCarriedStackTrace =
  function PromiseResolver$_setCarriedStackTrace(trace) {
      if (this.promise.isRejected()) {
          this.promise._setCarriedStackTrace(trace);
      }
  };

  module.exports = PromiseResolver;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise) {
  var TypeError = __webpack_require__(33).TypeError;

  function apiRejection(msg) {
      var error = new TypeError(msg);
      var ret = Promise.rejected(error);
      var parent = ret._peekContext();
      if (parent != null) {
          parent._attachExtraTrace(error);
      }
      return ret;
  }

  return apiRejection;
  };


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, NEXT_FILTER, cast) {
  var util = __webpack_require__(31);
  var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;
  var isPrimitive = util.isPrimitive;
  var thrower = util.thrower;

  function returnThis() {
      return this;
  }
  function throwThis() {
      throw this;
  }
  function return$(r) {
      return function Promise$_returner() {
          return r;
      };
  }
  function throw$(r) {
      return function Promise$_thrower() {
          throw r;
      };
  }
  function promisedFinally(ret, reasonOrValue, isFulfilled) {
      var then;
      if (wrapsPrimitiveReceiver && isPrimitive(reasonOrValue)) {
          then = isFulfilled ? return$(reasonOrValue) : throw$(reasonOrValue);
      } else {
          then = isFulfilled ? returnThis : throwThis;
      }
      return ret._then(then, thrower, void 0, reasonOrValue, void 0);
  }

  function finallyHandler(reasonOrValue) {
      var promise = this.promise;
      var handler = this.handler;

      var ret = promise._isBound()
                      ? handler.call(promise._boundTo)
                      : handler();

      if (ret !== void 0) {
          var maybePromise = cast(ret, void 0);
          if (maybePromise instanceof Promise) {
              return promisedFinally(maybePromise, reasonOrValue,
                                      promise.isFulfilled());
          }
      }

      if (promise.isRejected()) {
          NEXT_FILTER.e = reasonOrValue;
          return NEXT_FILTER;
      } else {
          return reasonOrValue;
      }
  }

  function tapHandler(value) {
      var promise = this.promise;
      var handler = this.handler;

      var ret = promise._isBound()
                      ? handler.call(promise._boundTo, value)
                      : handler(value);

      if (ret !== void 0) {
          var maybePromise = cast(ret, void 0);
          if (maybePromise instanceof Promise) {
              return promisedFinally(maybePromise, value, true);
          }
      }
      return value;
  }

  Promise.prototype._passThroughHandler =
  function Promise$_passThroughHandler(handler, isFinally) {
      if (typeof handler !== "function") return this.then();

      var promiseAndHandler = {
          promise: this,
          handler: handler
      };

      return this._then(
              isFinally ? finallyHandler : tapHandler,
              isFinally ? finallyHandler : void 0, void 0,
              promiseAndHandler, void 0);
  };

  Promise.prototype.lastly =
  Promise.prototype["finally"] = function Promise$finally(handler) {
      return this._passThroughHandler(handler, true);
  };

  Promise.prototype.tap = function Promise$tap(handler) {
      return this._passThroughHandler(handler, false);
  };
  };


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  var util = __webpack_require__(31);
  var isPrimitive = util.isPrimitive;
  var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;

  module.exports = function(Promise) {
  var returner = function Promise$_returner() {
      return this;
  };
  var thrower = function Promise$_thrower() {
      throw this;
  };

  var wrapper = function Promise$_wrapper(value, action) {
      if (action === 1) {
          return function Promise$_thrower() {
              throw value;
          };
      } else if (action === 2) {
          return function Promise$_returner() {
              return value;
          };
      }
  };


  Promise.prototype["return"] =
  Promise.prototype.thenReturn =
  function Promise$thenReturn(value) {
      if (wrapsPrimitiveReceiver && isPrimitive(value)) {
          return this._then(
              wrapper(value, 2),
              void 0,
              void 0,
              void 0,
              void 0
         );
      }
      return this._then(returner, void 0, void 0, value, void 0);
  };

  Promise.prototype["throw"] =
  Promise.prototype.thenThrow =
  function Promise$thenThrow(reason) {
      if (wrapsPrimitiveReceiver && isPrimitive(reason)) {
          return this._then(
              wrapper(reason, 1),
              void 0,
              void 0,
              void 0,
              void 0
         );
      }
      return this._then(thrower, void 0, void 0, reason, void 0);
  };
  };


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise) {
  function PromiseInspection(promise) {
      if (promise !== void 0) {
          this._bitField = promise._bitField;
          this._settledValue = promise.isResolved()
              ? promise._settledValue
              : void 0;
      }
      else {
          this._bitField = 0;
          this._settledValue = void 0;
      }
  }

  PromiseInspection.prototype.isFulfilled =
  Promise.prototype.isFulfilled = function Promise$isFulfilled() {
      return (this._bitField & 268435456) > 0;
  };

  PromiseInspection.prototype.isRejected =
  Promise.prototype.isRejected = function Promise$isRejected() {
      return (this._bitField & 134217728) > 0;
  };

  PromiseInspection.prototype.isPending =
  Promise.prototype.isPending = function Promise$isPending() {
      return (this._bitField & 402653184) === 0;
  };

  PromiseInspection.prototype.value =
  Promise.prototype.value = function Promise$value() {
      if (!this.isFulfilled()) {
          throw new TypeError("cannot get fulfillment value of a non-fulfilled promise");
      }
      return this._settledValue;
  };

  PromiseInspection.prototype.error =
  PromiseInspection.prototype.reason =
  Promise.prototype.reason = function Promise$reason() {
      if (!this.isRejected()) {
          throw new TypeError("cannot get rejection reason of a non-rejected promise");
      }
      return this._settledValue;
  };

  PromiseInspection.prototype.isResolved =
  Promise.prototype.isResolved = function Promise$isResolved() {
      return (this._bitField & 402653184) > 0;
  };

  Promise.PromiseInspection = PromiseInspection;
  };


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports =
  function(Promise, PromiseArray, cast, INTERNAL) {
  var util = __webpack_require__(31);
  var canEvaluate = util.canEvaluate;
  var tryCatch1 = util.tryCatch1;
  var errorObj = util.errorObj;


  if (canEvaluate) {
      var thenCallback = function(i) {
          return new Function("value", "holder", "                             \n\
              'use strict';                                                    \n\
              holder.pIndex = value;                                           \n\
              holder.checkFulfillment(this);                                   \n\
              ".replace(/Index/g, i));
      };

      var caller = function(count) {
          var values = [];
          for (var i = 1; i <= count; ++i) values.push("holder.p" + i);
          return new Function("holder", "                                      \n\
              'use strict';                                                    \n\
              var callback = holder.fn;                                        \n\
              return callback(values);                                         \n\
              ".replace(/values/g, values.join(", ")));
      };
      var thenCallbacks = [];
      var callers = [void 0];
      for (var i = 1; i <= 5; ++i) {
          thenCallbacks.push(thenCallback(i));
          callers.push(caller(i));
      }

      var Holder = function(total, fn) {
          this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null;
          this.fn = fn;
          this.total = total;
          this.now = 0;
      };

      Holder.prototype.callers = callers;
      Holder.prototype.checkFulfillment = function(promise) {
          var now = this.now;
          now++;
          var total = this.total;
          if (now >= total) {
              var handler = this.callers[total];
              var ret = tryCatch1(handler, void 0, this);
              if (ret === errorObj) {
                  promise._rejectUnchecked(ret.e);
              } else if (!promise._tryFollow(ret)) {
                  promise._fulfillUnchecked(ret);
              }
          } else {
              this.now = now;
          }
      };
  }




  Promise.join = function Promise$Join() {
      var last = arguments.length - 1;
      var fn;
      if (last > 0 && typeof arguments[last] === "function") {
          fn = arguments[last];
          if (last < 6 && canEvaluate) {
              var ret = new Promise(INTERNAL);
              ret._setTrace(void 0);
              var holder = new Holder(last, fn);
              var reject = ret._reject;
              var callbacks = thenCallbacks;
              for (var i = 0; i < last; ++i) {
                  var maybePromise = cast(arguments[i], void 0);
                  if (maybePromise instanceof Promise) {
                      if (maybePromise.isPending()) {
                          maybePromise._then(callbacks[i], reject,
                                             void 0, ret, holder);
                      } else if (maybePromise.isFulfilled()) {
                          callbacks[i].call(ret,
                                            maybePromise._settledValue, holder);
                      } else {
                          ret._reject(maybePromise._settledValue);
                          maybePromise._unsetRejectionIsUnhandled();
                      }
                  } else {
                      callbacks[i].call(ret, maybePromise, holder);
                  }
              }
              return ret;
          }
      }
      var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
      var ret = new PromiseArray(args).promise();
      return fn !== void 0 ? ret.spread(fn) : ret;
  };

  };


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  var _setTimeout = function(fn, ms) {
      var len = arguments.length;
      var arg0 = arguments[2];
      var arg1 = arguments[3];
      var arg2 = len >= 5 ? arguments[4] : void 0;
      setTimeout(function() {
          fn(arg0, arg1, arg2);
      }, ms);
  };

  module.exports = function(Promise, INTERNAL, cast) {
  var util = __webpack_require__(31);
  var errors = __webpack_require__(33);
  var apiRejection = __webpack_require__(39)(Promise);
  var TimeoutError = Promise.TimeoutError;

  var afterTimeout = function Promise$_afterTimeout(promise, message, ms) {
      if (!promise.isPending()) return;
      if (typeof message !== "string") {
          message = "operation timed out after" + " " + ms + " ms"
      }
      var err = new TimeoutError(message);
      errors.markAsOriginatingFromRejection(err);
      promise._attachExtraTrace(err);
      promise._cancel(err);
  };

  var afterDelay = function Promise$_afterDelay(value, promise) {
      promise._fulfill(value);
  };

  var delay = Promise.delay = function Promise$Delay(value, ms) {
      if (ms === void 0) {
          ms = value;
          value = void 0;
      }
      ms = +ms;
      var maybePromise = cast(value, void 0);
      var promise = new Promise(INTERNAL);

      if (maybePromise instanceof Promise) {
          promise._propagateFrom(maybePromise, 7);
          promise._follow(maybePromise);
          return promise.then(function(value) {
              return Promise.delay(value, ms);
          });
      } else {
          promise._setTrace(void 0);
          _setTimeout(afterDelay, ms, value, promise);
      }
      return promise;
  };

  Promise.prototype.delay = function Promise$delay(ms) {
      return delay(this, ms);
  };

  Promise.prototype.timeout = function Promise$timeout(ms, message) {
      ms = +ms;

      var ret = new Promise(INTERNAL);
      ret._propagateFrom(this, 7);
      ret._follow(this);
      _setTimeout(afterTimeout, ms, ret, message, ms);
      return ret.cancellable();
  };

  };


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, INTERNAL, cast) {
  var apiRejection = __webpack_require__(39)(Promise);
  var isArray = __webpack_require__(31).isArray;

  var raceLater = function Promise$_raceLater(promise) {
      return promise.then(function(array) {
          return Promise$_Race(array, promise);
      });
  };

  var hasOwn = {}.hasOwnProperty;
  function Promise$_Race(promises, parent) {
      var maybePromise = cast(promises, void 0);

      if (maybePromise instanceof Promise) {
          return raceLater(maybePromise);
      } else if (!isArray(promises)) {
          return apiRejection("expecting an array, a promise or a thenable");
      }

      var ret = new Promise(INTERNAL);
      if (parent !== void 0) {
          ret._propagateFrom(parent, 7);
      } else {
          ret._setTrace(void 0);
      }
      var fulfill = ret._fulfill;
      var reject = ret._reject;
      for (var i = 0, len = promises.length; i < len; ++i) {
          var val = promises[i];

          if (val === void 0 && !(hasOwn.call(promises, i))) {
              continue;
          }

          Promise.cast(val)._then(fulfill, reject, void 0, ret, null);
      }
      return ret;
  }

  Promise.race = function Promise$Race(promises) {
      return Promise$_Race(promises, void 0);
  };

  Promise.prototype.race = function Promise$race() {
      return Promise$_Race(this, void 0);
  };

  };


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  var cr = Object.create;
  if (cr) {
      var callerCache = cr(null);
      var getterCache = cr(null);
      callerCache[" size"] = getterCache[" size"] = 0;
  }

  module.exports = function(Promise) {
  var util = __webpack_require__(31);
  var canEvaluate = util.canEvaluate;
  var isIdentifier = util.isIdentifier;

  function makeMethodCaller (methodName) {
      return new Function("obj", "                                             \n\
          'use strict'                                                         \n\
          var len = this.length;                                               \n\
          switch(len) {                                                        \n\
              case 1: return obj.methodName(this[0]);                          \n\
              case 2: return obj.methodName(this[0], this[1]);                 \n\
              case 3: return obj.methodName(this[0], this[1], this[2]);        \n\
              case 0: return obj.methodName();                                 \n\
              default: return obj.methodName.apply(obj, this);                 \n\
          }                                                                    \n\
          ".replace(/methodName/g, methodName));
  }

  function makeGetter (propertyName) {
      return new Function("obj", "                                             \n\
          'use strict';                                                        \n\
          return obj.propertyName;                                             \n\
          ".replace("propertyName", propertyName));
  }

  function getCompiled(name, compiler, cache) {
      var ret = cache[name];
      if (typeof ret !== "function") {
          if (!isIdentifier(name)) {
              return null;
          }
          ret = compiler(name);
          cache[name] = ret;
          cache[" size"]++;
          if (cache[" size"] > 512) {
              var keys = Object.keys(cache);
              for (var i = 0; i < 256; ++i) delete cache[keys[i]];
              cache[" size"] = keys.length - 256;
          }
      }
      return ret;
  }

  function getMethodCaller(name) {
      return getCompiled(name, makeMethodCaller, callerCache);
  }

  function getGetter(name) {
      return getCompiled(name, makeGetter, getterCache);
  }

  function caller(obj) {
      return obj[this.pop()].apply(obj, this);
  }
  Promise.prototype.call = function Promise$call(methodName) {
      var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
      if (canEvaluate) {
          var maybeCaller = getMethodCaller(methodName);
          if (maybeCaller !== null) {
              return this._then(maybeCaller, void 0, void 0, args, void 0);
          }
      }
      args.push(methodName);
      return this._then(caller, void 0, void 0, args, void 0);
  };

  function namedGetter(obj) {
      return obj[this];
  }
  function indexedGetter(obj) {
      return obj[this];
  }
  Promise.prototype.get = function Promise$get(propertyName) {
      var isIndex = (typeof propertyName === "number");
      var getter;
      if (!isIndex) {
          if (canEvaluate) {
              var maybeGetter = getGetter(propertyName);
              getter = maybeGetter !== null ? maybeGetter : namedGetter;
          } else {
              getter = namedGetter;
          }
      } else {
          getter = indexedGetter;
      }
      return this._then(getter, void 0, void 0, propertyName, void 0);
  };
  };


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, apiRejection, INTERNAL, cast) {
  var errors = __webpack_require__(33);
  var TypeError = errors.TypeError;
  var deprecated = __webpack_require__(31).deprecated;
  var util = __webpack_require__(31);
  var errorObj = util.errorObj;
  var tryCatch1 = util.tryCatch1;
  var yieldHandlers = [];

  function promiseFromYieldHandler(value, yieldHandlers) {
      var _errorObj = errorObj;
      var _Promise = Promise;
      var len = yieldHandlers.length;
      for (var i = 0; i < len; ++i) {
          var result = tryCatch1(yieldHandlers[i], void 0, value);
          if (result === _errorObj) {
              return _Promise.reject(_errorObj.e);
          }
          var maybePromise = cast(result, promiseFromYieldHandler);
          if (maybePromise instanceof _Promise) return maybePromise;
      }
      return null;
  }

  function PromiseSpawn(generatorFunction, receiver, yieldHandler) {
      var promise = this._promise = new Promise(INTERNAL);
      promise._setTrace(void 0);
      this._generatorFunction = generatorFunction;
      this._receiver = receiver;
      this._generator = void 0;
      this._yieldHandlers = typeof yieldHandler === "function"
          ? [yieldHandler].concat(yieldHandlers)
          : yieldHandlers;
  }

  PromiseSpawn.prototype.promise = function PromiseSpawn$promise() {
      return this._promise;
  };

  PromiseSpawn.prototype._run = function PromiseSpawn$_run() {
      this._generator = this._generatorFunction.call(this._receiver);
      this._receiver =
          this._generatorFunction = void 0;
      this._next(void 0);
  };

  PromiseSpawn.prototype._continue = function PromiseSpawn$_continue(result) {
      if (result === errorObj) {
          this._generator = void 0;
          var trace = errors.canAttach(result.e)
              ? result.e : new Error(result.e + "");
          this._promise._attachExtraTrace(trace);
          this._promise._reject(result.e, trace);
          return;
      }

      var value = result.value;
      if (result.done === true) {
          this._generator = void 0;
          if (!this._promise._tryFollow(value)) {
              this._promise._fulfill(value);
          }
      } else {
          var maybePromise = cast(value, void 0);
          if (!(maybePromise instanceof Promise)) {
              maybePromise =
                  promiseFromYieldHandler(maybePromise, this._yieldHandlers);
              if (maybePromise === null) {
                  this._throw(new TypeError("A value was yielded that could not be treated as a promise"));
                  return;
              }
          }
          maybePromise._then(
              this._next,
              this._throw,
              void 0,
              this,
              null
         );
      }
  };

  PromiseSpawn.prototype._throw = function PromiseSpawn$_throw(reason) {
      if (errors.canAttach(reason))
          this._promise._attachExtraTrace(reason);
      this._continue(
          tryCatch1(this._generator["throw"], this._generator, reason)
     );
  };

  PromiseSpawn.prototype._next = function PromiseSpawn$_next(value) {
      this._continue(
          tryCatch1(this._generator.next, this._generator, value)
     );
  };

  Promise.coroutine =
  function Promise$Coroutine(generatorFunction, options) {
      if (typeof generatorFunction !== "function") {
          throw new TypeError("generatorFunction must be a function");
      }
      var yieldHandler = Object(options).yieldHandler;
      var PromiseSpawn$ = PromiseSpawn;
      return function () {
          var generator = generatorFunction.apply(this, arguments);
          var spawn = new PromiseSpawn$(void 0, void 0, yieldHandler);
          spawn._generator = generator;
          spawn._next(void 0);
          return spawn.promise();
      };
  };

  Promise.coroutine.addYieldHandler = function(fn) {
      if (typeof fn !== "function") throw new TypeError("fn must be a function");
      yieldHandlers.push(fn);
  };

  Promise.spawn = function Promise$Spawn(generatorFunction) {
      deprecated("Promise.spawn is deprecated. Use Promise.coroutine instead.");
      if (typeof generatorFunction !== "function") {
          return apiRejection("generatorFunction must be a function");
      }
      var spawn = new PromiseSpawn(generatorFunction, this);
      var ret = spawn.promise();
      spawn._run(Promise.spawn);
      return ret;
  };
  };


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
  var util = __webpack_require__(31);
  var tryCatch3 = util.tryCatch3;
  var errorObj = util.errorObj;
  var PENDING = {};
  var EMPTY_ARRAY = [];

  function MappingPromiseArray(promises, fn, limit, _filter) {
      this.constructor$(promises);
      this._callback = fn;
      this._preservedValues = _filter === INTERNAL
          ? new Array(this.length())
          : null;
      this._limit = limit;
      this._inFlight = 0;
      this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
      this._init$(void 0, -2);
  }
  util.inherits(MappingPromiseArray, PromiseArray);

  MappingPromiseArray.prototype._init = function MappingPromiseArray$_init() {};

  MappingPromiseArray.prototype._promiseFulfilled =
  function MappingPromiseArray$_promiseFulfilled(value, index) {
      var values = this._values;
      if (values === null) return;

      var length = this.length();
      var preservedValues = this._preservedValues;
      var limit = this._limit;
      if (values[index] === PENDING) {
          values[index] = value;
          if (limit >= 1) {
              this._inFlight--;
              this._drainQueue();
              if (this._isResolved()) return;
          }
      } else {
          if (limit >= 1 && this._inFlight >= limit) {
              values[index] = value;
              this._queue.push(index);
              return;
          }
          if (preservedValues !== null) preservedValues[index] = value;

          var callback = this._callback;
          var receiver = this._promise._boundTo;
          var ret = tryCatch3(callback, receiver, value, index, length);
          if (ret === errorObj) return this._reject(ret.e);

          var maybePromise = cast(ret, void 0);
          if (maybePromise instanceof Promise) {
              if (maybePromise.isPending()) {
                  if (limit >= 1) this._inFlight++;
                  values[index] = PENDING;
                  return maybePromise._proxyPromiseArray(this, index);
              } else if (maybePromise.isFulfilled()) {
                  ret = maybePromise.value();
              } else {
                  maybePromise._unsetRejectionIsUnhandled();
                  return this._reject(maybePromise.reason());
              }
          }
          values[index] = ret;
      }
      var totalResolved = ++this._totalResolved;
      if (totalResolved >= length) {
          if (preservedValues !== null) {
              this._filter(values, preservedValues);
          } else {
              this._resolve(values);
          }

      }
  };

  MappingPromiseArray.prototype._drainQueue =
  function MappingPromiseArray$_drainQueue() {
      var queue = this._queue;
      var limit = this._limit;
      var values = this._values;
      while (queue.length > 0 && this._inFlight < limit) {
          var index = queue.pop();
          this._promiseFulfilled(values[index], index);
      }
  };

  MappingPromiseArray.prototype._filter =
  function MappingPromiseArray$_filter(booleans, values) {
      var len = values.length;
      var ret = new Array(len);
      var j = 0;
      for (var i = 0; i < len; ++i) {
          if (booleans[i]) ret[j++] = values[i];
      }
      ret.length = j;
      this._resolve(ret);
  };

  MappingPromiseArray.prototype.preservedValues =
  function MappingPromiseArray$preserveValues() {
      return this._preservedValues;
  };

  function map(promises, fn, options, _filter) {
      var limit = typeof options === "object" && options !== null
          ? options.concurrency
          : 0;
      limit = typeof limit === "number" &&
          isFinite(limit) && limit >= 1 ? limit : 0;
      return new MappingPromiseArray(promises, fn, limit, _filter);
  }

  Promise.prototype.map = function Promise$map(fn, options) {
      if (typeof fn !== "function") return apiRejection("fn must be a function");

      return map(this, fn, options, null).promise();
  };

  Promise.map = function Promise$Map(promises, fn, options, _filter) {
      if (typeof fn !== "function") return apiRejection("fn must be a function");
      return map(promises, fn, options, _filter).promise();
  };


  };


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise) {
  var util = __webpack_require__(31);
  var async = __webpack_require__(32);
  var tryCatch2 = util.tryCatch2;
  var tryCatch1 = util.tryCatch1;
  var errorObj = util.errorObj;

  function thrower(r) {
      throw r;
  }

  function Promise$_spreadAdapter(val, receiver) {
      if (!util.isArray(val)) return Promise$_successAdapter(val, receiver);
      var ret = util.tryCatchApply(this, [null].concat(val), receiver);
      if (ret === errorObj) {
          async.invokeLater(thrower, void 0, ret.e);
      }
  }

  function Promise$_successAdapter(val, receiver) {
      var nodeback = this;
      var ret = val === void 0
          ? tryCatch1(nodeback, receiver, null)
          : tryCatch2(nodeback, receiver, null, val);
      if (ret === errorObj) {
          async.invokeLater(thrower, void 0, ret.e);
      }
  }
  function Promise$_errorAdapter(reason, receiver) {
      var nodeback = this;
      var ret = tryCatch1(nodeback, receiver, reason);
      if (ret === errorObj) {
          async.invokeLater(thrower, void 0, ret.e);
      }
  }

  Promise.prototype.nodeify = function Promise$nodeify(nodeback, options) {
      if (typeof nodeback == "function") {
          var adapter = Promise$_successAdapter;
          if (options !== void 0 && Object(options).spread) {
              adapter = Promise$_spreadAdapter;
          }
          this._then(
              adapter,
              Promise$_errorAdapter,
              void 0,
              nodeback,
              this._boundTo
          );
      }
      return this;
  };
  };


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, INTERNAL) {
  var THIS = {};
  var util = __webpack_require__(31);
  var nodebackForPromise = __webpack_require__(38)
      ._nodebackForPromise;
  var withAppended = util.withAppended;
  var maybeWrapAsError = util.maybeWrapAsError;
  var canEvaluate = util.canEvaluate;
  var TypeError = __webpack_require__(33).TypeError;
  var defaultSuffix = "Async";
  var defaultFilter = function(name, func) {
      return util.isIdentifier(name) &&
          name.charAt(0) !== "_" &&
          !util.isClass(func);
  };
  var defaultPromisified = {__isPromisified__: true};


  function escapeIdentRegex(str) {
      return str.replace(/([$])/, "\\$");
  }

  function isPromisified(fn) {
      try {
          return fn.__isPromisified__ === true;
      }
      catch (e) {
          return false;
      }
  }

  function hasPromisified(obj, key, suffix) {
      var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                              defaultPromisified);
      return val ? isPromisified(val) : false;
  }
  function checkValid(ret, suffix, suffixRegexp) {
      for (var i = 0; i < ret.length; i += 2) {
          var key = ret[i];
          if (suffixRegexp.test(key)) {
              var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
              for (var j = 0; j < ret.length; j += 2) {
                  if (ret[j] === keyWithoutAsyncSuffix) {
                      throw new TypeError("Cannot promisify an API " +
                          "that has normal methods with '"+suffix+"'-suffix");
                  }
              }
          }
      }
  }

  function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
      var keys = util.inheritedDataKeys(obj);
      var ret = [];
      for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var value = obj[key];
          if (typeof value === "function" &&
              !isPromisified(value) &&
              !hasPromisified(obj, key, suffix) &&
              filter(key, value, obj)) {
              ret.push(key, value);
          }
      }
      checkValid(ret, suffix, suffixRegexp);
      return ret;
  }

  function switchCaseArgumentOrder(likelyArgumentCount) {
      var ret = [likelyArgumentCount];
      var min = Math.max(0, likelyArgumentCount - 1 - 5);
      for(var i = likelyArgumentCount - 1; i >= min; --i) {
          if (i === likelyArgumentCount) continue;
          ret.push(i);
      }
      for(var i = likelyArgumentCount + 1; i <= 5; ++i) {
          ret.push(i);
      }
      return ret;
  }

  function argumentSequence(argumentCount) {
      return util.filledRange(argumentCount, "arguments[", "]");
  }

  function parameterDeclaration(parameterCount) {
      return util.filledRange(parameterCount, "_arg", "");
  }

  function parameterCount(fn) {
      if (typeof fn.length === "number") {
          return Math.max(Math.min(fn.length, 1023 + 1), 0);
      }
      return 0;
  }

  function generatePropertyAccess(key) {
      if (util.isIdentifier(key)) {
          return "." + key;
      }
      else return "['" + key.replace(/(['\\])/g, "\\$1") + "']";
  }

  function makeNodePromisifiedEval(callback, receiver, originalName, fn, suffix) {
      var newParameterCount = Math.max(0, parameterCount(fn) - 1);
      var argumentOrder = switchCaseArgumentOrder(newParameterCount);
      var callbackName =
          (typeof originalName === "string" && util.isIdentifier(originalName)
              ? originalName + suffix
              : "promisified");

      function generateCallForArgumentCount(count) {
          var args = argumentSequence(count).join(", ");
          var comma = count > 0 ? ", " : "";
          var ret;
          if (typeof callback === "string") {
              ret = "                                                          \n\
                  this.method(args, fn);                                       \n\
                  break;                                                       \n\
              ".replace(".method", generatePropertyAccess(callback));
          } else if (receiver === THIS) {
              ret =  "                                                         \n\
                  callback.call(this, args, fn);                               \n\
                  break;                                                       \n\
              ";
          } else if (receiver !== void 0) {
              ret =  "                                                         \n\
                  callback.call(receiver, args, fn);                           \n\
                  break;                                                       \n\
              ";
          } else {
              ret =  "                                                         \n\
                  callback(args, fn);                                          \n\
                  break;                                                       \n\
              ";
          }
          return ret.replace("args", args).replace(", ", comma);
      }

      function generateArgumentSwitchCase() {
          var ret = "";
          for(var i = 0; i < argumentOrder.length; ++i) {
              ret += "case " + argumentOrder[i] +":" +
                  generateCallForArgumentCount(argumentOrder[i]);
          }
          var codeForCall;
          if (typeof callback === "string") {
              codeForCall = "                                                  \n\
                  this.property.apply(this, args);                             \n\
              "
                  .replace(".property", generatePropertyAccess(callback));
          } else if (receiver === THIS) {
              codeForCall = "                                                  \n\
                  callback.apply(this, args);                                  \n\
              ";
          } else {
              codeForCall = "                                                  \n\
                  callback.apply(receiver, args);                              \n\
              ";
          }

          ret += "                                                             \n\
          default:                                                             \n\
              var args = new Array(len + 1);                                   \n\
              var i = 0;                                                       \n\
              for (var i = 0; i < len; ++i) {                                  \n\
                 args[i] = arguments[i];                                       \n\
              }                                                                \n\
              args[i] = fn;                                                    \n\
              [CodeForCall]                                                    \n\
              break;                                                           \n\
          ".replace("[CodeForCall]", codeForCall);
          return ret;
      }

      return new Function("Promise",
                          "callback",
                          "receiver",
                          "withAppended",
                          "maybeWrapAsError",
                          "nodebackForPromise",
                          "INTERNAL","                                         \n\
          var ret = function FunctionName(Parameters) {                        \n\
              'use strict';                                                    \n\
              var len = arguments.length;                                      \n\
              var promise = new Promise(INTERNAL);                             \n\
              promise._setTrace(void 0);                                       \n\
              var fn = nodebackForPromise(promise);                            \n\
              try {                                                            \n\
                  switch(len) {                                                \n\
                      [CodeForSwitchCase]                                      \n\
                  }                                                            \n\
              } catch (e) {                                                    \n\
                  var wrapped = maybeWrapAsError(e);                           \n\
                  promise._attachExtraTrace(wrapped);                          \n\
                  promise._reject(wrapped);                                    \n\
              }                                                                \n\
              return promise;                                                  \n\
          };                                                                   \n\
          ret.__isPromisified__ = true;                                        \n\
          return ret;                                                          \n\
          "
          .replace("FunctionName", callbackName)
          .replace("Parameters", parameterDeclaration(newParameterCount))
          .replace("[CodeForSwitchCase]", generateArgumentSwitchCase()))(
              Promise,
              callback,
              receiver,
              withAppended,
              maybeWrapAsError,
              nodebackForPromise,
              INTERNAL
          );
  }

  function makeNodePromisifiedClosure(callback, receiver) {
      function promisified() {
          var _receiver = receiver;
          if (receiver === THIS) _receiver = this;
          if (typeof callback === "string") {
              callback = _receiver[callback];
          }
          var promise = new Promise(INTERNAL);
          promise._setTrace(void 0);
          var fn = nodebackForPromise(promise);
          try {
              callback.apply(_receiver, withAppended(arguments, fn));
          } catch(e) {
              var wrapped = maybeWrapAsError(e);
              promise._attachExtraTrace(wrapped);
              promise._reject(wrapped);
          }
          return promise;
      }
      promisified.__isPromisified__ = true;
      return promisified;
  }

  var makeNodePromisified = canEvaluate
      ? makeNodePromisifiedEval
      : makeNodePromisifiedClosure;

  function promisifyAll(obj, suffix, filter, promisifier) {
      var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
      var methods =
          promisifiableMethods(obj, suffix, suffixRegexp, filter);

      for (var i = 0, len = methods.length; i < len; i+= 2) {
          var key = methods[i];
          var fn = methods[i+1];
          var promisifiedKey = key + suffix;
          obj[promisifiedKey] = promisifier === makeNodePromisified
                  ? makeNodePromisified(key, THIS, key, fn, suffix)
                  : promisifier(fn);
      }
      util.toFastProperties(obj);
      return obj;
  }

  function promisify(callback, receiver) {
      return makeNodePromisified(callback, receiver, void 0, callback);
  }

  Promise.promisify = function Promise$Promisify(fn, receiver) {
      if (typeof fn !== "function") {
          throw new TypeError("fn must be a function");
      }
      if (isPromisified(fn)) {
          return fn;
      }
      return promisify(fn, arguments.length < 2 ? THIS : receiver);
  };

  Promise.promisifyAll = function Promise$PromisifyAll(target, options) {
      if (typeof target !== "function" && typeof target !== "object") {
          throw new TypeError("the target of promisifyAll must be an object or a function");
      }
      options = Object(options);
      var suffix = options.suffix;
      if (typeof suffix !== "string") suffix = defaultSuffix;
      var filter = options.filter;
      if (typeof filter !== "function") filter = defaultFilter;
      var promisifier = options.promisifier;
      if (typeof promisifier !== "function") promisifier = makeNodePromisified;

      if (!util.isIdentifier(suffix)) {
          throw new RangeError("suffix must be a valid identifier");
      }

      var keys = util.inheritedDataKeys(target, {includeHidden: true});
      for (var i = 0; i < keys.length; ++i) {
          var value = target[keys[i]];
          if (keys[i] !== "constructor" &&
              util.isClass(value)) {
              promisifyAll(value.prototype, suffix, filter, promisifier);
              promisifyAll(value, suffix, filter, promisifier);
          }
      }

      return promisifyAll(target, suffix, filter, promisifier);
  };
  };



/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, PromiseArray, cast) {
  var util = __webpack_require__(31);
  var apiRejection = __webpack_require__(39)(Promise);
  var isObject = util.isObject;
  var es5 = __webpack_require__(61);

  function PropertiesPromiseArray(obj) {
      var keys = es5.keys(obj);
      var len = keys.length;
      var values = new Array(len * 2);
      for (var i = 0; i < len; ++i) {
          var key = keys[i];
          values[i] = obj[key];
          values[i + len] = key;
      }
      this.constructor$(values);
  }
  util.inherits(PropertiesPromiseArray, PromiseArray);

  PropertiesPromiseArray.prototype._init =
  function PropertiesPromiseArray$_init() {
      this._init$(void 0, -3) ;
  };

  PropertiesPromiseArray.prototype._promiseFulfilled =
  function PropertiesPromiseArray$_promiseFulfilled(value, index) {
      if (this._isResolved()) return;
      this._values[index] = value;
      var totalResolved = ++this._totalResolved;
      if (totalResolved >= this._length) {
          var val = {};
          var keyOffset = this.length();
          for (var i = 0, len = this.length(); i < len; ++i) {
              val[this._values[i + keyOffset]] = this._values[i];
          }
          this._resolve(val);
      }
  };

  PropertiesPromiseArray.prototype._promiseProgressed =
  function PropertiesPromiseArray$_promiseProgressed(value, index) {
      if (this._isResolved()) return;

      this._promise._progress({
          key: this._values[index + this.length()],
          value: value
      });
  };

  PropertiesPromiseArray.prototype.shouldCopyValues =
  function PropertiesPromiseArray$_shouldCopyValues() {
      return false;
  };

  PropertiesPromiseArray.prototype.getActualLength =
  function PropertiesPromiseArray$getActualLength(len) {
      return len >> 1;
  };

  function Promise$_Props(promises) {
      var ret;
      var castValue = cast(promises, void 0);

      if (!isObject(castValue)) {
          return apiRejection("cannot await properties of a non-object");
      } else if (castValue instanceof Promise) {
          ret = castValue._then(Promise.props, void 0, void 0, void 0, void 0);
      } else {
          ret = new PropertiesPromiseArray(castValue).promise();
      }

      if (castValue instanceof Promise) {
          ret._propagateFrom(castValue, 4);
      }
      return ret;
  }

  Promise.prototype.props = function Promise$props() {
      return Promise$_Props(this);
  };

  Promise.props = function Promise$Props(promises) {
      return Promise$_Props(promises);
  };
  };


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
  var util = __webpack_require__(31);
  var tryCatch4 = util.tryCatch4;
  var tryCatch3 = util.tryCatch3;
  var errorObj = util.errorObj;
  function ReductionPromiseArray(promises, fn, accum, _each) {
      this.constructor$(promises);
      this._preservedValues = _each === INTERNAL ? [] : null;
      this._zerothIsAccum = (accum === void 0);
      this._gotAccum = false;
      this._reducingIndex = (this._zerothIsAccum ? 1 : 0);
      this._valuesPhase = undefined;

      var maybePromise = cast(accum, void 0);
      var rejected = false;
      var isPromise = maybePromise instanceof Promise;
      if (isPromise) {
          if (maybePromise.isPending()) {
              maybePromise._proxyPromiseArray(this, -1);
          } else if (maybePromise.isFulfilled()) {
              accum = maybePromise.value();
              this._gotAccum = true;
          } else {
              maybePromise._unsetRejectionIsUnhandled();
              this._reject(maybePromise.reason());
              rejected = true;
          }
      }
      if (!(isPromise || this._zerothIsAccum)) this._gotAccum = true;
      this._callback = fn;
      this._accum = accum;
      if (!rejected) this._init$(void 0, -5);
  }
  util.inherits(ReductionPromiseArray, PromiseArray);

  ReductionPromiseArray.prototype._init =
  function ReductionPromiseArray$_init() {};

  ReductionPromiseArray.prototype._resolveEmptyArray =
  function ReductionPromiseArray$_resolveEmptyArray() {
      if (this._gotAccum || this._zerothIsAccum) {
          this._resolve(this._preservedValues !== null
                          ? [] : this._accum);
      }
  };

  ReductionPromiseArray.prototype._promiseFulfilled =
  function ReductionPromiseArray$_promiseFulfilled(value, index) {
      var values = this._values;
      if (values === null) return;
      var length = this.length();
      var preservedValues = this._preservedValues;
      var isEach = preservedValues !== null;
      var gotAccum = this._gotAccum;
      var valuesPhase = this._valuesPhase;
      var valuesPhaseIndex;
      if (!valuesPhase) {
          valuesPhase = this._valuesPhase = Array(length);
          for (valuesPhaseIndex=0; valuesPhaseIndex<length; ++valuesPhaseIndex) {
              valuesPhase[valuesPhaseIndex] = 0;
          }
      }
      valuesPhaseIndex = valuesPhase[index];

      if (index === 0 && this._zerothIsAccum) {
          if (!gotAccum) {
              this._accum = value;
              this._gotAccum = gotAccum = true;
          }
          valuesPhase[index] = ((valuesPhaseIndex === 0)
              ? 1 : 2);
      } else if (index === -1) {
          if (!gotAccum) {
              this._accum = value;
              this._gotAccum = gotAccum = true;
          }
      } else {
          if (valuesPhaseIndex === 0) {
              valuesPhase[index] = 1;
          }
          else {
              valuesPhase[index] = 2;
              if (gotAccum) {
                  this._accum = value;
              }
          }
      }
      if (!gotAccum) return;

      var callback = this._callback;
      var receiver = this._promise._boundTo;
      var ret;

      for (var i = this._reducingIndex; i < length; ++i) {
          valuesPhaseIndex = valuesPhase[i];
          if (valuesPhaseIndex === 2) {
              this._reducingIndex = i + 1;
              continue;
          }
          if (valuesPhaseIndex !== 1) return;

          value = values[i];
          if (value instanceof Promise) {
              if (value.isFulfilled()) {
                  value = value._settledValue;
              } else if (value.isPending()) {
                  return;
              } else {
                  value._unsetRejectionIsUnhandled();
                  return this._reject(value.reason());
              }
          }

          if (isEach) {
              preservedValues.push(value);
              ret = tryCatch3(callback, receiver, value, i, length);
          }
          else {
              ret = tryCatch4(callback, receiver, this._accum, value, i, length);
          }

          if (ret === errorObj) return this._reject(ret.e);

          var maybePromise = cast(ret, void 0);
          if (maybePromise instanceof Promise) {
              if (maybePromise.isPending()) {
                  valuesPhase[i] = 4;
                  return maybePromise._proxyPromiseArray(this, i);
              } else if (maybePromise.isFulfilled()) {
                  ret = maybePromise.value();
              } else {
                  maybePromise._unsetRejectionIsUnhandled();
                  return this._reject(maybePromise.reason());
              }
          }

          this._reducingIndex = i + 1;
          this._accum = ret;
      }

      if (this._reducingIndex < length) return;
      this._resolve(isEach ? preservedValues : this._accum);
  };

  function reduce(promises, fn, initialValue, _each) {
      if (typeof fn !== "function") return apiRejection("fn must be a function");
      var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
      return array.promise();
  }

  Promise.prototype.reduce = function Promise$reduce(fn, initialValue) {
      return reduce(this, fn, initialValue, null);
  };

  Promise.reduce = function Promise$Reduce(promises, fn, initialValue, _each) {
      return reduce(promises, fn, initialValue, _each);
  };
  };


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports =
      function(Promise, PromiseArray) {
  var PromiseInspection = Promise.PromiseInspection;
  var util = __webpack_require__(31);

  function SettledPromiseArray(values) {
      this.constructor$(values);
  }
  util.inherits(SettledPromiseArray, PromiseArray);

  SettledPromiseArray.prototype._promiseResolved =
  function SettledPromiseArray$_promiseResolved(index, inspection) {
      this._values[index] = inspection;
      var totalResolved = ++this._totalResolved;
      if (totalResolved >= this._length) {
          this._resolve(this._values);
      }
  };

  SettledPromiseArray.prototype._promiseFulfilled =
  function SettledPromiseArray$_promiseFulfilled(value, index) {
      if (this._isResolved()) return;
      var ret = new PromiseInspection();
      ret._bitField = 268435456;
      ret._settledValue = value;
      this._promiseResolved(index, ret);
  };
  SettledPromiseArray.prototype._promiseRejected =
  function SettledPromiseArray$_promiseRejected(reason, index) {
      if (this._isResolved()) return;
      var ret = new PromiseInspection();
      ret._bitField = 134217728;
      ret._settledValue = reason;
      this._promiseResolved(index, ret);
  };

  Promise.settle = function Promise$Settle(promises) {
      return new SettledPromiseArray(promises).promise();
  };

  Promise.prototype.settle = function Promise$settle() {
      return new SettledPromiseArray(this).promise();
  };
  };


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports =
  function(Promise, PromiseArray, apiRejection) {
  var util = __webpack_require__(31);
  var RangeError = __webpack_require__(33).RangeError;
  var AggregateError = __webpack_require__(33).AggregateError;
  var isArray = util.isArray;


  function SomePromiseArray(values) {
      this.constructor$(values);
      this._howMany = 0;
      this._unwrap = false;
      this._initialized = false;
  }
  util.inherits(SomePromiseArray, PromiseArray);

  SomePromiseArray.prototype._init = function SomePromiseArray$_init() {
      if (!this._initialized) {
          return;
      }
      if (this._howMany === 0) {
          this._resolve([]);
          return;
      }
      this._init$(void 0, -5);
      var isArrayResolved = isArray(this._values);
      if (!this._isResolved() &&
          isArrayResolved &&
          this._howMany > this._canPossiblyFulfill()) {
          this._reject(this._getRangeError(this.length()));
      }
  };

  SomePromiseArray.prototype.init = function SomePromiseArray$init() {
      this._initialized = true;
      this._init();
  };

  SomePromiseArray.prototype.setUnwrap = function SomePromiseArray$setUnwrap() {
      this._unwrap = true;
  };

  SomePromiseArray.prototype.howMany = function SomePromiseArray$howMany() {
      return this._howMany;
  };

  SomePromiseArray.prototype.setHowMany =
  function SomePromiseArray$setHowMany(count) {
      if (this._isResolved()) return;
      this._howMany = count;
  };

  SomePromiseArray.prototype._promiseFulfilled =
  function SomePromiseArray$_promiseFulfilled(value) {
      if (this._isResolved()) return;
      this._addFulfilled(value);
      if (this._fulfilled() === this.howMany()) {
          this._values.length = this.howMany();
          if (this.howMany() === 1 && this._unwrap) {
              this._resolve(this._values[0]);
          } else {
              this._resolve(this._values);
          }
      }

  };
  SomePromiseArray.prototype._promiseRejected =
  function SomePromiseArray$_promiseRejected(reason) {
      if (this._isResolved()) return;
      this._addRejected(reason);
      if (this.howMany() > this._canPossiblyFulfill()) {
          var e = new AggregateError();
          for (var i = this.length(); i < this._values.length; ++i) {
              e.push(this._values[i]);
          }
          this._reject(e);
      }
  };

  SomePromiseArray.prototype._fulfilled = function SomePromiseArray$_fulfilled() {
      return this._totalResolved;
  };

  SomePromiseArray.prototype._rejected = function SomePromiseArray$_rejected() {
      return this._values.length - this.length();
  };

  SomePromiseArray.prototype._addRejected =
  function SomePromiseArray$_addRejected(reason) {
      this._values.push(reason);
  };

  SomePromiseArray.prototype._addFulfilled =
  function SomePromiseArray$_addFulfilled(value) {
      this._values[this._totalResolved++] = value;
  };

  SomePromiseArray.prototype._canPossiblyFulfill =
  function SomePromiseArray$_canPossiblyFulfill() {
      return this.length() - this._rejected();
  };

  SomePromiseArray.prototype._getRangeError =
  function SomePromiseArray$_getRangeError(count) {
      var message = "Input array must contain at least " +
              this._howMany + " items but contains only " + count + " items";
      return new RangeError(message);
  };

  SomePromiseArray.prototype._resolveEmptyArray =
  function SomePromiseArray$_resolveEmptyArray() {
      this._reject(this._getRangeError(0));
  };

  function Promise$_Some(promises, howMany) {
      if ((howMany | 0) !== howMany || howMany < 0) {
          return apiRejection("expecting a positive integer");
      }
      var ret = new SomePromiseArray(promises);
      var promise = ret.promise();
      if (promise.isRejected()) {
          return promise;
      }
      ret.setHowMany(howMany);
      ret.init();
      return promise;
  }

  Promise.some = function Promise$Some(promises, howMany) {
      return Promise$_Some(promises, howMany);
  };

  Promise.prototype.some = function Promise$some(howMany) {
      return Promise$_Some(this, howMany);
  };

  Promise._SomePromiseArray = SomePromiseArray;
  };


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, PromiseArray) {
  var util = __webpack_require__(31);
  var async = __webpack_require__(32);
  var errors = __webpack_require__(33);
  var tryCatch1 = util.tryCatch1;
  var errorObj = util.errorObj;

  Promise.prototype.progressed = function Promise$progressed(handler) {
      return this._then(void 0, void 0, handler, void 0, void 0);
  };

  Promise.prototype._progress = function Promise$_progress(progressValue) {
      if (this._isFollowingOrFulfilledOrRejected()) return;
      this._progressUnchecked(progressValue);

  };

  Promise.prototype._progressHandlerAt =
  function Promise$_progressHandlerAt(index) {
      return index === 0
          ? this._progressHandler0
          : this[(index << 2) + index - 5 + 2];
  };

  Promise.prototype._doProgressWith =
  function Promise$_doProgressWith(progression) {
      var progressValue = progression.value;
      var handler = progression.handler;
      var promise = progression.promise;
      var receiver = progression.receiver;

      var ret = tryCatch1(handler, receiver, progressValue);
      if (ret === errorObj) {
          if (ret.e != null &&
              ret.e.name !== "StopProgressPropagation") {
              var trace = errors.canAttach(ret.e)
                  ? ret.e : new Error(ret.e + "");
              promise._attachExtraTrace(trace);
              promise._progress(ret.e);
          }
      } else if (ret instanceof Promise) {
          ret._then(promise._progress, null, null, promise, void 0);
      } else {
          promise._progress(ret);
      }
  };


  Promise.prototype._progressUnchecked =
  function Promise$_progressUnchecked(progressValue) {
      if (!this.isPending()) return;
      var len = this._length();
      var progress = this._progress;
      for (var i = 0; i < len; i++) {
          var handler = this._progressHandlerAt(i);
          var promise = this._promiseAt(i);
          if (!(promise instanceof Promise)) {
              var receiver = this._receiverAt(i);
              if (typeof handler === "function") {
                  handler.call(receiver, progressValue, promise);
              } else if (receiver instanceof Promise && receiver._isProxied()) {
                  receiver._progressUnchecked(progressValue);
              } else if (receiver instanceof PromiseArray) {
                  receiver._promiseProgressed(progressValue, promise);
              }
              continue;
          }

          if (typeof handler === "function") {
              async.invoke(this._doProgressWith, this, {
                  handler: handler,
                  promise: promise,
                  receiver: this._receiverAt(i),
                  value: progressValue
              });
          } else {
              async.invoke(progress, promise, progressValue);
          }
      }
  };
  };


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, INTERNAL) {
  var errors = __webpack_require__(33);
  var canAttach = errors.canAttach;
  var async = __webpack_require__(32);
  var CancellationError = errors.CancellationError;

  Promise.prototype._cancel = function Promise$_cancel(reason) {
      if (!this.isCancellable()) return this;
      var parent;
      var promiseToReject = this;
      while ((parent = promiseToReject._cancellationParent) !== void 0 &&
          parent.isCancellable()) {
          promiseToReject = parent;
      }
      promiseToReject._attachExtraTrace(reason);
      promiseToReject._rejectUnchecked(reason);
  };

  Promise.prototype.cancel = function Promise$cancel(reason) {
      if (!this.isCancellable()) return this;
      reason = reason !== void 0
          ? (canAttach(reason) ? reason : new Error(reason + ""))
          : new CancellationError();
      async.invokeLater(this._cancel, this, reason);
      return this;
  };

  Promise.prototype.cancellable = function Promise$cancellable() {
      if (this._cancellable()) return this;
      this._setCancellable();
      this._cancellationParent = void 0;
      return this;
  };

  Promise.prototype.uncancellable = function Promise$uncancellable() {
      var ret = new Promise(INTERNAL);
      ret._propagateFrom(this, 2 | 4);
      ret._follow(this);
      ret._unsetCancellable();
      return ret;
  };

  Promise.prototype.fork =
  function Promise$fork(didFulfill, didReject, didProgress) {
      var ret = this._then(didFulfill, didReject, didProgress,
                           void 0, void 0);

      ret._setCancellable();
      ret._cancellationParent = void 0;
      return ret;
  };
  };


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, INTERNAL) {
  var PromiseMap = Promise.map;

  Promise.prototype.filter = function Promise$filter(fn, options) {
      return PromiseMap(this, fn, options, INTERNAL);
  };

  Promise.filter = function Promise$Filter(promises, fn, options) {
      return PromiseMap(promises, fn, options, INTERNAL);
  };
  };


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise) {
  var SomePromiseArray = Promise._SomePromiseArray;
  function Promise$_Any(promises) {
      var ret = new SomePromiseArray(promises);
      var promise = ret.promise();
      if (promise.isRejected()) {
          return promise;
      }
      ret.setHowMany(1);
      ret.setUnwrap();
      ret.init();
      return promise;
  }

  Promise.any = function Promise$Any(promises) {
      return Promise$_Any(promises);
  };

  Promise.prototype.any = function Promise$any() {
      return Promise$_Any(this);
  };

  };


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function(Promise, INTERNAL) {
  var PromiseReduce = Promise.reduce;

  Promise.prototype.each = function Promise$each(fn) {
      return PromiseReduce(this, fn, null, INTERNAL);
  };

  Promise.each = function Promise$Each(promises, fn) {
      return PromiseReduce(promises, fn, null, INTERNAL);
  };
  };


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  module.exports = function (Promise, apiRejection, cast) {
      var TypeError = __webpack_require__(33).TypeError;
      var inherits = __webpack_require__(31).inherits;
      var PromiseInspection = Promise.PromiseInspection;

      function inspectionMapper(inspections) {
          var len = inspections.length;
          for (var i = 0; i < len; ++i) {
              var inspection = inspections[i];
              if (inspection.isRejected()) {
                  return Promise.reject(inspection.error());
              }
              inspections[i] = inspection.value();
          }
          return inspections;
      }

      function thrower(e) {
          setTimeout(function(){throw e;}, 0);
      }

      function dispose(resources, inspection) {
          var i = 0;
          var len = resources.length;
          var ret = Promise.defer();
          function iterator() {
              if (i >= len) return ret.resolve();
              var maybePromise = cast(resources[i++], void 0);
              if (maybePromise instanceof Promise &&
                  maybePromise._isDisposable()) {
                  try {
                      maybePromise = cast(maybePromise._getDisposer()
                                          .tryDispose(inspection), void 0);
                  } catch (e) {
                      return thrower(e);
                  }
                  if (maybePromise instanceof Promise) {
                      return maybePromise._then(iterator, thrower,
                                                null, null, null);
                  }
              }
              iterator();
          }
          iterator();
          return ret.promise;
      }

      function disposerSuccess(value) {
          var inspection = new PromiseInspection();
          inspection._settledValue = value;
          inspection._bitField = 268435456;
          return dispose(this, inspection).thenReturn(value);
      }

      function disposerFail(reason) {
          var inspection = new PromiseInspection();
          inspection._settledValue = reason;
          inspection._bitField = 134217728;
          return dispose(this, inspection).thenThrow(reason);
      }

      function Disposer(data, promise) {
          this._data = data;
          this._promise = promise;
      }

      Disposer.prototype.data = function Disposer$data() {
          return this._data;
      };

      Disposer.prototype.promise = function Disposer$promise() {
          return this._promise;
      };

      Disposer.prototype.resource = function Disposer$resource() {
          if (this.promise().isFulfilled()) {
              return this.promise().value();
          }
          return null;
      };

      Disposer.prototype.tryDispose = function(inspection) {
          var resource = this.resource();
          var ret = resource !== null
              ? this.doDispose(resource, inspection) : null;
          this._promise._unsetDisposable();
          this._data = this._promise = null;
          return ret;
      };

      function FunctionDisposer(fn, promise) {
          this.constructor$(fn, promise);
      }
      inherits(FunctionDisposer, Disposer);

      FunctionDisposer.prototype.doDispose = function (resource, inspection) {
          var fn = this.data();
          return fn.call(resource, resource, inspection);
      };

      Promise.using = function Promise$using() {
          var len = arguments.length;
          if (len < 2) return apiRejection(
                          "you must pass at least 2 arguments to Promise.using");
          var fn = arguments[len - 1];
          if (typeof fn !== "function") return apiRejection("fn must be a function");
          len--;
          var resources = new Array(len);
          for (var i = 0; i < len; ++i) {
              var resource = arguments[i];
              if (resource instanceof Disposer) {
                  var disposer = resource;
                  resource = resource.promise();
                  resource._setDisposable(disposer);
              }
              resources[i] = resource;
          }

          return Promise.settle(resources)
              .then(inspectionMapper)
              .spread(fn)
              ._then(disposerSuccess, disposerFail, void 0, resources, void 0);
      };

      Promise.prototype._setDisposable =
      function Promise$_setDisposable(disposer) {
          this._bitField = this._bitField | 262144;
          this._disposer = disposer;
      };

      Promise.prototype._isDisposable = function Promise$_isDisposable() {
          return (this._bitField & 262144) > 0;
      };

      Promise.prototype._getDisposer = function Promise$_getDisposer() {
          return this._disposer;
      };

      Promise.prototype._unsetDisposable = function Promise$_unsetDisposable() {
          this._bitField = this._bitField & (~262144);
          this._disposer = void 0;
      };

      Promise.prototype.disposer = function Promise$disposer(fn) {
          if (typeof fn === "function") {
              return new FunctionDisposer(fn, this);
          }
          throw new TypeError();
      };

  };


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  var isES5 = (function(){
      "use strict";
      return this === void 0;
  })();

  if (isES5) {
      module.exports = {
          freeze: Object.freeze,
          defineProperty: Object.defineProperty,
          keys: Object.keys,
          getPrototypeOf: Object.getPrototypeOf,
          isArray: Array.isArray,
          isES5: isES5
      };
  } else {
      var has = {}.hasOwnProperty;
      var str = {}.toString;
      var proto = {}.constructor.prototype;

      var ObjectKeys = function ObjectKeys(o) {
          var ret = [];
          for (var key in o) {
              if (has.call(o, key)) {
                  ret.push(key);
              }
          }
          return ret;
      }

      var ObjectDefineProperty = function ObjectDefineProperty(o, key, desc) {
          o[key] = desc.value;
          return o;
      }

      var ObjectFreeze = function ObjectFreeze(obj) {
          return obj;
      }

      var ObjectGetPrototypeOf = function ObjectGetPrototypeOf(obj) {
          try {
              return Object(obj).constructor.prototype;
          }
          catch (e) {
              return proto;
          }
      }

      var ArrayIsArray = function ArrayIsArray(obj) {
          try {
              return str.call(obj) === "[object Array]";
          }
          catch(e) {
              return false;
          }
      }

      module.exports = {
          isArray: ArrayIsArray,
          keys: ObjectKeys,
          defineProperty: ObjectDefineProperty,
          freeze: ObjectFreeze,
          getPrototypeOf: ObjectGetPrototypeOf,
          isES5: isES5
      };
  }


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  var schedule;
  var _MutationObserver;
  if (typeof process === "object" && typeof process.version === "string") {
      schedule = function Promise$_Scheduler(fn) {
          process.nextTick(fn);
      };
  }
  else if ((typeof MutationObserver !== "undefined" &&
           (_MutationObserver = MutationObserver)) ||
           (typeof WebKitMutationObserver !== "undefined" &&
           (_MutationObserver = WebKitMutationObserver))) {
      schedule = (function() {
          var div = document.createElement("div");
          var queuedFn = void 0;
          var observer = new _MutationObserver(
              function Promise$_Scheduler() {
                  var fn = queuedFn;
                  queuedFn = void 0;
                  fn();
              }
         );
          observer.observe(div, {
              attributes: true
          });
          return function Promise$_Scheduler(fn) {
              queuedFn = fn;
              div.setAttribute("class", "foo");
          };

      })();
  }
  else if (typeof setTimeout !== "undefined") {
      schedule = function Promise$_Scheduler(fn) {
          setTimeout(fn, 0);
      };
  }
  else throw new Error("no async scheduler available");
  module.exports = schedule;
  
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014 Petka Antonov
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:</p>
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   * 
   */
  "use strict";
  function arrayCopy(src, srcIndex, dst, dstIndex, len) {
      for (var j = 0; j < len; ++j) {
          dst[j + dstIndex] = src[j + srcIndex];
      }
  }

  function Queue(capacity) {
      this._capacity = capacity;
      this._length = 0;
      this._front = 0;
      this._makeCapacity();
  }

  Queue.prototype._willBeOverCapacity =
  function Queue$_willBeOverCapacity(size) {
      return this._capacity < size;
  };

  Queue.prototype._pushOne = function Queue$_pushOne(arg) {
      var length = this.length();
      this._checkCapacity(length + 1);
      var i = (this._front + length) & (this._capacity - 1);
      this[i] = arg;
      this._length = length + 1;
  };

  Queue.prototype.push = function Queue$push(fn, receiver, arg) {
      var length = this.length() + 3;
      if (this._willBeOverCapacity(length)) {
          this._pushOne(fn);
          this._pushOne(receiver);
          this._pushOne(arg);
          return;
      }
      var j = this._front + length - 3;
      this._checkCapacity(length);
      var wrapMask = this._capacity - 1;
      this[(j + 0) & wrapMask] = fn;
      this[(j + 1) & wrapMask] = receiver;
      this[(j + 2) & wrapMask] = arg;
      this._length = length;
  };

  Queue.prototype.shift = function Queue$shift() {
      var front = this._front,
          ret = this[front];

      this[front] = void 0;
      this._front = (front + 1) & (this._capacity - 1);
      this._length--;
      return ret;
  };

  Queue.prototype.length = function Queue$length() {
      return this._length;
  };

  Queue.prototype._makeCapacity = function Queue$_makeCapacity() {
      var len = this._capacity;
      for (var i = 0; i < len; ++i) {
          this[i] = void 0;
      }
  };

  Queue.prototype._checkCapacity = function Queue$_checkCapacity(size) {
      if (this._capacity < size) {
          this._resizeTo(this._capacity << 3);
      }
  };

  Queue.prototype._resizeTo = function Queue$_resizeTo(capacity) {
      var oldFront = this._front;
      var oldCapacity = this._capacity;
      var oldQueue = new Array(oldCapacity);
      var length = this.length();

      arrayCopy(this, 0, oldQueue, 0, oldCapacity);
      this._capacity = capacity;
      this._makeCapacity();
      this._front = 0;
      if (oldFront + length <= oldCapacity) {
          arrayCopy(oldQueue, oldFront, this, 0, length);
      } else {        var lengthBeforeWrapping =
              length - ((oldFront + length) & (oldCapacity - 1));

          arrayCopy(oldQueue, oldFront, this, 0, lengthBeforeWrapping);
          arrayCopy(oldQueue, 0, this, lengthBeforeWrapping,
                      length - lengthBeforeWrapping);
      }
  };

  module.exports = Queue;


/***/ }
/******/ ])
