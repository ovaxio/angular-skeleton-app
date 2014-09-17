var gulp = require('gulp'),
  GLOBVARS = require('../vars'),
  plumber = require('gulp-plumber'),
  coffee = require('gulp-coffee'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  size = require('gulp-size'),
  sourcemaps = require('gulp-sourcemaps'),
  gulpif = require('gulp-if');

gulp.task('dev-coffee', coffeeCompil('build'));
gulp.task('deploy-coffee', coffeeCompil('prod'));

function coffeeCompil(env) {
  return function () {
    var isDev = env == 'build';

    return gulp.src(GLOBVARS.src.coffee)
      .pipe(plumber())
      .pipe(gulpif(isDev, sourcemaps.init()))
      .pipe(coffee({bare: true}))
      .pipe(concat('app.min.js'))
      .pipe(gulpif(!isDev, uglify()))
      .pipe(size({showFiles: true}))
      .pipe(gulpif(isDev, sourcemaps.write('./maps')))
      .pipe(gulp.dest(GLOBVARS[env].js));
  }
}