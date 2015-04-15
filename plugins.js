var gulp = require('gulp');

var gutil = require('gulp-util');
var uglify = require('gulp-uglifyjs');

var runSequence = require('run-sequence');

function logData(data) {
  gutil.log(
    gutil.colors.blue(
      gutil.colors.bold(data)
    )
  );
}

gulp.task('minifyplugins', function() {
  gulp.src([
    'public/js/vendor/pace/pace.js',
    'public/js/polyfills/polyfills.js',
    'public/js/polyfills/html5shiv.js',
    'public/js/polyfills/modernizr.min.js',
    'public/js/vendor/codemirror/lib/codemirror.js',
    'public/js/vendor/codemirror/mode/javascript/javascript.js',
    'public/js/vendor/eventemitter2/eventemitter2.min.js',
    'public/js/vendor/jquery/jquery.js',
    'public/js/vendor/jquery-ui/jquery-ui.js',
    'public/js/vendor/bootstrap/bootstrap.js',
    'public/js/vendor/p-scrollbar/min/perfect-scrollbar.min.js',
    'public/js/vendor/ion.tabs/ion.tabs.min.js',
    'public/js/vendor/ion.rangeSlider/ion.rangeSlider.min.js',
    'public/js/vendor/bootstrap-slider/bootstrap-slider.js',
    'public/js/vendor/sparklines/sparklines.js',
    'public/js/vendor/jquery.knob/jquery.knob.js',
    'public/js/vendor/moment/moment.js',
    'public/js/vendor/vex/vex.min.js',
    'public/js/vendor/messenger/messenger.min.js',
    'public/js/vendor/select2/select2.js',
    'public/js/vendor/xeditable/xeditable.js',
    'public/js/vendor/typeahead/typeahead.js',
    'public/js/vendor/jquery-steps/jquery-steps.js',
    'public/js/vendor/jquery-validate/jquery-validate.js',
    'public/js/vendor/tablesaw/tablesaw.js',
    'public/js/vendor/timeline/timeline.js',
    'public/js/vendor/datatables/datatables.js',
    'public/js/vendor/fullcalendar/fullcalendar.js',
    'public/js/vendor/nestable/nestable.js',
    'public/js/vendor/dropzone/dropzone.js',
    'public/js/vendor/jcrop/color.js',
    'public/js/vendor/jcrop/jcrop.js',
    'public/js/vendor/bootstrap-datetimepicker/bootstrap-datetimepicker.js',
    'public/js/vendor/blueimp-gallery/blueimp-gallery.js',
    'public/js/vendor/chartjs/chartjs.js',
    'public/js/vendor/c3js/c3js.js',
    'public/js/vendor/leaflet/leaflet.js',
    'public/js/vendor/l20n/l20n.js',
    'public/js/vendor/trumbowyg/trumbowyg.js',
    'public/js/common/react/react.js',
    'public/js/common/react-router/react-router.js',
    'public/js/common/react-bootstrap/react-bootstrap.js',
    'public/js/common/react-l20n/react-l20n.js',
    'public/js/common/react-responsive/react-responsive.js',
    'public/js/vendor/d3/d3.js',
    'public/js/common/rubix/rubix.js',
    'public/js/vendor/raphael/raphael.js',
    'public/js/vendor/morris/morris.js',
    'public/js/vendor/prism/prism.js',
    'public/js/vendor/switchery/switchery.js',
    'public/js/vendor/holder/holder.js',
    'public/js/common/react/showdown.js',
  ]).pipe(uglify('external.min.js', {
      preserveComments: false,
      compress: {
        warnings: false
      }
    })).pipe(gulp.dest('public/js/minified'));
});

logData('Minifying plugins. Please wait...');
gulp.task('default', function(callback) {
  runSequence('minifyplugins', function() {
    callback();
    gutil.log(
      gutil.colors.bgMagenta(
        gutil.colors.red(
          gutil.colors.bold('[          COMPLETED MINIFICATION          ]')
        )
      )
    );
  });
});
