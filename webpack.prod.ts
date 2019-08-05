import webpack from 'webpack';
import merge from 'webpack-merge';

import config from './webpack.config';

const devConfig: webpack.Configuration = merge(config, {
    mode: 'production',
});

export default devConfig;
