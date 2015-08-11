var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    eslint = require('gulp-eslint'),
    minifyCSS = require('gulp-minify-css');;

gulp.task('default', function() {
    gulp.start('dep-build');
    gulp.start('app-build');
    gulp.start('css-build');
    gulp.start('fonts-build');
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
        .pipe(gulp.dest('public/build/scripts'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/build/scripts'));
});

gulp.task('fonts-build', function() {
    return gulp.src(['libs/bootstrap-css-only/fonts/*'])
                .pipe(gulp.dest('public/build/fonts'))
});

gulp.task('dep-build', function() {
    return gulp.src(['libs/lodash/lodash.min.js','libs/angular/angular.min.js',
                                'libs/angular-ui-bootstrap-bower/ui-bootstrap.min.js',
                                'libs/angular-route/angular-route.min.js',
                                'libs/angular-sanitize/angular-sanitize.min.js',
                                'libs/angular-animate/angular-animate.min.js',
                                'libs/restangular/dist/restangular.min.js',
                                'libs/angular-loading-bar/build/loading-bar.min.js'])
        .pipe(concat('dep.min.js'))
        .pipe(gulp.dest('public/build/scripts'));
});

gulp.task('css-build', function() {
    return gulp.src(['libs/angular-loading-bar/build/loading-bar.css',
                    'libs/bootstrap-css-only/css/bootstrap.css'])
        .pipe(concat('app.css'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/build/styles'));
});

gulp.task('watch', function() {
  gulp.watch('scripts/app/*.js', ['app-build']);
});