// 什么是发布订阅模式？
//    比如原生js 中的 addEventListener、removeEventListener；
//    比如 vue 中的 EventBus（全局事件总线）（$emit、$on）
//    收集一些事件，统一处理
//    发布者 $emit，订阅者 $on，再加一个调度者（调度中心）


// 仍然在 rollup_demo2 里面演示
// package.json 新增了命令 dev，可直接启动，会有热更新