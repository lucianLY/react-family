const path = require('path')
const merge = require('webpack-merge')
const webpackConfig = require("./webpack.common.config")

module.exports = merge(webpackConfig, {
    mode: 'development',
    // 出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    }
})