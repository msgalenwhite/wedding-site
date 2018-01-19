let WriteFilePlugin = require('write-file-webpack-plugin');

var config = {
 entry: {
   path: './src/main.js',
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
