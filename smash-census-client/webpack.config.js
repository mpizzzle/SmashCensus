//We'll go through what this config is for later
//for now work with the assumption that src/client.js is the main program entry point

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./client.js",
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  devServer: {
    compress: true,
    disableHostCheck: true,
    proxy: {
      "/profiles": {
        "target": "http://localhost:3000",
        "changeOrigin": true,
        "secure": false
      },
      "/postprofile": {
        "target": "http://localhost:3000",
        "changeOrigin": true,
        "secure": false
      },
      "/deleteprofile": {
        "target": "http://localhost:3000",
        "changeOrigin": true,
        "secure": false
      }
    }
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
