(() => {
  console.log('函数类型')

  // 函数类型：通过接口的方式 作为函数的类型 来使用
  // 为了使用接口表示函数类型、我们需要给接口定义一个调用签名

  // 白话：定义函数的 参数类型 和 返回值类型

  interface ISearchFun {
    // (参数类型) 返回值类型
    (search: string, target: string) : boolean
  }

  // 使用：感觉代码很多很冗余？
  const exitStr: ISearchFun = function (search: string, target: string) : boolean {
    return search.indexOf(target) > 0
  }


  // 但是，与不使用函数类型的区别在于：函数的参数名不需要与接口里定义的名字相匹配
  const exitStr2: ISearchFun = function (searchNew: string, targetNew: string) : boolean {
    return searchNew.indexOf(targetNew) > 0
  }

  console.log(exitStr('我又瘦了', '瘦'))
  console.log(exitStr('我又瘦了', '胖'))

  console.log(exitStr2('我又瘦了', '瘦'))
  console.log(exitStr2('我又瘦了', '胖'))


})()