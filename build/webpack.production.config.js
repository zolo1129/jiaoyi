const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const baseConfig = require('./webpack.base.config')

const isDev = process.env.NODE_ENV === 'development'

let config = merge(baseConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
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

if (isDev) {
  config = merge(config, {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  })
}

module.exports = config