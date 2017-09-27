var gulp = require('gulp'),
  	connect = require('gulp-connect'),
  	less = require('gulp-less');
 
gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
 
gulp.task('less', function() {
  gulp.src('src/styles.less')
    .pipe(less())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function() {
  gulp.watch('src/*.less', ['less']);
})
 
gulp.task('default', ['less', 'webserver', 'watch']);