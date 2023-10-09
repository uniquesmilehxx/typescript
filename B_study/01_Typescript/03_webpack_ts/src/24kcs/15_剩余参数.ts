(() => {
  // 剩余参数（rest参数：...args）
  // 剩余参数 必须放在函数声明时 所有参数的最后（前面有几个不限制）

  // ...args 将所有剩余的参数放在一个字符串的数组中（string []）
  function showMsg (str1: string, str2: string, ...args: string []) {
    console.log(str1) // 'a'
    console.log(str2) // 'b'

    // 根据 args 可取出剩余参数（字符串数组）
    console.log(args) // ['c', 'd', 'e', 'f']
  }

  showMsg('a', 'b', 'c', 'd', 'e', 'f')


  function showMsg2 (...args: number[]) {
    console.log(args)
  }

  showMsg2(1, 2, 3)

})()