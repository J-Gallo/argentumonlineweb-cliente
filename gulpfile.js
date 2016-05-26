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

gulp.task('copyAssets', ['delete'], function() {
    return gulp.src('./src/assets/**/**/*')
      .pipe(gulp.dest('dist/assets'));
});

gulp.task('copyFonts', ['delete'], function() {
  return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copyGraficos', ['delete'], function() {
  return gulp.src('./src/graficos/*')
    .pipe(gulp.dest('dist/graficos'));
});

gulp.task('copyGraphics', ['delete'], function() {
  return gulp.src('./src/graphics/*')
    .pipe(gulp.dest('dist/graphics'));
});

gulp.task('copyIcons', ['delete'], function() {
  return gulp.src('./src/icon/*')
    .pipe(gulp.dest('dist/icon'));
});

gulp.task('copyImg', ['delete'], function() {
  return gulp.src('./src/img/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('copyInit', ['delete'], function() {
  return gulp.src('./src/init/*')
    .pipe(gulp.dest('dist/init'));
});

gulp.task('copyMapas', ['delete'], function() {
  return gulp.src('./src/mapas/*')
    .pipe(gulp.dest('dist/mapas'));
});

gulp.task('copyMaps', ['delete'], function() {
  return gulp.src('./src/Maps/*')
    .pipe(gulp.dest('dist/Maps'));
});

gulp.task('css', function () {
  return gulp.src('./src/stylus/*.styl')
    .pipe(stylus({
      compress: true,
      use: nib()
    }))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['delete', 'bundleJs', 'copyAssets', 'copyFonts', 'copyGraficos', 'copyGraphics', 'copyIcons', 'copyImg', 'copyInit', 'copyMapas', 'copyMaps', 'css']);

gulp.task('default', ['build','server']);
