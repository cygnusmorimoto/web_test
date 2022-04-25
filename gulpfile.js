var gulp = require('gulp'),
    sass = require('gulp-sass'),//sass
    uglify = require("gulp-uglify"),//jp
    cleanCSS = require('gulp-clean-css'),//css圧縮
    imagemin = require("gulp-imagemin"),//image圧縮
    pngquant  = require('imagemin-pngquant'),//image圧縮
    mozjpeg  = require('imagemin-mozjpeg'),//image圧縮
	concat = require("gulp-concat"),
    webp = require('gulp-webp'),
    plumber = require('gulp-plumber');

gulp.task('webp', function() {
    // この部分を変更
    return gulp.src('images/**/*.{jpg,jpeg,png,gif}')
        .pipe(webp())
        .pipe(gulp.dest('dist'))
});

// imagesフォルダのpng,jpg画像を圧縮して、minified_imageフォルダに保存する
gulp.task("imageMinTask", function() {  // 「imageMinTask」という名前のタスクを登録
    return gulp
		.src("images/*.{png,jpg}")    // imagesフォルダ以下のpng,jpg画像を取得
    .pipe(imagemin([
       pngquant({
         quality: [.5, .65],
         speed: 1,
         floyd:0
       }),
       mozjpeg({
         quality:75,
         progressive: true
       }),
       imagemin.svgo(),
       imagemin.optipng(),
       imagemin.gifsicle()
     ]
   ))   // 画像の圧縮処理
        .pipe(gulp.dest("images/"));    //保存
});

gulp.task("imagesp", function() {  // 「imageMinTask」という名前のタスクを登録
    return gulp.src("images/sp/*.{png,jpg}")    // imagesフォルダ以下のpng,jpg画像を取得
    .pipe(imagemin([
       pngquant({
         quality: [.5, .65],
         speed: 1,
         floyd:0
       }),
       mozjpeg({
         quality:75,
         progressive: true
       }),
       imagemin.svgo(),
       imagemin.optipng(),
       imagemin.gifsicle()
     ]
        ))   // 画像の圧縮処理
        .pipe(gulp.dest("images/sp/"));    //保存
});

// javascript圧縮

gulp.task("minjs", function() {
   return gulp.src(["js/**/*.js"])
      .pipe(uglify())
     .pipe(gulp.dest("js"));
});

//CSS圧縮
gulp.task('mincss', function() {
    return gulp.src(["css/*.css","!css/index.css"])
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/'));
        //.pipe(gulp.dest('css')); 上書きする場合
});

// SassとCssの保存先を指定
gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
  	.pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css/'));
});

// jsまとめる
gulp.task('mixjs', function() {
  return gulp.src('_base/js/*.js')
    .pipe(concat('mix.js'))
    .pipe(gulp.dest('js'));
});


gulp.task("default", function() {
	gulp.watch('_base/js/**/*.js', gulp.task('mixjs'));
	gulp.watch('scss/*.scss', gulp.task('sass'));
});
