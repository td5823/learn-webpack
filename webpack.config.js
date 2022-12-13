

// 代码分离
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
    // 动态生成index.html 动态引入资源
    new HtmlWebpackPlugin({
      title: '代码分离',
    }),
  ],
  // 编译出口
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};

// // 代码分离 1
// const path = require('path');
// // 动态生成index.html 动态引入资源
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   // 编译入口
//   entry: {
//     index: {
//       import: './src/index.js',
//       dependOn: 'shared',
//     },
//     another: {
//       import: './src/another-module.js',
//       dependOn: 'shared',
//     },
//     // 防止重复
//     shared: 'lodash',
//   },
//   // 插件
//   plugins: [
//     // 动态生成index.html 动态引入资源
//     new HtmlWebpackPlugin({
//       title: '代码分离',
//     }),
//   ],
//   // 编译出口
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
//   optimization: {
//     splitChunks: {
//       chunks: 'all',
//     },
//   },
// };


// // 总结
// const path = require('path');
// // 动态生成index.html 动态引入资源
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   // 编译入口
//   entry: {
//     index: './src/index.js',
//     another: './src/another-module.js',
//   },
//   // 插件
//   plugins: [
//     // 动态生成index.html 动态引入资源
//     new HtmlWebpackPlugin({
//       title: '代码分离',
//     }),
//   ],
//   // 编译出口
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
//   // 将编译后代码中的错误位置 映射到源代码的错误位置处
//   devtool: 'inline-source-map',
//   // webpack-dev-server 提供了一个基本的 web server，并且具有 live reloading(实时重新加载)
//   devServer: {
//     static: './dist',
//   },
//   optimization: {
//     runtimeChunk: 'single',
//   },
// };