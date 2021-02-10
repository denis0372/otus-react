const path = require('path');
const webpack = require('webpack');
const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
  ],
  webpackFinal: (config) => {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    config.module.rules.push({
      test: /\.stories\.tsx$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });

    // Remove the existing css rule
    config.module.rules = config.module.rules.filter(
      f => !f.test.toString().includes('css')
    );
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ['style-loader', {
    //     loader: 'css-loader',
    //     options: {
    //       modules: true, // Enable modules to help you using className
    //     }
    //   }],
    //   include: path.resolve(__dirname, '../src'),
    // });

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../'),
    });
    
    return {
      ...config,
      resolve: {
        extensions: custom.resolve.extensions
      },
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
    };
  },
};
