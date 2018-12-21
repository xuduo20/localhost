let webpack = require('webpack')
let  moduleConfig = require('./webpack.module') 
let devConfig = Object.create(moduleConfig)

devConfig.debug = true
devConfig.watch = true

devConfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
    new webpack.NoErrorsPlugin()
)

module.exports = devConfig