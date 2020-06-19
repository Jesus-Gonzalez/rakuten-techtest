const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.join(rootPath, relativePath)

module.exports = {
  entry: resolvePath('src/index.js'),
  output: {
    filename: '[name].[hash].bundle.js',
  },
  devServer: {
    contentBase: resolvePath('static'),
    compress: true,
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolvePath('static/index.html'),
    }),
  ],
};

process.env.NODE_ENV = 'development';
