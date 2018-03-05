let WriteFilePlugin = require('write-file-webpack-plugin');

var config = {
 entry: {
   path: './app/src/main.js',
 },
 output: {
   path: __dirname + '/public',
   filename: 'bundle.js'
 },
 module: {
   loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    },
     {
      test: /\.css$/,
      exclude: /node_modules/,
      loaders: ['style-loader', 'css-loader'],
     }
   ]
 },
 plugins: [
   new WriteFilePlugin()
 ],
 devtool: 'eval-source-map'
}

module.exports = config;
