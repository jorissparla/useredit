const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
        query: { 
          presets: ['react', 'es2015', 'stage-0'] 
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
      }
    ]
},

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
  watch: true,
  postcss: [autoprefixer],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    })
  ]
}

;
