import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpackCommonConfig from './webpack.common';

export default {
  ...webpackCommonConfig,
  entry: [
    'webpack/hot/dev-server',
    path.join(__dirname, '../wwwroot/src')
  ],
  output: {
    ...webpackCommonConfig.output,
    path: path.join(__dirname, '..'),
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    preLoaders: webpackCommonConfig.module.preLoaders,
    loaders: [
      ...webpackCommonConfig.module.loaders,
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, '../wwwroot/src')
        ],
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=' +
          '[name]__[local]___[hash:base64:3]',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    ...webpackCommonConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../wwwroot/assets/index.html'),
      favicon: path.join(__dirname, '../wwwroot/assets/favicon.ico')
    })
  ]
};
