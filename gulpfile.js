var fs = require('fs');
var del = require('del');
var path = require('path');
var gulp = require('gulp');
var watch = require('watch');
var flip = require('css-flip');
var map = require('map-stream');
var through = require('through');
var browserSync = require('browser-sync');
var transform = require('vinyl-transform');
var child_process = require('child_process');

var argv = require('yargs').argv;

var sass = require('gulp-sass');
var gutil = require('gulp-util');
var bless = require('gulp-bless');
var insert = require('gulp-insert');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var uglify = require('gulp-uglifyjs');
var webpack = require('gulp-webpack');
var ttf2woff = require('gulp-ttf2woff');
var cssfont64 = require('gulp-cssfont64');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var WebpackDevServer = require('webpack-dev-server');
var dwebpack = require('webpack');

var runSequence = require('run-sequence');

var package = require('./package.json');

var defaultAppName = argv.name ? argv.name : 'app';
var createRTL = argv.rtl ? true : false;
var production = argv.production ? true : false;
var port = argv.port ? argv.port : 8080;
var wport = argv.wport ? argv.wport : 8079;
var whost = argv.whost ? argv.whost : 'localhost';

/* file patterns to watch */
var paths = {
  index: ['src/jsx/'+defaultAppName+'/index.html', 'launch.js', 'service.jsx'],
  l20n: ['src/global/vendor/l20n/*.jsx'],
  jsx: ['src/jsx/*.jsx', 'src/global/requires/*.js', 'src/jsx/**/*.jsx', 'src/jsx/**/**/*.jsx', 'src/jsx/**/**/**/*.jsx', '!src/global/vendor/l20n/*.jsx', '!src/global/vendor/bootstrap/*.jsx'],
  scss: ['public/fonts/web/*.ttf', 'src/sass/*.scss', 'src/sass/**/*.scss', 'src/sass/**/**/*.scss', 'src/sass/**/**/**/*.scss', 'src/sass/**/**/**/**/*.scss', 'src/global/sass/*.scss', 'src/global/sass/**/*.scss', 'src/global/sass/**/**/*.scss', 'src/global/sass/**/**/**/*.scss', 'src/global/sass/**/**/**/**/*.scss'],
  bootstrap: ['src/global/vendor/bootstrap/*.jsx'],
  ttf: ['public/fonts/dropbox/'+defaultAppName+'/*.ttf']
};

var banner = function() {
  return '/*! '+package.name+' - v'+package.version+' - '+gutil.date(new Date(), "yyyy-mm-dd")+
          ' [copyright: '+package.copyright+']'+' */';
};

function logData(data) {
  gutil.log(
    gutil.colors.bold(
      gutil.colors.blue(data)
    )
  );
}

logData('Name : '+defaultAppName);
logData('RTL  : '+ (createRTL ? 'yes':'no'));
logData('PORT : '+ port);
logData('WEBPACK DEV SERVER PORT : '+ wport);
logData('WEBPACK DEV SERVER HOST : '+ whost);
logData('Environment : '+ (production ? 'Production':'Development'));

/* ---------------------------------- */
/* --------- BEGIN APP:SASS --------- */
/* ---------------------------------- */
gulp.task('sass:app', function() {
  return gulp.src('./src/sass/'+defaultAppName+'/*.scss')
          .pipe(sass({
            // sourceComments: 'normal' // uncomment when https://github.com/sass/node-sass/issues/337 is fixed
          }))
          .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
          .pipe(insert.prepend(banner()+'\n'))
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(gulp.dest('public/css/'+defaultAppName+'/raw/ltr'))
          .pipe(browserSync.reload({stream:true}));
});

gulp.task('sass:app:rtl', ['sass:app'], function() {
  if(!createRTL) return null;
  var flipStylesheet = transform(function(filename) {
    return map(function(chunk, next) {
      return next(null, flip(chunk.toString()));
    });
  });
  return gulp.src('public/css/'+defaultAppName+'/raw/ltr/*.css')
          .pipe(flipStylesheet)
          .pipe(gulp.dest('public/css/'+defaultAppName+'/raw/rtl'))
          .pipe(browserSync.reload({stream:true}));
});

