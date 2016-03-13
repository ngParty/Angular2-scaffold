// TODO
// const webpack = require( 'webpack' );

// TODO
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

// TODO
const path = require( 'path' );

module.exports = {

  // Set source map processor see https://webpack.github.io/docs/configuration.html#devtool
  devtool: `cheap-module-eval-source-map`,

  // Set root client folder https://webpack.github.io/docs/configuration.html#context
  context: path.join( __dirname, `./src/client` ),

  // Bundles source files see https://webpack.github.io/docs/configuration.html#entry
  entry: {
    app: `./bootstrap`
  },

  // Generated bundles location
  output: {
    path: `/`, // Physical
    publicPath: `/`, // on client
    filename: `[name].js` // set filename format
  },

  // Add typescript extension resolution so you don't have to type it
  // see https://webpack.github.io/docs/configuration.html#resolve-extensions
  resolve: {
    extensions: [
      ``, `.ts`
    ]
  },

  // TODO
  module: {
    loaders: [
      {
        test: /\.ts$/, exclude: /node_modules/, loader: 'ts'
      }
    ]
  },

  // TODO
  plugins: [
    new CopyWebpackPlugin([{ from: './index.html' }], {})
  ]

};
