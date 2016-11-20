var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    eslint = require('gulp-eslint'),
    minifyCSS = require('gulp-minify-css');;

gulp.task('default', ['dep','app','css','fonts']);

gulp.task('dev', ['dep','app','css','fonts']);

gulp.task('lint', function () {
    return gulp.src(['js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('app', ['lint'], function() {
    return gulp.src(['scripts/app/*.js', 'scripts/queries/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/build/scripts'))
        //.pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/build/scripts'));
});

gulp.task('fonts', function() {
    return gulp.src(['libs/bootstrap-css-only/fonts/*'])
                .pipe(gulp.dest('public/build/fonts'))
});

gulp.task('dep', function() {
    return gulp.src(['libs/lodash/dist/lodash.js','libs/angular/angular.js',
                                'libs/angular-ui-bootstrap-bower/ui-bootstrap.js',
                                'libs/angular-route/angular-route.js',
                                'libs/angular-sanitize/angular-sanitize.js',
                                'libs/angular-animate/angular-animate.js',
                                'libs/restangular/dist/restangular.js',
                                'libs/angular-loading-bar/build/loading-bar.js'])
        //.pipe(uglify())
        .pipe(concat('dep.min.js'))
        .pipe(gulp.dest('public/build/scripts'));
});

gulp.task('css', function() {
    return gulp.src(['libs/angular-loading-bar/build/loading-bar.css',
                    'libs/bootstrap-css-only/css/bootstrap.css',
                    'styles/*.css'])
        .pipe(concat('app.css'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/build/styles'));
});

gulp.task('watch', function() {
  gulp.watch('scripts/app/*.js', ['app']);
  gulp.watch('styles/*.css', ['css']);
});