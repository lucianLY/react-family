const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:[{
                    loader:"file-loader",
                    options: {
                        esModule: false,
                        name: "./[hash:8].[ext]",
                        limit: 1024, 
                        outputPath: "./asstes/images/",
                        publicPath: "asstes/images/",
                        publicPath: "../asstes/images/",
                    },
                  }]
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                  {
                    loader: "url-loader",
                    options: {
                      name: "[name]-[hash:5].min.[ext]",
                      limit: 3000, // size <= 3000B, 改成5000B试试?  
                      publicPath: "asstes/fonts/",
                      outputPath: "asstes/fonts/"
                    }
                  }
                ]
            }
        ]
    }
}