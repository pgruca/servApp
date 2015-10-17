var gulp = require('gulp'),
    sass = require('gulp-sass'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    webserver = require('gulp-webserver');

var paths = {
    indexPage: ['./src/index.html'],
    htmlSrc: ['./src/**/*.html', '!./src/index.html'],
    styleSrc: ['./src/**/*.scss'],
    styleDist: ['./dist/servApp/**/*.css'],
    jsSrc: ['./src/**/*.js'],
    jsDist: ['./dist/servApp/**/*.js']
};

gulp.task('default', ['copyHtml', 'compileScss', 'copyJs', 'injectFiles']);

gulp.task('watch', function () {
    gulp.watch(paths.htmlSrc, ['copyHtml']);
    gulp.watch(paths.styleSrc, ['compileScss']);
    gulp.watch(paths.jsSrc, ['copyJs']);
    gulp.watch(paths.indexPage, ['injectFiles']);
});

gulp.task('webserver', function() {
    gulp.src('./dist/')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 3000
        }));
});

gulp.task('injectFiles', function () {
    return gulp.src(paths.indexPage)
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', ignorePath: '/dist', addRootSlash: false}))
        .pipe(inject(gulp.src(paths.jsDist, {read: false}), {name: 'app', ignorePath: '/dist', addRootSlash: false}))
        .pipe(inject(gulp.src(paths.styleDist, {read: false}), {name: 'app', ignorePath: '/dist', addRootSlash: false}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copyHtml', function () {
    return gulp.src(paths.htmlSrc).pipe(gulp.dest('./dist'));
});

gulp.task('copyJs', function () {
    return gulp.src(paths.jsSrc).pipe(gulp.dest('./dist'));
});

gulp.task('compileScss', function () {
    return gulp.src(paths.styleSrc).pipe(sass()).pipe(gulp.dest('./dist'));
});
