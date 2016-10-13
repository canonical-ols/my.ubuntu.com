const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const vars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');

const conf = require('../server/configure.js');
const WEBPACK_DEV_URL = conf.get('SERVER:WEBPACK_DEV_URL');

const sharedVars = require('../src/style/variables');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: [
    'babel-polyfill',
    `webpack-hot-middleware/client?path=${WEBPACK_DEV_URL}/__webpack_hmr`,
    'webpack/hot/only-dev-server',
    './src',
  ],
  output: {
    path: path.join(__dirname, '../public/static'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    publicPath: `${WEBPACK_DEV_URL}/static/`
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new ManifestPlugin()
  ],
  module: {
    loaders: require('./loaders-config.js')
  },
  devtool: 'source-map',
  postcss: function () {
    return [ vars({ variables: () => sharedVars }), autoprefixer ];
  },
  debug: true
};
