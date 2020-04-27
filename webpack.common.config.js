const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    // 入口
    entry: path.join(__dirname, 'src/index.js'),
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname, '/src'),
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react',
            template: path.join(__dirname, "src/index.html")
        })
    ],
    resolve:{
        alias:{
            component: path.join(__dirname, 'src/component')
        }
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    }
}