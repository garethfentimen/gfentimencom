var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css');

function app() {
    return gulp.src(['scripts/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/build/scripts'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/build/scripts'));
};

function appProd() {
    return gulp.src(['scripts/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/build/scripts'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/build/scripts'));
};

function css() {
    return gulp.src(['node_modules/angular-loading-bar/build/loading-bar.css',
                    'node_modules/bootstrap-css-only/css/bootstrap.css',
                    'styles/*.css'])
        .pipe(concat('app.css'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/build/styles'));
};

function fonts() {
    return gulp.src('node_modules/bootstrap-css-only/fonts/*')
                .pipe(gulp.dest('public/build/fonts'))
}

function dep() {
    return gulp.src([
            'node_modules/angular/angular.js',
            'node_modules/lodash/index.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/restangular/dist/restangular.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-sanitize/angular-sanitize.js',
            'node_modules/angular-loading-bar/build/loading-bar.js'
        ])
        .pipe(concat('dep.min.js'))
        .pipe(gulp.dest('public/build/scripts'));
};

function depsMin() {
    return gulp.src([
            'node_modules/angular/angular.min.js',
            'node_modules/lodash/index.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/restangular/dist/restangular.min.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            'node_modules/angular-route/angular-route.min.js',
            'node_modules/angular-sanitize/angular-sanitize.min.js',
            'node_modules/angular-loading-bar/build/loading-bar.min.js'
        ])
        .pipe(concat('dep.min.js'))
        .pipe(gulp.dest('public/build/scripts'));
};

exports.default = gulp.series(dep, app, css, fonts);

exports.prod = gulp.series(depsMin, app, css, fonts);

// gulp.task('watch', function() {
//   var watcher = gulp.watch('scripts/app/*.js', ['app']);
//   watcher.on('change', function(event) {
//     console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//   });
// });