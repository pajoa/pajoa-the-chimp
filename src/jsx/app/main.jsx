'use strict';

/* Initialize Locales */
l20n.initializeLocales('app', {
  'locales': ['en-US'],
  'default': 'en-US'
});

/* Initializing touch events */
React.initializeTouchEvents(true);

require('./preloader.jsx');

var routes = require('./routes.jsx');

Pace.once('hide', function() {
  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
});

var InitializeRouter = function(View) {
  // cleanup
  if(window.Rubix) window.Rubix.Cleanup();
  Pace.restart();
  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
    window.ga('send', 'pageview', {
     'page': window.location.pathname + window.location.search  + window.location.hash
    });
  }

  React.render(<View />, document.getElementById('app-container'), function() {
    // l20n initialized only after everything is rendered/updated

    l20n.ready();
    setTimeout(function() {
      $('body').removeClass('fade-out');
    }, 500);
  });
};

if(Modernizr.history)
  ReactRouter.run(routes, ReactRouter.HistoryLocation, InitializeRouter);
else
  ReactRouter.run(routes, InitializeRouter);
