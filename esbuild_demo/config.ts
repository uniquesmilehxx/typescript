// 编写打包配置

import esbuild from 'esbuild'
import swc from '@swc/core'
import fs from 'node:fs'

// 在 Es2017之后，支持顶层 await 语法（不需要async）
await esbuild.build({
  // 入口文件，数组支持多入口
  entryPoints: ['./index.ts'],

  // 是否开启摇树优化
  treeShaking: true,

  // 是否独立打包
  bundle: true,

  // 解析配置
  loader: {
    '.js': 'js',
    '.ts': 'ts',
    '.jsx': 'jsx',
    '.tsx': 'tsx',
  },

  // 使用swc 为 es6 写一个插件
  plugins: [
    {
      name: "swc-loader",
      // esbuild 中插件的方法叫 setup，类似于 webpack 中的 apply
      setup(build) {
        // build 有各个阶段的方法
        // onLoad 阶段，第一个参数 filter 过滤文件 可以接收正则，第二个参数是回调函数
        build.onLoad({ filter: /\.(js|ts|jsx|tsx)$/}, (args) => {
          // args 是当前模块（文件）的信息，包含 namespace、path（路径）等 
          console.log('args------', args)
          // args------ {                                                      
          //   path: 'D:\\Projects\\demo\\typescript\\esbuild_demo\\index.ts', 
          //   namespace: 'file',                                              
          //   suffix: '',                                                     
          //   pluginData: undefined                                           
          // }              
          
          

          // 读到文件的内容，转为 utf-8 格式
          const content = fs.readFileSync(args.path, "utf-8")
          console.log('content------', content) 
          // content 会打印到 config.ts 的每一行代码，即内容

          // 转换函数,第一个参数是原始转换内容，第二个参数是配置项
          // 会返回 code（转换后的内容） 、map（就是sourcemap）
          const { code } = swc.transformSync(content, {
            filename: args.path
          })
          console.log('code-------', code)
          // export var a = 1;
          // export var b = "ikun";
          // var x = 1;
          // var fn = function() {
          //     return 123;
          // };
          // console.log(x, fn);

          

          return {
            contents: code
          }
        })
      },

    }
  ],
  
  // 出口
  outdir: "dist",
})