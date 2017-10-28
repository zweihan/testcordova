/**
 * Created by weihan on 20/10/17.
 */
const path = require('path');
const autoprefixer = require("autoprefixer");
// console.log("asdsad", autoprefixer());
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const textPlugin = require("extract-text-webpack-plugin");
var extractScss = new textPlugin({
    filename: "[name].css"
});
module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",

    resolve: {
        extensions: [".js", ".jsx", ".js", ".json"]
    },

    module: {
        rules: [
            {

                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-decorators-legacy', "transform-runtime", "transform-async-to-generator"],
                        presets: ['es2015', 'stage-0', 'react']
                    }

                }
            },


            {
                test: /\.scss$/,
                // exclude: /main\.scss/,
                include: [
                    path.resolve(__dirname, "styles/")
                ],
                use: [
                {loader: 'style-loader'},
                {loader:'css-loader'  },
                {loader: "sass-loader"},
                {loader: "postcss-loader", options:{plugins: [autoprefixer()]}}
            ]},

            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        publicPath: '../'       // override the default path
                    }
                }]
            },
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
           inject: true,
            template: "index.html"
        })
    ],
    devServer: {
        hot: true
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};