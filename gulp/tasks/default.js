var gulp = require('gulp');

gulp.task('default', ["dev-build", "watch"], function (){
  gulp.start('server'); // start the server after the build and watch (callback in dev-build)
});