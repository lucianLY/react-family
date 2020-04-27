const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    // 入口
    entry: path.join(__dirname, 'src/index.js'),
    // 出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname, '/src'),
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'react',
            template: "./index.html"
        })
    ],
    resolve:{
        alias:{
            component: path.join(__dirname, 'src/component'),
            // redux: path.join(__dirname, "src/redux")
        }
    },
    module:{
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }]
    }
}