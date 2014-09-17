var gulp = require('gulp'),
  dependencies = ["bower", "stylus", "coffee", "templates", "indexHTML"],
  dependenciesDev,dependenciesProd;

dependenciesDev = dependencies.map(function(value){
  return 'dev-'+value;
});

dependenciesProd = dependencies.map(function(value){
  return 'deploy-'+value;
});

gulp.task('dev-build', dependenciesDev);
gulp.task('deploy-build', dependenciesProd);

gulp.task('deploy',['clean'], function () {
  gulp.start('deploy-build');
});
