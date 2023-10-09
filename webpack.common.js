const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public', 'data'), to: 'public/data' },
        { from: path.resolve(__dirname, 'public', 'locale'), to: 'public/locale' }
      ]
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      hooks: path.resolve(__dirname, './src/util/hooks'),
      util: path.resolve(__dirname, './src/util'),
      services: path.resolve(__dirname, './src/services')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
