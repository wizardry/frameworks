
var gulp = require('gulp');
var connect = require('gulp-connect');
var gulpWebpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var named = require('vinyl-named');
gulp.task('gulpWebpack', function () {
    gulp.src(['./src/js/**/*.js'])
    .pipe(named(function(file){ return file.relative.replace(/\.[^\.]+$/,''); }))
    .pipe(gulpWebpack(webpackConfig))
    .pipe(gulp.dest('./build/js'));
});

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var gutil = require('gulp-util');
gulp.task('webpackDevServer',function(){
  new webpackDevServer(webpack(webpackConfig),{
    contentBase: './build',
    publicPath:'/js/',
    cache:false,
    hot:true,
  }).listen(8080)
});

var jade = require('gulp-jade');
 
gulp.task('jade', function() {
 
  gulp.src('./src/**/*.jade')
    .pipe(jade({
      pretty:false
    }))
    .pipe(gulp.dest('./build/'));
});
// copy image files
gulp.task('copy:_img', function(){
  g.src('./src/img/**/')
    .pipe(gulp.dest('./build/img/'));
});

var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.jade',['jade']);
    gulp.watch('./src/css/**/*.scss',['sass']);
    gulp.watch('./src/**/*.js', ['gulpWebpack']);
});
 
gulp.task('default', ['webpackDevServer','watch']);
gulp.task('build',['sass','copy:_img','jade','gulpWebpack']);