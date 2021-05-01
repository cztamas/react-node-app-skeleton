'use strict';

const { merge } = require('webpack-merge');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const commonConfig = require('./webpack.common.config.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: {
        scripts: ['npm run open'],
        parallel: false
      }
    })
  ],
  devServer: {
    stats: 'minimal',
    port: 7878,
    publicPath: '/',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  }
});
