var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// jshint = require('gulp-jshint'),

gulp.task('default', function() {
    gulp.start('app-build');
    //gulp.start('watch');
});

gulp.task('app-build', function() {
    return gulp.src('scripts/app/*.js')
        // .pipe(jshint())
        // .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('scripts/build'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('scripts/build'));
});

gulp.task('app-build-live', function() {
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