var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/public/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./public/index.js'
	],

	output: {
		path: __dirname + '/public/dist/',
		filename: 'index_bundle.js'
	},

	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},

	plugins: [HtmlWebpackPluginConfig]
}
