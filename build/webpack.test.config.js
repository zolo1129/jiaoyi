const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

const baseConfig = require('./webpack.base.config')

let config = merge(baseConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/dist/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    // new PrerenderSPAPlugin({
    //   staticDir: path.join(__dirname, '../dist'),
    //   routes: [
    //     '/'
    //   ]
    // })
  ],
  performance: {
    hints: false
  }
})

module.exports = config