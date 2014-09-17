var gulp = require('gulp'),
  GLOBVARS = require('../vars'),
  plumber = require('gulp-plumber'),
  jade = require('gulp-jade'),
  size = require('gulp-size');

gulp.task('dev-indexHTML', function () {

  gulp.src('src/index.jade')
    .pipe(plumber())
    .pipe(jade({pretty: false}))
    .pipe(size())
    .pipe(gulp.dest('dist'));
});

gulp.task('dev-indexHTML', indexCompil('build'));
gulp.task('deploy-indexHTML', indexCompil('prod'));

function indexCompil(env) {
  return function () {
    var isDev = env == 'build';

    return gulp.src(GLOBVARS.src.basedir+'index.jade')
      .pipe(plumber())
      .pipe(jade({pretty: isDev}))
      .pipe(size({showFiles:true}))
      .pipe(gulp.dest(GLOBVARS[env].basedir));
  }
}