import path from 'path'
import ts from 'rollup-plugin-typescript2'
import server from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'

// 环境
const isDev = () => {
  return process.env.NODE_ENV === 'development'
}

export default {

  // 入口文件（rollup不认识 ts，需要让 rollup 支持 ts：插件 rollup-plugin-typescript2）
  input: './src/index.ts',

  // 输出
  output: {
    // 输出文件
    file: path.resolve(__dirname, './lib/index.js'),
    // 输出格式（这里演示通过script引入，所以输出格式使用 umd）
    format: 'umd',
    // 开启sourcemap：有报错好调试（比如：点击console打印的代码，会自动跳到代码的某一行）
    sourcemap: true
  },

  // 插件
  plugins: [
    // 使rollup支持ts，执行即可
    ts(),

    // 执行即可
    // dev环境使用热更新
    isDev() && livereload(),

    // 代码压缩，执行即可（执行后即可看到文件 lib/index.js 被压缩至一行）
    // terser(),
    // 也可以配置的更具体
    terser({
      // 压缩配置
      compress: {
        // 删除代码里的打印
        drop_console: !isDev()
      }
    }),

    // 类似于 webpack 的 definePlugin
    replace({
      // 将 node的环境变量 注册到 浏览器中
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      // 可以自己随意定义，比如 a: xxxxx
    }),


    // 类似于 webpack-dev-server
    // 如果是 dev 环境，使用 server（要不然 run build 也会重开新页面。。。）
    isDev() && server ({
      // 是否自动打开浏览器
      open: true,
      // 端口
      port: 1988,
      // 打开的 html 页面
      openPage: '/public/index.html'
    }) 
  ]
}