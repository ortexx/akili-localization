"use strict";

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const pack = require('./package.json');

let plugins = [];
let isProd = process.env.NODE_ENV == 'production';

let banner = `Localization service for Akili framework\n
@version ${pack.version}
@author Alexandr Balasyan <mywebstreet@gmail.com>
{@link https://github.com/ortexx/akili-localization}
{@link https://github.com/ortexx/akili}
{@link https://akilijs.com}`;

plugins.push(new webpack.BannerPlugin({
  banner: banner.trim()
}));

let config = {
  mode: isProd? 'production': 'development',
  performance: { hints: false },
  watch: !isProd,
  bail: true,
  devtool: isProd? false: "inline-source-map",
  entry: "./src/localization.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "akili-localization.js",
    libraryExport: "default",
    libraryTarget: 'umd'
  },
  externals: {
    akili: 'Akili'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',        
        query: {
          presets: ['akili']
        }
      }
    ]
  },
  plugins
};

module.exports = config;