"use strict";

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const pack = require('./package.json');

let entry = {
  'akili-localization': "./src/localization.js"
};

let plugins = [];
let minimize = process.env.MINIMIZE;
let build = process.env.BUILD;

let banner = `Localization service for Akili framework\n
@version ${pack.version}
@author Alexandr Balasyan <mywebstreet@gmail.com>
{@link https://github.com/ortexx/akili-localization}
{@link https://github.com/ortexx/akili}
{@link https://akilijs.com}`;

plugins.push(new webpack.BannerPlugin({
  banner: banner.trim()
}));

minimize && (entry['akili-localization.min'] = entry['akili-localization']);

let config = {
  mode: build? 'production': 'development',
  performance: { hints: false },
  watch: !build,
  bail: true,
  devtool: "inline-source-map",
  entry: entry,
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        uglifyOptions: {
          minimize: true,
          compress: {
            warnings: false
          }
        }       
      })
    ]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
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
  plugins: plugins
};

module.exports = config;