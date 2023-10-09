

// 通过reference引入文件（需要把 tsconfig 中的 module 改为 amd 或 system，outFile 改成需要的路径）
// 仍然不生效，算了先不管这里，知道是一个引入文件的方式就行
/// <reference path="20_fuzhu.ts"  />
namespace ReferenceTest {
  export const test2 = 22222
}
console.log('通过reference引入文件', ReferenceTest)





// 也可以引入声明文件，使用types属性（这里引入的就是通过 npm install @types/node 安装后，node_modules/@types下对应的的声明文件 index.d.ts）
/// <reference types="node" />

