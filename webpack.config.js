/**
 * Created by weihan on 20/10/17.
 */
const path = require('path');
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {test: /\.(ts|tsx)?$/, loader: ["react-hot-loader/webpack", "awesome-typescript-loader"] },

            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, "styles/")
                ],
                use: [
                {loader: 'style-loader'},
                {loader:'css-loader'  },
                {loader: "sass-loader"},
                {loader: "postcss-loader", options:{plugins: [autoprefixer()]}}
            ]},


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