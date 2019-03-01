const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const COMPONENTS = {
    navbar: './src/components/navbar.component.ts'
}


module.exports = {
    entry: {
        main: './src/app.ts',
        ...COMPONENTS
    },
    module: {
        // Loaders
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                // MiniCssExtractPlugin.loader,
                'style-loader',
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'PWA with lit-components',
            hash: true,
            template: './index.html'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};