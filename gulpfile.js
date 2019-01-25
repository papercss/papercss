'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      rename = require('gulp-rename'),
      exec = require('child_process').execFile,
      optional = require('optional'),
      hugo = optional('hugo-bin'),
      gulpStylelint = optional('gulp-stylelint'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({format: 'beautify'}))
    .pipe(rename('paper.css'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('docs/static/assets'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', gulp.series('sass'));
});

gulp.task('hugo-server', function (cb) {
  const flags = ['server', '--source=docs', '--disableFastRender'];
  let hugo_process = exec(hugo, flags, function (err, stdout, stderr) {
    console.log(stderr);
    return err ? cb(err) : cb();
  });

  hugo_process.stdout.pipe(process.stdout);
  return hugo_process;
})

gulp.task('hugo-build', function (cb) {
  const flags = ['--source=docs'];
  let hugo_process = exec(hugo, flags, function (err, stdout, stderr) {
    console.log(stderr);
    return err ? cb(err) : cb();
  });

  hugo_process.stdout.pipe(process.stdout);
  return hugo_process;
})

gulp.task('minify-css', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('paper.min.css'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('docs/static/assets'));
});

gulp.task('lint-css', function() {
  return gulp.src('src/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'string', console: true },
      ],
    }));
})

gulp.task('default', gulp.series('sass', 'minify-css', 'hugo-build'));
gulp.task('build', gulp.series('sass', 'minify-css', 'hugo-build'));
gulp.task('postinstall', gulp.series('sass', 'minify-css'));
