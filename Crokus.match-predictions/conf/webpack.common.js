import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

export default {
  cache: true,
  stats: {
    colors: true,
    reasons: false
  },
  output: {
    pathinfo: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../wwwroot/src')
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ],
        loader: 'babel-loader',
        query: {
          cacheDirectory: false
        }
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=2000&name=assets/images/[name].[ext]'
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  postcss () {
    return [
      autoprefixer
    ];
  }
};
