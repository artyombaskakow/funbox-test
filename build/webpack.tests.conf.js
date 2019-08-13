const baseWebpackConfig = require('./webpack.base.config');
const webpack = require('webpack');
const path = require('path');

let PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist-tests')
}

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: `mocha-loader!${PATHS.src}/tests/index.js`,
    output: {
        filename: 'test.build.js',
        path: PATHS.dist,
        publicPath: "/tests"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            },
            {
                test: /(\.css|\.less)$/,
                loader: 'null-loader',
                exclude: [
                    /build/
                ]
            },
            {
                test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
                loader: 'null-loader'
            }
        ]
    },
    devServer: {
        port: 8081,
        overlay: {
            warnings: true, // потом на false
            errors: true
        }
    },
    plugins: []
};
