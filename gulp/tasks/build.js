var gulp = require('gulp');

gulp.task('build', ["bower", "stylus", "coffee", "templates", "indexHTML"]);