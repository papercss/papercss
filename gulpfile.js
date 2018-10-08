'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      rename = require('gulp-rename'),
      exec = require('child_process').execFile,
      optional = require('optional'),
      hugo = optional('hugo-bin'),
      gulpStylelint = optional('gulp-stylelint');

gulp.task('sass', function() {
  gulp.src('src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS({format: 'beautify'}))
    .pipe(rename('paper.css'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('docs/static/assets'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('hugo-server', function (cb) {
  let hugo_process = exec(
    hugo, ['server', '--source=docs', '--disableFastRender'],
    function (err, stdout, stderr) {
      console.log(stderr);
      return err ? cb(err) : cb();
    }
  );
  hugo_process.stdout.pipe(process.stdout);
  return hugo_process;
})

gulp.task('hugo-build', function (cb) {
  let hugo_process = exec(
    hugo, ['--source=docs'],
    function (err, stdout, stderr) {
      console.log(stderr);
      return err ? cb(err) : cb();
    }
  );
  hugo_process.stdout.pipe(process.stdout);
  return hugo_process;
})

gulp.task('minify-css', () => {
  return gulp.src('src/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(rename('paper.min.css'))
  .pipe(gulp.dest('dist'))
  .pipe(gulp.dest('docs/static/assets'));
});

gulp.task('lint-css', function() {
  return gulp.src('src/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
})

gulp.task('default', ['sass','watch','hugo-server']);
gulp.task('build', ['sass','minify-css','hugo-build']);
gulp.task('postinstall', ['sass','minify-css']);
