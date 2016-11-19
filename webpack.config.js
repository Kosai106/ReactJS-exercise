const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: {
    src: PATHS.src,
  },
  output: {
    path: PATHS.build,
    publicPath: '/ReactJS-exercis/', // Uncomment this when deploying to GH-Pages
    filename: '[name].js',
  },
  devtool: debug ? 'inline-sourcemap' : null,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    eslint: {
      configFile: 'path/.eslintrc',
    },
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=react-html-attrs,plugins[]=transform-class-properties,plugins[]=transform-decorators-legacy',
        ],
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: ExtractTextPlugin.extract(
          'style', 'css!postcss!sass'
        ),
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  postcss: function Prefixer() {
    return [precss, autoprefixer];
  },
  plugins: debug ? [
    new NpmInstallPlugin({
      save: true, // --save
    }),
    new ExtractTextPlugin('[name].css'),
    //new HtmlWebpackPlugin({
    //  title: 'Webpack demo',
    //  inject: 'body',
    //}),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
