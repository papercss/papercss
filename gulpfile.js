const gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('less', function() {
  gulp.src('src/styles.less')
    .pipe(less())
    .pipe(cleanCSS({format: 'beautify'}))
    .pipe(rename('paper.css'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('src/*.less', ['less']);
});

gulp.task('minify-css', () => {
  gulp.src('dist/paper.css')
    .pipe(cleanCSS())
    .pipe(rename('paper.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('components', () => {
  gulp.src('src/*.less')
    .pipe(less())
    .pipe(cleanCSS({format: 'beautify'}))
    .pipe(gulp.dest('dist/components'));
});

gulp.task('default', ['less', 'webserver', 'watch']);
gulp.task('build', ['components', 'less', 'minify-css']);
