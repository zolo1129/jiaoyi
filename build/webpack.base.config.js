const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const createVueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'

console.log('isDev: ', isDev)

let mode
switch (process.env.NODE_ENV) {
  case 'development':
    mode = 'development'
    break
  case 'production':
    mode = 'production'
    break
  case 'test':
    mode = 'none'
    break
  default:
    mode = 'development'
    break
}

const config = {
  mode,
  target: 'web',
  entry: path.join(__dirname, '../src/index.js'),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.sass$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf|mp4)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash:8].css',
      chunkFilename: '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, '../src/assets/images/favicon.ico'),
      template: path.join(__dirname, '../src/index.html'),
      filename: 'index.html'
    })
  ]
}

module.exports = config
