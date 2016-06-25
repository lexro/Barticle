var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');

// Build the project using ember-cli
gulp.task('build', shell.task([
  'ember build --environment production'
]));

gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
