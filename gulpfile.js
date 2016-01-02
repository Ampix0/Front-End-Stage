var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');


gulp.task('watch', function () {
    gulp.watch('app/js/dev/*.js', ['scripts']);
    gulp.watch('app/scss/*.scss', ['styles']);
});

gulp.task('browser-sync', function () {
    browserSync.init(["app/css/*.css", "app/js/*.js", "app/*.html"], {
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('scripts', function () {
    gulp.src('app/js/dev/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js/dev/min'));
})

gulp.task('styles', function () {
    gulp.src('app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});

gulp.task('default', ['scripts', 'styles', 'watch', 'browser-sync']);
