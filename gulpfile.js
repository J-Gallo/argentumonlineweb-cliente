var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    del         = require('del'); // rm -rf
    uglify      = require('gulp-uglify'),
    nodemon     = require('gulp-nodemon'),
    nib         = require('nib');
    stylus      = require('gulp-stylus');

gulp.task('delete', function() {
  return del(['dist']);
});

gulp.task('server', function () {
    nodemon({
        watch: './',
        ext: 'js css hbs',
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('bundleJs', ['delete'], function () {
  return gulp.src('./src/js/*')
    .pipe(concat('aoweb.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// gulp.task('copyImages', ['delete'], function() {
//     return gulp.src('./src/img/*')
//       .pipe(gulp.dest('dist/images'));
// });
//
// gulp.task('copyFonts', ['delete'], function() {
//   return gulp.src('./src/fonts/*')
//     .pipe(gulp.dest('dist/fonts'));
// });

gulp.task('css', function () {
  return gulp.src('./src/stylus/*.styl')
    .pipe(stylus({
      compress: true,
      use: nib()
    }))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['delete', 'bundleJs', 'css']);
// gulp.task('build', ['delete', 'copyImages', 'copyFonts', 'bundleJs', 'css']);

gulp.task('default', ['build','server']);
