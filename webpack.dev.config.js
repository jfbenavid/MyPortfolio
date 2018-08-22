const path = require('path');

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
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
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
						presets: ['env', 'es2015', 'react', 'stage-2']
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
						name: 'images/[name].[ext]',
					}
				}
			},
			{
				test: /\.(woff(2)?|eot|ttf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/m,
				use: {
					loader: "file-loader",
					options: {
						name: "fonts/[name].[ext]",
					}
				}
			}
		]
	}
}