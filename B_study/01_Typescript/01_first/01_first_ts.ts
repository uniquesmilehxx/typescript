(() => {
  // str 是 string 类型（编译成js后没有类型）
  function sayHi (str: string) {
    return '您好' + str
  }
  // let 会编译成 var
  let text = 'blue'
  console.log(sayHi(text))
})()