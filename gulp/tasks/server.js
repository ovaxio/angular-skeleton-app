var gulp = require('gulp'),
  webserver = require('gulp-webserver');


gulp.task('server', function () {
  gulp.src('./dist')
  .pipe(webserver({
    port: 5000,
    livereload: true,
    directoryListing: false,
    open: true
  }));
});