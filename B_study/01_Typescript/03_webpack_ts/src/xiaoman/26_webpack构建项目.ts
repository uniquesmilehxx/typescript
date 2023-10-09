
// 在 demo/typescript/webpack_demo 中做示范

// 一、一大堆安装

// 生成 package.json 文件
// npm init -y

// 在项目下安装 typescript
// npm i typescript -D

// 安装 webpack
// npm i webpack -D

// webpack4 以上的还需要再装一个webpack-cli
// npm i webpack-cli -D

// 安装webpack-dev-server 自带热更新
// npm i webpack-dev-server -D

// 解析 ts
// npm i ts-loader -D

// html模板
// npm i html-webpack-plugin -D 

// 生成 tsconfig.json
// tsc --init

// 根目录手动新建 webpack.config.js



// 二、配置 webpack.config.js（详见文件）


// 三、配置 package.json 的 scripts 命令
    // "dev": "webpack-dev-server",
    // "build": "webpack"
// 配置完成之后 执行build，即打包到 dist 目录下