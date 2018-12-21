import webpack from 'webpack'
import moduleConfig from './webpack.module'

let prodConfig = Object.create(moduleConfig)

prodConfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
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
)

// 异步加载的分包 loader
prodConfig.module.postLoaders.push({
    test: /\.(js|jsx)-lazy$/,
    exclude: /node_modules/,
    loader: 'bundle-loader?lazy&name=[name]!es3ify-loader'
})

module.exports = prodConfig