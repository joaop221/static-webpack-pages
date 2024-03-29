import path from 'path';
import webpack from 'webpack';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TSLintPlugin from 'tslint-webpack-plugin';

const config: webpack.Configuration = {
    entry: {
        index: './src/pages/index.ts',
        lists: './src/pages/lists/lists.ts',
        main: './src/index.ts',
    },
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                test: [/\.js$|\.ts$/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/typescript',
                        ],
                    },
                },
            },
            {
                test: [/.css$|.scss$/],
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                            options: {
                                hmr: process.env.NODE_ENV === 'development',
                                reloadAll: true,
                            },
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            service: 'http://mocky.io/v2/',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['main', 'lists'],
            filename: 'lists.html',
            inject: 'body',
            template: './src/pages/lists/lists.html',
            title: 'Lists Static Pages',
        }),
        new HtmlWebpackPlugin({
            chunks: ['main', 'index'],
            filename: 'index.html',
            inject: 'body',
            template: './src/pages/index.html',
            title: 'Webpack Static Pages',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: 'main',
            filename: '[name].css',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: 'index',
            filename: '[name].css',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: 'lists',
            filename: '[name].css',
        }),
        new TSLintPlugin({
            files: ['./src/**/*.ts'],
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
};

export default config;
