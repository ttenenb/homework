const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: ['./src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',],
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: "Tzvi's project",
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new CompressionPlugin(),
        new ESLintPlugin()
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192
            //             }
            //         }
            //     ]
            // }, {
            //     test: /\.(mp3|wav)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //         }
            //     ]
            // },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};