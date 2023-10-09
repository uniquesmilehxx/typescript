(() => {
  // 可选参数、默认参数
  // 可选参数：函数在定义的时候，内部的参数使用了 ? 修饰，则表示该参数可传可不传
  // 默认参数：函数在定义的时候，参数有自己的默认值（所以也是可传可不传）

  // 定义一个函数，传入姓氏和名字，得到姓名；
  // 如果不传入任何内容，那么返回默认的姓氏
  // 如果只传入姓氏，那就返回姓氏
  const getFullName = function(firstName: string = '张', lastName?: string): string {
    if (!lastName) {
      return firstName
    }
    return firstName + lastName
  }

  // 第一个参数有默认值，所以不传也不会报错
  console.log(getFullName())

  // 第二个参数是可选参数，所以不传也不会报错
  console.log(getFullName('李'))

  console.log(getFullName('李', '四'))

})()