var gulp = require('gulp'),
  rimraf = require('rimraf'),
  GLOBVARS = require('../vars');

gulp.task("clean", function (cb) {
  rimraf(GLOBVARS.prod.basedir, cb);
});