
// 一、全局变量会造成污染

// 如： 当下ts文件 定义一个a，在另一个文件也定义 a
// const a = '1111' // 报错：Cannot redeclare block-scoped variable 'a'

// 在ts中解决这个问题的方案？

// 1、export
//    任何包含顶级import 或 export的文件都会被当成一个模块
export const a = 100

// 2、namespace
namespace A {
  export const a = 200
}

console.log('命名空间调用', A.a)




// 二、命名空间一些其他使用

// 1、嵌套

// 与上面的 namespace A 会合并！！
namespace A {
  export namespace B {
    export const a = 300
  }
}
console.log('嵌套', A)
console.log('嵌套', A.a)
console.log('嵌套', A.B.a)


// 2、导入

import { G } from './20_fuzhu'
console.log('导入命名空间使用', G.test)



// 3、简化命名空间

import AAA = A.B
// const AAA = A.B // 试了一下用const也是可以的。。。。

console.log('简化命名空间', AAA.a)



// 4、命名空间的合并

// 在嵌套时已经不经意验证过了

namespace D {
  export const d1 = 100
}
namespace D {
  export const d2 = 200
}
console.log('命名空间的合并', D) // {d1: 100, d2: 200}






