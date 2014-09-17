var gulp = require('gulp'),
  GLOBVARS = require('../vars'),
  plumber = require('gulp-plumber'),
  jade = require('gulp-jade'),
  rename = require('gulp-rename'),
  size = require('gulp-size'),
  jadeInheritance = require('gulp-jade-inheritance');

gulp.task('dev-templates', jadeCompil('build'));
gulp.task('deploy-templates', jadeCompil('prod'));

function jadeCompil(env) {
  return function () {
    var isDev = env == 'build';

    return gulp.src(GLOBVARS.src.templates)
      .pipe(plumber())
      .pipe(jade({pretty: isDev}))
      .pipe(size({title: 'templates'}))
      .pipe(rename(function (path) {
        path.dirname = path.dirname.split('/');
        path.dirname.pop();
        path.dirname = path.dirname.join('/');
      }))
      .pipe(gulp.dest(GLOBVARS[env].templates));
  }
}