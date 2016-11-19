var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  watch('./index.html', function(){
    browserSync.reload();
  });

  watch('./content.html', function(){
    browserSync.reload();
  });

  watch('./assets/css/**/*.css', function(){
    gulp.start('cssInject');
    browserSync.reload();
  });

});

gulp.task('cssInject',['styles'], function(){
  return gulp.src("./assets/temp/css/main.css")
    .pipe(browserSync.stream());
});
