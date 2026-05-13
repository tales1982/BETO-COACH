const gulp     = require('gulp');
const sass     = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify   = require('gulp-uglify');

// copia todos os HTML da raiz
function html() {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./dist'));
}

function styles(){
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images(){
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function scripts(){
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function fonts(){
  return gulp.src('./src/fonts/*.ttf')
    .pipe(gulp.dest('./dist/font'));
}

exports.default = gulp.series(
  html,
  styles,
  images,
  scripts,
  fonts
);

exports.watch = function(){
  gulp.watch('./*.html', html);
  gulp.watch('./src/styles/*.scss', styles);
  gulp.watch('./src/scripts/*.js', scripts);
};
