import webpack from 'webpack';
import merge from 'webpack-merge';

import config from './webpack.config';

const devConfig: webpack.Configuration = merge(config, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
          service: 'https://myproduction/endpoint',
      }),
    ],
});

export default devConfig;
