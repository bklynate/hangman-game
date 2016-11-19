var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var addVariablesToCss = require('postcss-simple-vars');
var addNestedCssStructures = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function(){
  return gulp.src('./assets/css/main.css')
    .pipe(postcss([cssImport,mixins,addVariablesToCss,addNestedCssStructures,autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end')
    })
    .pipe(gulp.dest('./assets/temp/css'));
});
