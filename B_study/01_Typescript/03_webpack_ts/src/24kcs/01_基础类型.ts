(() => {
  // 基础类型
  console.log('测试')

  // 布尔类型 -------------> boolean
  let flag: boolean = true
  // flag = 10 //报错
  console.log('flag:', flag)

  // 数值型-----------------> number
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  // a1 = '11111' //报错
  console.log('数值', a1, a2, a3, a4)

  // 字符串 -----------------> string
  let name: string = 'blue'
  console.log('string', name)

  // 字符串和数字之间能否拼接？拼接成新的字符串了
  let a5: string = '我有好多钱:'
  let a6: number = 1000000000
  console.log('字符串和数字之间能否拼接', a5 + a6) // 我有好多钱:1000000000

  // 总结：ts中变量一开始声明的时候是什么类型，后面赋值也只能用这个类型的数据

  // ------------------------------------------------------------------------------------------------------

  // null 和 undefined 是所有类型的子类型（可以把undefined、null赋值给其他类型的变量）
  let und: undefined = undefined
  let nul: null = null
  console.log('undefined、null', und, nul)
  let und_num: number = 100
  und_num = undefined // tsconfig中严格模式若开启，这一行会报错


  // 数组，2种定义方式
  // 1、let 变量名: 数据类型[] = [值1, 值2, 值3]
  let arr1:string[] = ['aaa'] 
  let arr11:string[][] = [['aaa'], ['bbb', 'ccc']] 
  // 2、泛型：let 变量名: Array<数据类型> = [值1, 值2, 值3]
  let arr2:Array<number> = [1, 2]
  console.log('数组', arr1, arr2, arr11)
  // 数组定义后，内部数据必须和定义的类型一致，否则会报错
  // arr1 = ['bbb', 123]
  // 但是我要是想定义不同类型的数组，怎么做呢？使用元祖




  // 元祖 Tuple：定义数组的时候，类型和个数一开始就已经限定了
  let tup: [string, boolean, number] = ['aaa', false, 123.123]
  console.log('元祖类型', tup)
  // 注意：元祖在修改时，也需要保持最初的设定， 否则会报错
  // tup = [false, 123, 'aaa']
  // 当然，对不同索引的数据使用方法时，也需要对应其类型，否则会报错
  // console.log(tup[1].split(''))
  console.log(tup[2].toFixed(2))


  // ---------------------------------------------------------------------------------------------

  // 枚举类型：为一组数值起名字，可通过名字来访问数值，也可通过数值得到名字

  // 枚举里面的每一个数据值都可以叫元素；每个元素都有自己的编号，编号从 0 开始递增 +1
  enum Color {
    red,
    green,
    blue
  }
  console.log('枚举Color', Color)
  console.log('枚举Color - 根据数值找名字', Color[1]) // green

  // 手动修改编号从1开始
  enum Color2 {
    red = 1,
    green,
    blue
  }
  console.log('枚举Color2', Color2)
  console.log('枚举Color2 - 根据数值找名字', Color2[3]) // blue

  // 全部手动指定编号
  enum Color3 {
    red = 2,
    green = 4,
    blue = 5
  }
  console.log('枚举Color3', Color3)
  console.log('枚举Color3 - 根据数值找名字', Color3[5]) // blue

  // 根据名字red找到值0，然后赋给color
  let color: Color = Color.red
  console.log('color', color) // 0
  

  let color2: Color2 = Color2.red
  console.log('color2', color2) //1

  let color3: Color3 = Color3.red
  console.log('color3', color3) //2


  // 日常使用场景
  enum Sex {
    male,
    female
  }
  console.log('Sex', Sex)

  // -------------------------------------------------------------------

  // any 类型
  let an: any = 100
  an = '改成字符串哈哈哈'
  console.log('any:', an)

  // 或者用在数组上：个数、类型不确定时
  let arrAny: any[] = [100, 'abc', false]
  let arrAny2: Array<any> = [200, 'abc', false]
  console.log('arrAny', arrAny, arrAny2)
  // 正常执行
  console.log(arrAny[1].split(''))
  // 对数值型执行split编译也没有报错，所以any有好处也有坏处
  // console.log(arrAny[0].split(''))


  //  -------------------------------------------------------

  // void 类型：表示没有任何类型
  // 用在函数没有返回值的时候
  function showMsg (msg: string) :void {
    console.log('对函数定义void', msg)
    // 因为定义函数为void类型，所以返回值出去会报错，返回undefined、null不会报错
    // return true
    // return undefined
    // return null
  }
  showMsg('hahaha')
  // 因为该函数没有返回值，打印的话会展示 undefined
  console.log(showMsg('hahaha')) // undefined

  // 定义void类型的数据，可以接收 undefined、null，但是意义不大
  let vd:void = undefined
  let vd2:void = null
  console.log('定义void类型的数据', vd, vd2)


  // --------------------------------------------------------------------

  // object 类型
  // 定义一个函数，参数是object类型，返回值也是object类型
  function getObj(obj: object) :object {
    console.log(obj)

    return {
      name: '哈哈哈',
      age: 18
    }
  }

  // console.log(getObj('1111')) // 错误
  console.log(getObj({ sex: '女' })) // 正确
  console.log(getObj(String)) // 正确  String.prototype.__proto__ = Object.prototype
  console.log(getObj(new String(111))) // 正确 函数顺着原型链找也是 Object.prototypr
  console.log(getObj(new Array([1, 2, 3]))) // 正确 同上


  // ---------------------------------------------------------------------------

  // 联合类型：取值可以是多种类型中的一种
  // 定义一个函数，参数可以是数值或字符串，将它转换为字符串形式并返回
  function toStr (str: string | number) :string {
    return str.toString()
  }

  console.log(toStr(1111))
  console.log(toStr('abc'))


  // -----------------------------------------------------------------------------

  // 类型断言

  // 定义一个函数，参数可以是数值或字符串，将它转换为字符串并返回长度
  function getLength (str: string | number) :number {
    
    // return str.toString().length

    // 将上面的写法优化，数值型不再 toString，number 才 toString

    // 红色字体（str.length）会报错，因为 str 不一定有 length 属性
    // if (str.length) {
    //   return str.length
    // } else {
    //   str.toString().length
    // }


    // 这时候我们需要告诉编译器，我们知道红色报错的位置是字符串，我知道我在干什么
    // 类型断言方式1：<类型>变量名
    // 类型断言方式2：变量 as 类型

    if ((<string>str).length) {
      return (str as string).length
    } else {
      return str.toString().length
    }
  }

  console.log('类型断言', getLength(123))
  console.log('类型断言', getLength('agdbdhjj'))


  // -----------------------------------------------------------------------

  // 类型推断
  // ts会在没有明确类型指定的时候 推测出一个类型

  // ts会推断为number类型
  let text = 100
  console.log('text', text)
  // 想再修改为其他类型，就会编译报错
  // text = 'aaa'

  // 一开始定义的时候没有赋值，会推断为any类型，修改时就不会报错
  let param
  param = 100
  param = 'aaa'
  

})()