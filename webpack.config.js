const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					},
				},
			},
			{ test: /\.(html)$/, use: ['html-loader'] },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}), new CleanWebpackPlugin()
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

}