var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('process-scripts', function() {
	return gulp.src('src/scripts/app/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dest/scripts/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('scripts/dest'))
});

gulp.task('watch', function() {
  gulp.watch('src/scripts/*.js', ['process-scripts'])
});