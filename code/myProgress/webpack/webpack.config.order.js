/**
 * 项目配置页面文件
 */

import webpack from 'webpack'
import path from 'path'
import moment from 'moment'

const banner = `last modify ${moment().format("HH:mm:ss")}`

const appPath = '/js/app/orderList/'

const srcPath = path.join(__dirname, '../src' + appPath)
const distPath = path.join(__dirname, '../dist' + appPath)

const webpackConfig = {
  entry: {
    orderList: srcPath + 'index.js'
  },
  output: {
    path: distPath,
    filename: '[name].js'
  },
  module: {
    loaders:[
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'es2015-loose', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['','.js', '.json', '.jsx']
  },
  plugins: [
    new webpack.BannerPlugin(banner),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),

    // // 压缩代码
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        unused: true,
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
        properties: false,
        screw_ie8: false,
        warnings: false
      },
      mangle: { screw_ie8: false },
      output: { screw_ie8: false },
      minimize: true
    })
  ]
}
export default webpackConfig