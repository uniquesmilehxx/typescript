// 在 demo/typescript/esbuild_demo 中做示范
// esbuild + swc


// 一、esbuild
// esbuild（官网：https://esbuild.bootcss.com/）
// 由 go 语言编写，多线程，速度是js的几十倍


// esbuild 构建速度非常之快，只有 0.33 秒
// parcel：32.48秒
// rollup + terser：34.96秒
// webpack5：41秒


// 支持 ES6 和 CommonJS 模块
// 支持对 ES6 模块进行 tree shaking
// API 可同时用于 JavaScript 和 Go
// 兼容 TypeScript 和 JSX 语法
// 支持 Source maps
// 支持 Minification
// 支持 plugins


// 二、swc
// swc 是用 rust 语言写的，是 用来替代 babel 的（es6 转 es5 等）
// 比 babel 最少快 20 倍


// 三、初始化构建

// 生成 package.json 文件
// npm init -y 

// 生成 tsconfig.json
// tsc --init

// 安装相关依赖
// npm i  @swc/core  esbuild 

// 如果需要支持 jsx、tsx 需要安装 @swc/helpers ，这里暂不安装
// npm i @swc/helpers

// 根目录新建：
// index.ts
// index.html
// config.ts

// 全局安装了 ts-node，因为下面用到了 ts-node 的命令行
// npm install -g ts-node

// 安装 @types/node，否则 ts 中引入 node 会报错
// npm i @types/node --save-dev


// 四、修改配置

// tsconfig.json 修改以下三个配置，否则用不了高级语法
// 修改 target 为 "ESNext"
// 修改 Module 为 "ESNext"
// 修改 moduleResolution 为 "node"


// config.ts 中书写配置，详见文件


// cmd 执行 
// tsc-node-esm config.ts
// 则会执行打包，可见 dist 目录下 已转为 es5 的代码
