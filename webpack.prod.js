const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const CnameWebpackPlugin = require('cname-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[fullhash].js',
    clean: true
  },
  plugins: [
    new CnameWebpackPlugin({
      domain: 'jfbenavid.com'
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 30000000
    })
  ]
})
