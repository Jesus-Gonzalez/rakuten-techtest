const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.join(rootPath, relativePath)

module.exports = {
  mode: 'production',
  entry: {
    main: resolvePath('src/index.js'),
    icons: resolvePath('src/core/icons.js'),
  },
  output: {
    path: resolvePath('dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
  },
  devtool: 'source-map',
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
                localIdentName: '[hash:base64]',
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

process.env.NODE_ENV = 'production'
