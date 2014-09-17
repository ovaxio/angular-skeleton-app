var gulp = require('gulp'),
  GLOBVARS = require('../vars'),
  gulpBowerFiles = require('main-bower-files'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  size = require('gulp-size'),
  sourcemaps = require('gulp-sourcemaps'),
  gulpif = require('gulp-if');

gulp.task('dev-bower', bowerBuild('build'));
gulp.task('deploy-bower', bowerBuild('prod'));

function bowerBuild(env) {
  return function () {
    var isDev = env == 'build',
      jsFiles, cssFiles, otherFiles,
      base_dir = 'bower_components';
      bowerEnv = isDev ? 'development' : 'production';

    cssFiles = gulpBowerFiles({filter: /(\.css$)/i, env: bowerEnv});
    jsFiles = gulpBowerFiles({filter: /(\.js$)/i, env: bowerEnv});
    otherFiles = gulpBowerFiles({filter: /.*\.(?!css|js)\w*$/i, env: bowerEnv});

    // JAVASCRIPT files
    if (jsFiles.length > 0) {
      gulp.src(jsFiles, {base: base_dir})
        .pipe(gulpif(isDev, sourcemaps.init()))
        .pipe(concat('vendor.min.js'))
        .pipe(gulpif(!isDev, uglify()))
        .pipe(size({showFiles: true}))
        .pipe(gulpif(isDev, sourcemaps.write('./maps')))
        .pipe(gulp.dest(GLOBVARS[env].js));
    }

    // CSS files
    if (cssFiles.length > 0) {
      gulp.src(cssFiles, {base: base_dir})
        .pipe(gulpif(isDev, sourcemaps.init()))
        .pipe(concat('vendor.min.css'))
        .pipe(size({showFiles: true}))
        .pipe(gulpif(isDev, sourcemaps.write('./maps')))
        .pipe(gulp.dest(GLOBVARS[env].css));
    }

    // CSS files
    if (otherFiles.length > 0) {
      gulp.src(otherFiles, {base: base_dir})
        .pipe(size({showFiles: true}))
        .pipe(gulp.dest(GLOBVARS[env].assets));
    }
  }
}