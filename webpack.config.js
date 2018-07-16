const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[hash].js',
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true, interpolate: true }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|TTF)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/sponsor.html",
            filename: "./sponsor.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/speakers.html",
            filename: "./speakers.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/error.html",
            filename: "./error.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/award.html",
            filename: "./award.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/wms.html",
            filename: "./wms.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/medal.html",
            filename: "./medal.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash:8].css",
            chunkFilename: "[id].css"
        }),
		new CopyWebpackPlugin([
        {
            from: 'src/sitemap.xml',
            to: 'sitemap.xml',
            toType: 'file'
        },
		{
            from: 'src/robots.txt',
            to: 'robots.txt',
            toType: 'file'
        },
        {
            from: 'src/Kotler_Excellence_Medal.pdf',
            to: 'Kotler_Excellence_Medal.pdf',
            toType: 'file'
        }], {})
    ]
};