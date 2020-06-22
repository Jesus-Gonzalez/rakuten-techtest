const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.join(rootPath, relativePath)

module.exports = {
  entry: resolvePath('src/index.js'),
  output: {
    filename: '[name].[hash].bundle.js',
  },
  devtool: 'eval-source-map',
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
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~': resolvePath('src')
    },
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolvePath('static/index.html'),
    }),
  ],
}

process.env.NODE_ENV = 'development'
