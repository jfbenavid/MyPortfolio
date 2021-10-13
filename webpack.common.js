const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              [
                'module-resolver',
                {
                  alias: {
                    initialState: './src/state/store/initialState',
                    portfolio: './src/portfolio',
                    hooks: './src/util/hooks'
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
}
