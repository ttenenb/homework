const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// let nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const json5 = require('json5');

module.exports = {
    entry: './src/names.js',
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: "Raffle Picker",
            template: './src/rafflePicker.html'
        }),
        // new CompressionPlugin(),
         new ESLintPlugin()
    ],
    target: 'web',
    // externals: [nodeExternals({
    //     allowlist: [
    //         'babel-runtime/regenerator',
    //         'regenerator-runtime'
    //     ]
    // })],
    output: {
        filename: 'names.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(mp3|wav)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            },
            // {
            //     test: /\.json5$/i,
            //     type: 'json',
            //     parser: {
            //       parse: json5.parse,
            //     },
            //   },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            // [
                            //     "transform-runtime", {
                            //     "helpers": false,
                            //     "polyfill": false,
                            //     "regenerator": true,
                            //     "moduleName": "babel-runtime"
                            //     }
                            // ]
                        
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    // "helpers": false,
                                    // "polyfill": false,
                                    // "regenerator": true,
                                    //  "moduleName": "babel-runtime"
                                    "absoluteRuntime": false,
                                    "corejs": false,
                                    "helpers": true,
                                    "regenerator": true,
                                    "useESModules": false,
                                    "version": "7.0.0-beta.0"
                                }]
                        ]
                    }
                }
            }
        ],
    },
    mode: 'development'
};
