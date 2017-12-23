const gulp = require('gulp'),
      connect = require('gulp-connect'),
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      rename = require('gulp-rename');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function() {
  gulp.src('src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS({format: 'beautify'}))
    .pipe(rename('paper.css'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('minify-css', () => {
  gulp.src('dist/paper.css')
    .pipe(cleanCSS())
    .pipe(rename('paper.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'webserver', 'watch']);
gulp.task('build', ['sass', 'minify-css']);
