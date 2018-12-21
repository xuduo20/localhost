import colors from 'colors'
import moment from 'moment'
import gulp from 'gulp'
import gutil from 'gulp-util'
import babel from 'gulp-babel'
import path from 'path'
import plumber from 'gulp-plumber'
import replace from 'gulp-replace'
import webpack from 'webpack'
import orderWebpackConfig from './webpack/webpack.config.order'

const appPath = 'src/js/app/'
let index = 0
gulp.task('order', () => {
    gulp.watch(appPath + 'orderList/**/*.js', ['orderWebpack'])
})
gulp.task('orderWebpack', callback => {
    webpack(orderWebpackConfig, (err, stats) => {
        if (err) {
            throw new gutil.PluginError('webpack Error:', err)
        } else {
            gutil.log('bestone:build', stats.toString({
                colors: true
            }))
            callback()
            console.log(colors.yellow.bold('modify times:' + index++ + ' at ' + moment().format("HH:mm:ss")))
        }
    })
})


// 如下是把es6App转为app下es5的写法
let folderName = process.argv[2]
let taskName = folderName
let fileName = '*'

const from = path.join(__dirname, 'src/js/es6App')
const to = path.join(__dirname, 'src/js/app')

let src = path.join(from, folderName, './**/' + fileName + '.js')
let dist = path.join(to, folderName)

gulp.task('build', function() {
    return gulp.src(src)
        .pipe(plumber())
        .pipe(babel({
            "presets": ["es2015"]
        }))
        .pipe(replace(/"use strict";/, ''))
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
 