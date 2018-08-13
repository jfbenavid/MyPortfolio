const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		portfolio: path.resolve(__dirname, 'src/js/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					'css-loader',
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
			},
			{
				test: /\.js$/,
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
	}
}