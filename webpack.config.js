const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
    target: 'web',
    context: path.resolve('src'),
    entry: './main.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    } ,
    devtool: env.prod ? 'source-map' : 'eval',
    resolve: {
        // Allow absolute paths in imports, e.g. import Button from 'components/Button'
        modules: ['node_modules', 'src'],
    },
    module: {
        rules: [
            // Rules for JS / JSX
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                include: [
                    path.resolve('src')
                ],
                options: {
                    babelrc: false,
                    presets: [
                        'react'
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('assets/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9")
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: "vendor.js",
            minChunks: module => /node_modules/.test(module.resource),
        }),
        ...(env.prod ? [] : [
            
            // https://github.com/webpack/webpack/blob/master/examples/scope-hoisting/README.md
            new webpack.optimize.ModuleConcatenationPlugin(),
            // https://github.com/mishoo/UglifyJS2#compressor-options
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    unused: true,
                    dead_code: true,
                    screw_ie8: true,
                },
                mangle: {
                    screw_ie8: true,
                },
                output: {
                    comments: false,
                    screw_ie8: true,
                },
                sourceMap: true,
            }),
        ])
    ]
});
