var gulp = require('gulp')
var babel = require("gulp-babel")
var path = require('path')
var plumber = require('gulp-plumber')
var replace = require('gulp-replace')

var folderName = process.argv[2]
var taskName = folderName

var from = path.join(__dirname, 'es6App')
var to = path.join(__dirname, 'app')

var src = path.join(from, folderName, './**/mod_fetchinfo.js')
var dist = path.join(to, folderName)

gulp.task('build', function() {
    return gulp.src(src)
        .pipe(plumber())
        .pipe(babel({
            "presets": ["es2015"]
        }))
        .pipe(replace(/'use strict';/, ''))
        .pipe(gulp.dest(dist))
})

gulp.task(taskName, ['build'], function() {
	var watcher = gulp.watch(src, ['build'])
	watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    })
})

gulp.task('default', function() {
    console.error('请输出一个目录名: gulp floderName')
})
