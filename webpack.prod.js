const path = require('path')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.common.config')
const UglighJSPlugin = require('uglifyjs-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = merge(webpackConfig, {
    mode: 'production',
    // 出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new UglighJSPlugin()
    ],
})