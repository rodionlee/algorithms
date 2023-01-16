const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
        clean: true
	},
    module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
            {
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: './src/index.html'
          })
	],
    devServer: {
		static: './dist',
	},
	optimization: {
		runtimeChunk: 'single',
	},
};