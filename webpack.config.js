const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.ts',
    navbar: './src/components/navbar.ts'
  },
  mode: 'production',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    // Loaders
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader'
    },
    {
      test: /\.scss$/,
      use: [
        process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'PWA with web components',
      template: './index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {}
};