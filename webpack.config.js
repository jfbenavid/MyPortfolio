const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		portfolio: path.resolve(__dirname, 'src/js/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/[id].[chunkhash].js',
		publicPath: 'dist/',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							 publicPath: "../"
						}
					},
					'css-loader'
				]
			},
			{
				test: /\.styl$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							 publicPath: "../"
						}
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
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
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'es2015', 'react', 'stage-2']
					}
				}
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						fallback: 'file-loader',
						useRelativePath: true,
						name: 'images/[name].[hash].[ext]',
					}
				}
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						limit: 100000,
						name: 'fonts/[name].[hash].[ext]',
					}
				}]
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new OptimizeCSSAssetsPlugin({}),
			new UglifyJsPlugin({include: /\.js$/})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: './css/[name].[hash].css',
			chunkFilename: "./css/[id].[hash].css"
		}),
		new CleanWebpackPlugin(['dist'], { root: __dirname })
	]
}