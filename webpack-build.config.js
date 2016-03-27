const webpack = require( 'webpack' );

// Inherit main config
const webpackConfig = require( './webpack.config.js' );

// Override watch set for development
// webpackConfig.watch = false;

// Where do you want to export bundle files
// webpackConfig.output.path = `dist`;

// Path wehere bundle files will be served on production env
webpackConfig.output.publicPath = `./`;

webpackConfig.plugins.push(

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
  // Only emit files when there are no errors
  new webpack.NoErrorsPlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
  // Dedupe modules in the output
  new webpack.optimize.DedupePlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  // Minify all javascript, switch loaders to minimizing mode
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })

);

module.exports = webpackConfig;