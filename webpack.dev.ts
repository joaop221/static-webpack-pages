import webpack from 'webpack';
import merge from 'webpack-merge';

import config from './webpack.config';

const devConfig: webpack.Configuration = merge(config, {
    devServer: {
      contentBase: './dist',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
          service: 'http://mocky.io/v2/',
      }),
    ],
});

export default devConfig;
