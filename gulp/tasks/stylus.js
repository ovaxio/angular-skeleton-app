var gulp = require('gulp'),
  GLOBVARS = require('../vars'),
  plumber = require('gulp-plumber'),
  stylus = require('gulp-stylus'),
  concat = require('gulp-concat'),
  nib = require('nib'),
  size = require('gulp-size'),
  sourcemaps = require('gulp-sourcemaps'),
  gulpif = require('gulp-if');

gulp.task('dev-stylus', stylusCompil('build'));
gulp.task('deploy-stylus', stylusCompil('prod'));

function stylusCompil(env) {
  return function () {
    var isDev = env == 'build';

    return gulp.src(GLOBVARS.src.stylus)
      .pipe(plumber())
      .pipe(gulpif(isDev, sourcemaps.init()))
      .pipe(stylus({use:[nib()],compress: !isDev}))
      .pipe(concat('app.min.css'))
      .pipe(size({showFiles: true}))
      .pipe(gulpif(isDev, sourcemaps.write('./maps')))
      .pipe(gulp.dest(GLOBVARS[env].css));
  }
}