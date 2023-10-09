// 类型注解
(() => {
  // 是一种轻量级的为函数或者变量添加的约束

  function showMsg (str: string) {
    return '测试111' + str
  }

  let msg = '22222'

  // 类型不匹配，报错
  // let msg = [1, 2, 3]

  console.log(showMsg(msg))

  // 不传参数，报错
  // console.log(showMsg())
})()