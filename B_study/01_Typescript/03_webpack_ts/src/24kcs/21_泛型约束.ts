(() => {
  // 泛型约束（约束，想到接口）
  // 对泛型有一些约束条件时，【泛型 extends 接口】

  // 例子：定义一个函数，返回参数的 length

  interface ILength {
    length: number
  }

  // <T extends ILength>：则 T 必须具有 length 属性 
  function getLength <T extends ILength> (x: T):number {
    return x.length
  }

  // 字符串有 length 属性
  console.log(getLength('aaaaaa'))
  // 数组有 length 属性
  console.log(getLength([123, 456, 789]))
  // 数值没有 length 属性，报错
  // console.log(getLength(123))

})()