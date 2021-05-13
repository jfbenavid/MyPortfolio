const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const CnameWebpackPlugin = require('cname-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[fullhash].js',
    clean: true
  },
  plugins: [
    new CnameWebpackPlugin({
      domain: 'jfbenavid.com'
    })
  ]
})
