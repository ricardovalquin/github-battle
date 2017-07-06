var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

//NODE_ENV to production
// uglify

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'//for all the assets, this is to prevent to not find a route when reload
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  devServer: { // new property for exports object, this is to prevent to not find a route when reload
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({ // this set the NODE_ENV variable = production on the compiled code by webpack
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;


//local env
//module.exports = {
//  entry: './app/index.js',
//  output: {
//    path: path.resolve(__dirname, 'dist'),
//    filename: 'index_bundle.js',
//    publicPath: '/'//for all the assets, this is to prevent to not find a route when reload
//  },
//  module: {
//    rules: [
//      { test: /\.(js)$/, use: 'babel-loader' },
//      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
//    ]
//  },
//  devServer: { // new property for exports object, this is to prevent to not find a route when reload
//    historyApiFallback: true
//  },
//  plugins: [new HtmlWebpackPlugin({
//    template: 'app/index.html'
//  })]
//};
