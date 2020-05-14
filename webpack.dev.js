const path = require('path')
const merge = require('webpack-merge')
const webpackConfig = require("./webpack.common.config")
const webpack = require('webpack')

module.exports = merge(webpackConfig, {
    mode: 'development',
    // 出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/',
        publicPath: '/assets/', // 相对于服务(server-relative)
        publicPath: 'assets/images', // 相对于 HTML 页面
        publicPath: '../assets/images', // 相对于 HTML 页面
        publicPath: '', // 相对于 HTML 页面（目录相同）
    },
    plugins: [
        new webpack.DefinePlugin({
            MOCK: true
        })
    ]
})