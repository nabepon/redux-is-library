var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    javascript: ['./src/index.js'],
  },

  output: {
    path: path.join(__dirname, 'dist'), // Must be an absolute path
    filename: 'index.js',
    publicPath: '/dist'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [
        path.join(__dirname, 'src'),
      ]
    }]
  },

  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ]
  },

  devtool: 'source-map',

  devServer: {
    contentBase: 'dist',
    port: 3000
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
