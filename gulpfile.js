var gulp = require('gulp')
var jade = require('gulp-jade')
var sass=require('gulp-sass')


///*** jade to html ****//
gulp.task('jade',function(){
  gulp.src('./src/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./dist'))
})


gulp.task('styles',function(){
  gulp.src('src/sass/*.sass')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/css/'))
})



gulp.task('watchJade',function(){
    gulp.watch('./src/*.jade',['jade'])

})

gulp.task('watchStyles',function(){

    gulp.watch('src/sass/*.sass',['styles'])
})


gulp.task('default',['jade','watchJade','styles','watchStyles'])
