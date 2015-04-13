var gulp        = require("gulp"),
    jest        = require("gulp-jest"),
    source      = require('vinyl-source-stream'),
    browserify  = require('browserify'),
    watchify    = require('watchify'),
    reactify    = require('reactify');
    require("harmonize")();

var paths = {
   scripts: "src/**/*.js",
   tests: "__tests__"
};

gulp.task("jest", function () {
    return gulp.src(paths.tests).pipe(jest({
        scriptPreprocessor: "preprocessor.js",
        unmockedModulePathPatterns: [
            "../node_modules/react"
        ],
        testPathIgnorePatterns: [
            "node_modules",
            "spec/support"
        ],
        moduleFileExtensions: [
            "js",
            "json",
            "react"
        ]
    }));
});

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./src/js/TopLevel.js'],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/assets/js'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task("watch", function() {
  gulp.watch("src/**/*.js", ["jest"]);
  gulp.watch("__tests__/*.js", ["jest"]);
});

gulp.task("default", ["browserify"]);