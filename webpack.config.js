const webpack = require( 'webpack' );
const path = require( 'path' );

const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const config = {

  entry: {
    'vendor': './src/client/vendor',
    'app': './src/client/main'
  },

  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'awesome-typescript-loader' },
      { test: /\.json$/, loader: 'json-loader' } // See https://github.com/webpack/webpack/issues/592
    ]
  },

  // Reference: // Set source map processor see https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',

  plugins: [

    // Reference: https://webpack.github.io/docs/list-of-plugins.html#environmentplugin
    // This plugin will allow you to access to referenced environment variables through process.env
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),

    // Reference: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    // Copy template to dist folder
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
      host: 'localhost'
    }),

    new CopyWebpackPlugin([
      {
        from: 'src/client/assets',
        to: './assets'
      }
    ])

  ]
};

module.exports = config;
