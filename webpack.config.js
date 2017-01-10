const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const __DEV__ = process.env.NODE_ENV !== 'production';
const webpackConfig = {
  context: __dirname,
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    alias: {
      react: 'inferno-compat',
      'react-dom/server': 'inferno-server',
      'react-dom': 'inferno-compat',
    },
  },
  output: {
    path: path.resolve('www'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'html-loader!src/index.html',
      minify: {},
    }),
  ],
  entry: 'index.js',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, 'src'),
      ],
      query: { cacheDirectory: true },
    }],
  },
  devtool: __DEV__ ? 'source-map' : '',
};

if (__DEV__) {
  const DashboardPlugin = require('webpack-dashboard/plugin');
  webpackConfig.plugins.push(new DashboardPlugin());
}
module.exports = webpackConfig;