gulp.task('minifycss:app', function() {
  return gulp.src(['public/css/'+defaultAppName+'/raw/ltr/*.css'])
          .pipe(minifycss())
          .pipe(gulp.dest('public/css/'+defaultAppName+'/min/ltr'));
});

gulp.task('minifycss:app:rtl', function() {
  if(!createRTL) return null;
  return gulp.src(['public/css/'+defaultAppName+'/raw/rtl/*.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('public/css/'+defaultAppName+'/min/rtl'));
});

gulp.task('bless:app', function() {
  return gulp.src('public/css/'+defaultAppName+'/min/ltr/*.css')
          .pipe(bless())
          .pipe(insert.prepend(banner()+'\n'))
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(gulp.dest('public/css/'+defaultAppName+'/blessed/ltr'));
});

gulp.task('bless:app:rtl', function() {
  if(!createRTL) return null;
  return gulp.src('public/css/'+defaultAppName+'/min/rtl/*.css')
          .pipe(bless())
          .pipe(insert.prepend(banner()+'\n'))
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(gulp.dest('public/css/'+defaultAppName+'/blessed/rtl'));
});
/* -------------------------------- */
/* --------- END APP:SASS --------- */
/* -------------------------------- */

/* ------------------------------- */
/* --------- BEGIN REACT --------- */
/* ------------------------------- */
gulp.task('react:react', function() {
  return gulp.src('prebuild/prebuild.jsx')
          .pipe(webpack({
            cache: true,
            module: {
              loaders: [
                {test: /\.jsx$/, loader: 'transform?0'},
                {test: /\.jsx$/, loader: 'jsx-loader?harmony'}
              ]
            },
            transforms: [
              function(file) {
                var data = '';
                return through(write, end);

                function write(buf) { data += buf }
                function end() {
                  data = data.replace(/\/\*\*\s+@jsx\s+React.DOM\s+\*\//mig, "/** @jsx React.DOM */\nwindow.React = require('react/addons');window.ReactInjection = require('react/lib/ReactInjection');React.mergeProps = require('react/lib/ReactPropTransferer').mergeProps;React.ReactCompositeComponent = require('react/lib/ReactCompositeComponent');React.hyphenateStyleName = require('react/lib/hyphenateStyleName');");
                  this.queue(data);
                  this.queue(null);
                }
              }
            ]
          }))
          .pipe(rename('react.js'))
          .pipe(gulp.dest('public/js/common/react'));
});

gulp.task('uglify:react', function() {
  return gulp.src('public/js/common/react/react.js')
          .pipe(uglify('react.min.js', {
            preserveComments: false,
            compress: {
              warnings: false
            }
          }))
          .pipe(gulp.dest('public/js/common/react'));
});

gulp.task('clean:react', ['react:react'], function(cb) {
  del('prebuild/react', function(err) {
    cb();
  });
});
/* ----------------------------- */
/* --------- END REACT --------- */
/* ----------------------------- */

/* ----------------------------------------- */
/* ------------ BEGIN REACT.L20n ----------- */
/* ----------------------------------------- */
gulp.task('react:react-l20n', function() {
  return gulp.src('./src/global/vendor/l20n/index.jsx')
          .pipe(webpack({
            cache: true,
            module: {
              loaders: [
                {test: /\.jsx$/, loader: 'jsx-loader?harmony'}
              ]
            }
          }))
          .pipe(rename('react-l20n.js'))
          .pipe(gulp.dest('public/js/common/react-l20n'));
});

gulp.task('uglify:react-l20n', function() {
  return gulp.src('public/js/common/react-l20n/react-l20n.js')
          .pipe(uglify('react-l20n.min.js', {
            preserveComments: false,
            compress: {
              warnings: false
            }
          }))
          .pipe(gulp.dest('public/js/common/react-l20n'));
});
/* --------------------------------------- */
/* --------- END REACT.BOOTSTRAP --------- */
/* --------------------------------------- */

/* ----------------------------------------- */
/* --------- BEGIN REACT.BOOTSTRAP --------- */
/* ----------------------------------------- */
gulp.task('react:react-bootstrap', function() {
  return gulp.src('./src/global/vendor/bootstrap/index.jsx')
          .pipe(webpack({
            cache: true,
            module: {
              loaders: [
                {test: /\.jsx$/, loader: 'jsx-loader?harmony'}
              ]
            }
          }))
          .pipe(rename('react-bootstrap.js'))
          .pipe(gulp.dest('public/js/common/react-bootstrap'));
});

gulp.task('uglify:react-bootstrap', function() {
  return gulp.src('public/js/common/react-bootstrap/react-bootstrap.js')
          .pipe(uglify('react-bootstrap.min.js', {
            preserveComments: false,
            compress: {
              warnings: false
            }
          }))
          .pipe(gulp.dest('public/js/common/react-bootstrap'));
});
/* --------------------------------------- */
/* --------- END REACT.BOOTSTRAP --------- */
/* --------------------------------------- */

/* --------------------------------- */
/* ---------- BEGIN APP:JS --------- */
/* --------------------------------- */
gulp.task('react:development', function() {
  var wconfig = {
    cache: true,
    entry: [
      'webpack-dev-server/client?http://'+whost+':'+wport,
      'webpack/hot/only-dev-server',
      './src/jsx/'+defaultAppName+'/main.jsx'
    ],
    output: {
      path: process.cwd(),
      contentBase: 'http://'+whost+':'+wport,
      filename: 'bundle.js',
      publicPath: 'http://'+whost+':'+wport+'/scripts/'
    },
    plugins: [
      new dwebpack.HotModuleReplacementPlugin(),
      new dwebpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        {test: /\.txt$/, loaders: ['raw']},
        {test: /\package\.json$/, loaders: ['json']},
        {test: /[\\\\|\/]src[\\\\|\/]jsx[\\\\|\/](.*?)\.txt$/, loaders: ['raw']},
        {test: /[\\\\|\/]src[\\\\|\/]jsx[\\\\|\/](.*?)\.json$/, loaders: ['json']},
        {test: /[\.jsx|\.js]$/, loaders: ['react-hot', 'jsx-loader?harmony']}
      ]
    },
    externals: {
      'react': 'React'
    }
  };

  var server = new WebpackDevServer(dwebpack(wconfig), {
    publicPath: wconfig.output.publicPath,
    hot: true,
    stats: {
      colors: true,
      progress: true
    }
  });

  server.listen(wport, function (err, result) {
    if (err) {
      console.log(err);
    }

    gutil.log('Webpack Dev Server started. Compiling...');
  });
});

gulp.task('react:app', function() {
  return gulp.src('src/jsx/'+defaultAppName+'/main.jsx')
          .pipe(webpack({
            cache: true,
            module: {
              loaders: [
                  {test: /\.txt$/, loaders: ['raw']},
                  {test: /\package\.json$/, loaders: ['json']},
                  {test: /\/src\/jsx\/(.*?)\.txt$/, loaders: ['raw']},
                  {test: /\/src\/jsx\/(.*?)\.json$/, loaders: ['json']},
                  {test: /[\.jsx|\.js]$/, loaders: ['react-hot', 'jsx-loader?harmony']}
              ]
            },
            externals: {
              'react': 'React'
            }
          }))
          .pipe(rename(defaultAppName+'.js'))
          .pipe(gulp.dest('public/js/'+defaultAppName+'/'));
});

gulp.task('react:concat', ['react:app'], function() {
  return gulp.src(['src/global/requires/*.js', 'public/js/'+defaultAppName+'/'+defaultAppName+'.js'])
          .pipe(concat(''+defaultAppName+'.js'))
          .pipe(insert.prepend('(function() {\n'))
          .pipe(insert.prepend(banner()+'\n'))
          .pipe(insert.append('\n})();'))
          .pipe(gulp.dest('public/js/'+defaultAppName+'/'));
});

gulp.task('uglify:app', ['react:concat'], function() {
  return gulp.src('public/js/'+defaultAppName+'/'+defaultAppName+'.js')
          .pipe(uglify(''+defaultAppName+'.min.js', {
            preserveComments: false,
            compress: {
              warnings: false
            }
          }))
          .pipe(insert.prepend(banner()))
          .pipe(gulp.dest('public/js/'+defaultAppName+'/'));
});
/* ------------------------------- */
/* ---------- END APP:JS --------- */
/* ------------------------------- */

/* --------------------------------- */
/* ------- BEGIN Base64 CSS -------- */
/* --------------------------------- */
gulp.task('base64-css:convert', function() {
  return gulp.src('public/fonts/dropbox/'+defaultAppName+'/*.ttf')
          .pipe(ttf2woff())
          .pipe(cssfont64())
          .pipe(replace('-Regular;', '; font-weight: normal; font-style: normal;'))
          .pipe(replace('-Bold;', '; font-weight: bold; font-style: normal;'))
          .pipe(replace('-Black;', '; font-weight: 800; font-style: normal;'))
          .pipe(replace('-Light;', '; font-weight: 300; font-style: normal;'))
          .pipe(replace('-Hairline;', '; font-weight: 300; font-style: normal;'))
          .pipe(replace('-Italic;', '; font-weight: normal; font-style: italic;'))
          .pipe(replace('-BoldItalic;', '; font-weight: bold; font-style: italic;'))
          .pipe(replace('-BlackItalic;', '; font-weight: 800; font-style: italic;'))
          .pipe(replace('-LightItalic;', '; font-weight: 300; font-style: italic;'))
          .pipe(replace('-HairlineItalic;', '; font-weight: 200; font-style: italic;'))
          .pipe(replace('font-woff', 'x-font-woff'))
          .pipe(gulp.dest('prebuild/css/fonts/'+defaultAppName));
});

gulp.task('base64-css:concat', ['base64-css:convert'], function() {
  return gulp.src(['prebuild/css/fonts/'+defaultAppName+'/*.css'])
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(concat('fonts.css'))
          .pipe(gulp.dest('public/css/fonts/'+defaultAppName))
          .pipe(browserSync.reload({stream:true}));
});

gulp.task('base64-css', ['base64-css:concat'], function(cb) {
  del('prebuild/css', function(err) {
    cb();
  });
});
/* --------------------------------- */
/* --------- END Base64 CSS -------- */
/* --------------------------------- */

/* --------------------------------- */
/* --------- BEGIN EXPRESS --------- */
/* --------------------------------- */
var child = null, browserSyncConnected = false;
gulp.task('express', function() {
  if(child) child.kill();
  child = child_process.spawn(process.execPath, ['./launch.js'], {
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development',
      APP: defaultAppName,
      RTL: createRTL,
      PORT: 3000,
      WPORT: wport,
      WHOST: whost
    },
    stdio: ['ipc']
  });
  child.stdout.on('data', function(data) {
    gutil.log(gutil.colors.bgCyan(gutil.colors.blue(data.toString().trim())));
  });
  child.stderr.on('data', function(data) {
    gutil.log(gutil.colors.bgRed(gutil.colors.white(data.toString().trim())));
    browserSync.notify('ERROR: ' + data.toString().trim(), 5000);
  });
  child.on('message', function(m) {
    if(m === 'CONNECTED' && !browserSyncConnected) {
      gutil.log(gutil.colors.bgMagenta(gutil.colors.white('Server spawned! Starting proxy...')));
      browserSync({
        proxy: 'localhost:3000',
        port: port
      }, function() {
        browserSyncConnected = true;
      });
    } else {
      browserSync.notify(m, 5000);
    }
  });
});

process.on('uncaughtException', function(err) {
  if(child) child.kill();
  throw new Error(err);
});
/* ------------------------------- */
/* --------- END EXPRESS --------- */
/* ------------------------------- */



/* ------------------------------- */
/* -------- BEGIN NOTIFY --------- */
/* ------------------------------- */

gulp.task('notify', function() {
  browserSync.notify('Live reloading ...');
});

/* ------------------------------- */
/* ---------- END NOTIFY --------- */
/* ------------------------------- */


/* ------------------------------------ */
/* -------- BEGIN BROWSERSYNC --------- */
/* ------------------------------------ */

var createMonitor = function() {
  var callback = function(f) {
    browserSync.reload(f);
  };

  return function(p) {
    watch.createMonitor(p, function(m) {
      m.on('created', callback);
      m.on('changed', callback);
      m.on('removed', callback);
    });
  }
}

if(!production) {
  var m = createMonitor();
  m('public/imgs');
  m('public/locales');
}

/* ------------------------------------ */
/* ---------- END BROWSERSYNC --------- */
/* ------------------------------------ */




/* ------------------------------ */
/* --------- GULP TASKS --------- */
/* ------------------------------ */
gulp.task('sass', ['sass:app:rtl']);
gulp.task('react', ['react:react']);
gulp.task('react-l20n', ['react:react-l20n']);
gulp.task('react-bootstrap', ['react:react-bootstrap']);
gulp.task('uglify', ['uglify:react', 'uglify:react-l20n', 'uglify:react-bootstrap', 'uglify:app']);
gulp.task('clean:essentials', ['clean:react']);
gulp.task('minifycss', ['minifycss:app', 'minifycss:app:rtl']);
gulp.task('bless', ['bless:app', 'bless:app:rtl']);

gulp.task('build:css', ['sass']);
gulp.task('build:essentials', ['react', 'react-bootstrap', 'react-l20n']);

gulp.task('build:dev', ['build:css', 'build:essentials']);
gulp.task('build:dist', ['minifycss', 'bless', 'uglify']);

if(production) {
  logData('Building please wait...');
  gulp.task('default', function(callback) {
    runSequence('build:css', 'build:essentials', 'minifycss', 'bless', 'base64-css', 'uglify', function() {
      callback();
      gutil.log(
        gutil.colors.bgMagenta(
          gutil.colors.red(
            gutil.colors.bold('[          COMPLETED BUILD PROCESS          ]')
          )
        )
      );
    });
  });
} else {
  gulp.task('default', function(callback) {
    runSequence('react:development', 'build:css', 'build:essentials', 'base64-css', ['express', 'watch'], callback);
  });
}

/*BEGIN: ALIASES FOR CERTAIN TASKS (for Watch)*/
gulp.task('react-l20n:watch', ['react-l20n'], ready);
gulp.task('build:css:watch', ['build:css'], ready);
gulp.task('express:watch', ['express'], ready);
gulp.task('react-bootstrap:watch', ['react-bootstrap'], ready);
gulp.task('rebuild:css', ['build:css'], ready);
gulp.task('base64-css:watch', ['base64-css'], ready);
/*END: ALIASES*/

gulp.task('watch', function() {
  gulp.watch(paths.index, ['express:watch']);
  gulp.watch(paths.l20n, ['react-l20n:watch']);
  gulp.watch(paths.scss, ['rebuild:css']);
  gulp.watch(paths.bootstrap, ['react-bootstrap:watch']);
  gulp.watch(paths.ttf, ['base64-css:watch'])
  gulp.watch(paths.jsx.concat(paths.scss), ['notify']);
});

function ready() {
  gutil.log(
    gutil.colors.bgMagenta(
      gutil.colors.white(
        gutil.colors.bold('[          STATUS: READY          ]')
      )
    )
  );
}
