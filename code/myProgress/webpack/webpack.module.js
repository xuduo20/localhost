let webpack = require('webpack')
let path = require('path')
const rootPath = path.dirname(__dirname)
const banner = `last modify${new Date().toLocaleDateString}`

module.exports = {
    module: {
        loaders: [{
            test: /\.(js|jsx)(-lazy)?$/,
            exclude: /node_modules/,
            loaders: ['eslint', 'babel-loader']
        }],
        postLoaders: [{
            test: /\.(js|jsx)(-lazy)?$/,
            loaders: ['es3ify-loader']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.js-lazy', '.jsx-lazy'],
        root: rootPath,
        alias: {}
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.BannerPlugin(banner, {
            entryOnly: true
        })
    ]
}