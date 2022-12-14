
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
      title: 'Caching',
    }),
  ],
  // 编译出口
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};