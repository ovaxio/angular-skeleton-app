var gulp = require('gulp'),
  GLOBVARS = require('../vars'),
  webserver = require('gulp-webserver');


// gulp.task('start-server',['server']);

gulp.task('server', function () {
  return gulp.src(GLOBVARS.build.basedir)
    .pipe(webserver({
      port: 5000,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});