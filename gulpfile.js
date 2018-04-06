const gulp = require('gulp'),
    sass = require('gulp-sass'),
    wait = require('gulp-wait');

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(wait(150))
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);