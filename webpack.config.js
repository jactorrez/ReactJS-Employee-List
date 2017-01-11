var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	entry: [__dirname + "/src/js/index.js"],

	output: {
		path: __dirname + "/dist/js/",
		filename: "bundle.js",
		publicPath: "http://localhost:8080/dist/js/"
	},

	devTool: "cheap-module-eval-source-map",

	module: {

		loaders: [
		{	
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015'],
				plugins: ['react-html-attrs']
			}
		},
		{
			test: /\.scss$/,
			loader: "style!css!sass"
		}
	    ]
	},

	plugins: [
		new ExtractTextPlugin('../css/style.css', {
			allChunks: true
		}),
	],


	resolve: {
		extensions: ['', '.js', '.jsx', 'scss']
	}
}