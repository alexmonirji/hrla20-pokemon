const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './client/index.js'),
	output: {
		path: path.resolve(__dirname, './compiled'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};