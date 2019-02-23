const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: './src/main.ts',
  mode: 'production',
  module: {
    // Loaders
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  plugins: [],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {}
};