let progressName = process.argv[2]
let splitName = progressName.split(':')
let moduleName = splitName[0]
let mode = splitName[1]

let webpack = require('webpack')
let  modules = require( './webpack/webpack.entryoutput')
let webpackConfig = require('./webpack/webpack.config.' + mode)

// 是不是生产模式
let isProduction = mode === 'prod'

if (moduleName === '*') {
    var promiseList = Object.keys(modules)
        .filter(function (moduleName) {
            return modules[moduleName] && !!modules[moduleName].isLib === isLib
        })
        .map(function (moduleName) {
            return runWebpack(moduleName, webpackConfig, isProduction)
        })
    Promise.all(promiseList).catch(logInfo)
} else if (modules[moduleName]) {
    var promises = []
    var libs = modules[moduleName].libs
    promises.push(runWebpack(moduleName, webpackConfig, isProduction))
    // 打包库文件
    if (libs) {
        libs = Array.isArray(libs) ? libs : [libs]
        var libsPromises = libs.map(function (libName) {
            var webpackLibConfigPath = './webpack/webpack.config.' + (isProduction ? 'lib' : 'lib.dev')
            var webpackLibConfig = require(webpackLibConfigPath)
            return runWebpack(libName, webpackLibConfig, isProduction)
        })
        promises = promises.concat(libsPromises)
    }
    Promise.all(promises).catch(logInfo)
}


function runWebpack(moduleName, baseConfig, isProduction) {
    var config = Object.create(baseConfig)
    var moduleConfig = modules[moduleName]
    var outputType = typeof moduleConfig.output

    // merge moduleConfit to config
    Object.assign(config, moduleConfig)

    // handle entry
    config.entry = {}
    config.entry[moduleName] = moduleConfig.entry

    // handle output
    if (outputType === 'string') {
        config.output = {}
        config.output.path = moduleConfig.output
    } else if (outputType === 'object') {
        config.output = Object.assign({}, config.output, moduleConfig.output)
    }

    // handle productionConfig
    if (isProduction && moduleConfig.productionConfig) {
        Object.assign(config, moduleConfig.productionConfig)
    }

    return new Promise(function (resolve, reject) {
        var count = 0
        webpack(config, function (err, stats) {
            if (err) {
                reject(err)
            }
            if (!stats) {
                return
            }
            var info = stats.toString({
                // output options
                colors: true,
                chunks: false,
                cached: true
            })
            console.log(info)
            if (count === 0) {
                resolve(info)
            } else {
                console.log('change times: ' + count)
            }
            count += 1
        })
    })
}

function logInfo(message) {
    console.log(message)
}