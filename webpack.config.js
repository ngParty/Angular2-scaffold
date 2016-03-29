const webpack = require( 'webpack' );
const path = require( 'path' );

const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {

  // Reference: https://webpack.github.io/docs/configuration.html#context
  // Path where entries are resolved
  context: path.resolve( __dirname, 'src/client' ),

  // Reference: https://webpack.github.io/docs/configuration.html#entry
  // Exported bundles
  entry: {
    'vendor': './vendor',
    'app': './main'
  },

  // Reference: https://webpack.github.io/docs/configuration.html#output
  // Export bundles target location and naming
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: '[name].js'
  },

  // Reference: https://webpack.github.io/docs/configuration.html#resolve
  // import "vendor" instead of import "vendor.ts"
  resolve: {
    extensions: [ '', '.ts', '.js' ]
  },

  // Reference: https://webpack.github.io/docs/configuration.html#module
  module: {

    preLoaders: [
      {
        test: /\.ts$/,
        loader: "tslint-loader"
      }
    ],

    // Transpilers and preprocessors
    loaders: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'awesome-typescript-loader' },
      { test: /\.json$/, loader: 'json-loader' } // See https://github.com/webpack/webpack/issues/592
    ]
  },

  // Set source map processor
  // Reference: https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',

  // Reference: https://webpack.github.io/docs/list-of-plugins.html
  plugins: [

    // Reference: https://webpack.github.io/docs/list-of-plugins.html#environmentplugin
    // This plugin will allow you to access to referenced environment variables through process.env
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),

    // Reference: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    // Copy template to dist folder
    new HtmlWebpackPlugin({
      template: 'index.html',
      host: 'localhost'
    }),

    // Reference: https://github.com/kevlened/copy-webpack-plugin#usage
    // Copy static assets
    new CopyWebpackPlugin([
      {
        from: 'assets',
        to: './assets'
      }
    ])

  ]

};

