var gulp = require('gulp')
  plumber = require('gulp-plumber'),
  jade = require('gulp-jade'),
  size = require('gulp-size');

gulp.task('indexHTML', function () {

  gulp.src('src/index.jade')
    .pipe(plumber())
    .pipe(jade({pretty: false}))
    .pipe(size())
    .pipe(gulp.dest('dist'));
});