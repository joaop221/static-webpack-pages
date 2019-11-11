import path from 'path';
import webpack from 'webpack';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TSLintPlugin from 'tslint-webpack-plugin';

import * as packages from './package.json';

const devMode = process.env.NODE_ENV !== 'production';
const config: webpack.Configuration = {
    entry: {
        index: './src/pages/index.ts',
        lists: './src/pages/lists/lists.ts',
        main: './src/index.ts',
        vendor: Object.keys(packages.dependencies),
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
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: !devMode,
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    output: {
        filename: devMode ? '[name].bundle.js' : '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
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
            filename: devMode ? 'styles.bundle.css' : 'styles.[hash].css',
        }),
        new TSLintPlugin({
            files: ['./src/**/*.ts', 'webpack.*.ts'],
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
};

export default config;
