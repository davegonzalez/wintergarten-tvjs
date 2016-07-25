var gulp       = require('gulp');
var path       = require('path');
var minify     = require('gulp-minify');
var babel      = require('gulp-babel');
var concat     = require('gulp-concat');
var browserify = require('gulp-browserify');
var port       = 9001;
var src        = 'client/js/views';
var dist       = 'client/public';

gulp.task('build', function() {
  gulp.src('views/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(concat('index.js'))
    .pipe(gulp.dest('public'))
});
