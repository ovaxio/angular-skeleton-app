var gulp = require('gulp');

gulp.task("watch", function () {
  gulp.watch('src/stylus/**', ['stylus']);
  gulp.watch('src/app/**/*.jade', ['templates']);
  gulp.watch('src/index.jade', ['indexHTML']);
  gulp.watch('src/app/**/*.coffee', ['coffee']);
  gulp.watch('bower.json', ['bower']);
});