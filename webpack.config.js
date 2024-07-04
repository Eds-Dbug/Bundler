const { default: test } = require('node:test');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const bunleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'output.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader',
              ]
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
  };