var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    eslint = require('gulp-eslint');

gulp.task('default', function() {
    gulp.start('app-build');
    //gulp.start('watch');
});

gulp.task('lint', function () {
    return gulp.src(['js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('app-build', ['lint'], function() {
    return gulp.src('scripts/app/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('scripts/build'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('scripts/build'));
});

gulp.task('watch', function() {
  gulp.watch('scripts/app/*.js', ['app-build']);
});