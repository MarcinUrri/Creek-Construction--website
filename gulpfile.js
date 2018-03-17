const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require ('gulp-concat');
const imagemin = require('gulp-imagemin');

gulp.task('reload', function(){
  browserSync.reload();
});

gulp.task('serve', function(){
  browserSync({
    server: 'dist'
  });
  gulp.watch('src/*.html', ['reload']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/css/**/*.css', ['css']);
});


gulp.task('css', function(){
    return gulp.src('src/css/**/*.css')
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function(){
    return gulp.src('src/js/**/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('img', function(){
  return gulp.src('src/img/**/*.{jpg,jpeg,png,gif}')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
});

gulp.task('default', ['serve','js']);
