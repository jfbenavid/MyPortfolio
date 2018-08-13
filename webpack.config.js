const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		portfolio: path.resolve(__dirname, 'src/js/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[hash].js',
		publicPath: path.resolve(__dirname, 'dist') + "/",
		chunkFilename: 'js/[id].[chunkhash].js',
	},
	module: {
		rules: [
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						},
						{
							loader: 'stylus-loader',
							options: {
								use: [
									require('nib'),
									require('rupture')
								],
								import: [
									'~nib/lib/nib/index.styl',
									'~rupture/rupture/index.styl'
								]
							}
						}
					]
				})
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						fallback: 'file-loader',
						name: 'images/[name].[hash].[ext]',
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].[hash].css'),
		new CleanWebpackPlugin(['dist'], { root: __dirname })
	]
}