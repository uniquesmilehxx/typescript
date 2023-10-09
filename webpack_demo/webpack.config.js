const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 模式
  mode: 'development',
  // 入口
  entry: './src/index.ts',

  // 出口
  output: {
    // 输出目录
    path: path.resolve(__dirname, './dist')
  },

  module: {
    rules: [
      // 放一大堆loader
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },

  devServer: {
    port: 8080,
    // 跨域配置
    proxy: {},
  },


  // 匹配后缀（引入文件的时候，不用写后缀）
  resolve: {
    extensions: ['.js', '.ts']
  },

  plugins: [
    // 指定html模板
    new htmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}