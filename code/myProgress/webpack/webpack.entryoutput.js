/**
 * 把webpack中的entry和output抽出来
 */
let path = require('path')
const rootPath = path.dirname(__dirname)
const appPath = path.join(rootPath, 'dist/js/app')

let appConfigs = {
    booking: {
        entry: 'src/js/app/booking',
        output: {
            path: appPath,
            filename: 'booking/[name].js',
            chunkFilename: 'booking/[name].[chunkhash].js'
        }
    },
    game2048: {
        entry: 'src/js/app/game2048',
        output: {
            path: appPath,
            filename: 'game2048/[name].js',
            chunkFilename: 'game2048/[name].[chunkhash].js'
        }
    }
}
module.exports = appConfigs