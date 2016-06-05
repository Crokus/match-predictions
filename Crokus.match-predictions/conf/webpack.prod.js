import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import pkg from '../package.json';
import webpackCommonConfig from './webpack.common';

// Packages to exclude from vendor bundle
const pkgBlacklist = [
  'ramda'
];

export default {
  ...webpackCommonConfig,
  entry: {
    app: path.join(__dirname, '../wwwroot/src'),
    vendor: Object.keys(pkg.dependencies).filter(x => pkgBlacklist.indexOf(x) === -1)
  },
  output: {
    path: path.join(__dirname, '../wwwroot/dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    preLoaders: webpackCommonConfig.module.preLoaders,
    loaders: [
      ...webpackCommonConfig.module.loaders,
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, '../wwwroot/src')
        ],
        loader: ExtractTextPlugin.extract('style-loader', [
          'css-loader?minimize&modules&importLoaders=1',
          'postcss-loader'
        ].join('!'))
      }
    ]
  },
  plugins: [
    ...webpackCommonConfig.plugins,
    new webpack.optimize.CommonsChunkPlugin(
      'vendor',
      '[name].[chunkhash].js'
    ),
    new ExtractTextPlugin('[name].[chunkhash].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../wwwroot/assets/index.html'),
      favicon: path.join(__dirname, '../wwwroot/assets/favicon.ico'),
      isProduction: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    })
  ]
};
