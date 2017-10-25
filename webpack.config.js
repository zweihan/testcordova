/**
 * Created by weihan on 20/10/17.
 */
const path = require('path');
const autoprefixer = require("autoprefixer");
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
                        presets: ['es2015', 'react'],
                        plugins: ['transform-decorators-legacy']
                    }

                }
            },


            {
                test: /\.scss$/,
                exclude: /main\.scss/,
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
                test: /main/,
                include: [
                    path.resolve(__dirname, "styles/")
                ],
                use: extractScss.extract({
                    use:[
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'}
                    ]
                })
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
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()]
            }
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