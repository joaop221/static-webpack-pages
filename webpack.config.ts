import path from "path";
import webpack from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TSLintPlugin from "tslint-webpack-plugin";

const config: webpack.Configuration = {
    entry: {
        main: "./src/index.ts",
    },
    mode: "production",
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                test: [/\.js$|\.ts$/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/typescript",
                        ],
                    },
                },
            },
            {
                test: [/.css$|.scss$/],
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: [/.css$|.scss$/],
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            minify: {
                collapseWhitespace: false,
                removeComments: true,
            },
            template: "./src/index.html",
            title: "Webpack Static Pages",
        }),
        new MiniCssExtractPlugin({
            filename: "main.css",
        }),
        new TSLintPlugin({
            files: ["./src/**/*.ts"],
        }),
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
};

export default config;
