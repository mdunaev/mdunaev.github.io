var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	watch: true,
    entry: [
    	"./app/app.js"
    ],
    output: {
	    path: path.resolve(__dirname, "bundle"),
	    filename: "script.js"
  	},
    module: {
        loaders: [
            { 
            	test: /\.styl$/, 
            	exclude: /node_modules/,
            	loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!stylus-loader") 
            },
            {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
		    }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};