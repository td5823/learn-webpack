
const path = require('path');
// 动态生成index.html 动态引入资源
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // 编译入口
  entry: {
    index: './src/index.js',
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: '创建library',
    }),
  ],
  // 编译出口
  output: {
    filename: 'webpack-numbers.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
    clean: true,
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};