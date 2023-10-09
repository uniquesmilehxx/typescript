(() => {
  // 多个泛型参数的函数
  // 泛型参数一般用任意大写字母即可，常规使用的是 T、K、V 这些

  function getArr <K = number, V = string> (value1: K, value2: V) :[K, V] {
    return [value1, value2]
  }
  const arr = getArr<string, number>('jack', 123.321)
  console.log('arr', arr)

  // split、toFixed有代码补全
  console.log(arr[0].split(''))
  console.log(arr[1].toFixed(2))
})()