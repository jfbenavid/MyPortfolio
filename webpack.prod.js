const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CnameWebpackPlugin = require('cname-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CnameWebpackPlugin({
      domain: 'jfbenavid.com'
    })
  ]
})
