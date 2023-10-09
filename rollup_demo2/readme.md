# 28 实战编写插件

// 实现localstorage 的存取，并且支持设置过期时间

// 在 rolluo_demo2/src/index.ts 中示范

// enum 一般用来存常量
// type用来放 interface、type 等类型限制

// 新建package.json
// npm init -y 
// 设置 “type: module”

// 新建 tsconfig.json
// tsc --init

// 手动创建目录
// src/enum/index.ts ———— 存常量
// src/type/index.ts ———— 存接口等类型限制
// src/index.ts ———— 入口文件
// index.html ———— 测试打包后的插件
// rollup.config.js ———— 定义打包配置


// 打包 
// cdm 执行 rollup -c
// 或在package.json 中 设置 scripts: build:rollup -c

// 打包后在 index.html 中测试插件的使用
// 启动 index.html 可以使用 liveserver（右键选择使用liveserver打开）



# 29 编写发布者订阅模式

// 什么是发布订阅模式？
//    比如原生js 中的 addEventListener、removeEventListener；
//    比如 vue 中的 EventBus（全局事件总线）（$emit、$on）
//    收集一些事件，统一处理
//    发布者 $emit，订阅者 $on，再加一个调度者（调度中心）


// 仍然在 rollup_demo2 里面演示
// package.json 新增了命令 dev，可直接启动，会有热更新