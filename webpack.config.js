var webpack = require('webpack')

// var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
  devtool: 'source-map',
  entry: './src/client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
  ]
}
