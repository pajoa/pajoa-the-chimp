var fs = require('fs');
var path = require('path');
var gulp = require('gulp');

var argv = require('yargs').argv;

var gutil = require('gulp-util');

var runSequence = require('run-sequence');

if(!argv.name) {
  gutil.log(gutil.colors.bgRed(gutil.colors.white('Should provide an app name for your project.')));
  process.exit(-1);
}

if(fs.existsSync(path.join(process.cwd(), 'src', 'jsx', argv.name))) {
  gutil.log(gutil.colors.bgRed(gutil.colors.white('ABORTING: App ['+argv.name+'] already exists. Please remove all references to the app from src/jsx and src/sass folder before running this command.')));
  process.exit(-1);
}

function logData(data) {
  gutil.log(
    gutil.colors.blue(
      gutil.colors.bold(data)
    )
  );
}

gulp.task('cpy-jsx', function() {
  gulp.src('prebuild/scaffold/jsx/**/**/**').pipe(gulp.dest('src/jsx/'+argv.name));
});

gulp.task('cpy-sass', function() {
  gulp.src('prebuild/scaffold/sass/**/**/**').pipe(gulp.dest('src/sass/'+argv.name));
});

gulp.task('create-locale-dir', function() {
  gulp.src('prebuild/scaffold/public/**').pipe(gulp.dest('public/locales/'+argv.name));
});


gulp.task('create-fonts-dropbox', function() {
  gulp.src('prebuild/scaffold/public/**').pipe(gulp.dest('public/fonts/dropbox/'+argv.name));
});

logData('Name : '+argv.name);
logData('Scaffolding please wait...');
gulp.task('default', function(callback) {
  runSequence('cpy-jsx', 'cpy-sass', 'create-locale-dir', 'create-fonts-dropbox', function() {
    callback();
    gutil.log(
      gutil.colors.bgMagenta(
        gutil.colors.red(
          gutil.colors.bold('[          COMPLETED SCAFFOLDING          ]')
        )
      )
    );
  });
});
