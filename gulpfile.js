var   gulp = require('gulp')
    , autoprefixer = require('gulp-autoprefixer')
    , minifyCSS = require('gulp-minify-css')
    , connect = require('gulp-connect')
    ;

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

//html
gulp.task('html',function(){
    gulp.src('index.html')
        .pipe(connect.reload());
});

//css
gulp.task('css', function () {
    gulp.src('lib/css/*.css')
        //.pipe(minifyCSS())
        //.pipe(autoprefixer({
        //    browsers: ['last 2 versions'],
        //    cascade: false
        //}))
        //.pipe(gulp.dest('lib/css'))
        .pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
    gulp.watch('/lib/css/*.css', ['css'])
    gulp.watch('index.html', ['html']);
});

//default
gulp.task('default', ['connect', 'html', 'css', 'watch']);



