var changed = require('gulp-changed'),
  gulp = require('gulp'),
  imagemin = require('gulp-imagemin');

gulp.task('dev-images', function() {
  var dest = './dist/img';

  return gulp.src('./src/assets/img/**')
    .pipe(changed(dest))
    .pipe(imagemin())
    .pipe(gulp.dest(dest));
});