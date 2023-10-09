(() => {

  // 元祖：数组的变种，类型固定

  let arr: [number, boolean] = [1, false]
  // 如果不手动设置类型，会将arr推断为联合类型的数组： arr: (number | boolean)[]


  // 按照设定的类型进行修改
  arr[0] = 666
  

  // 这样会报错，因为元祖长度定义的只有2
  // arr[2] = true


  // 可以使用 push 
  arr.push(100)
  // 越界的行为：不能 push 未定义的类型
  // arr.push('abc')


  // 如果想定义只读的元祖，const 也是不行，因为无法阻止 push，需要这样定义：
  let arr2: readonly[number, string] = [123, 'abc']
  // 以下的操作都会报错
  // arr2.push(234)
  // arr[0] = 10
  // arr[2] = 100

  // 如果想定义非必传属性：
  let arr3: readonly[x:number, y?:string] = [123]


  // 实际运用场景：比如后端返回了一个 excel 数据包，是元祖类型的数组
  const data: [string, string, number][] = [
    ['小满', '女', 22],
    ['小满', '女', 22],
    ['小满', '女', 22],
    ['小满', '女', 22],
    ['小满', '女', 22],
  ]



  // 查看某个索引位置值的类型：typeof arr[index]
  // 查看数组长度 arr.length 或 arr['length]
  console.log(arr, arr.length)
  console.log('typeof arr————————', typeof arr)
  console.log('typeof arr[0]————————', typeof arr[0])
  console.log('typeof arr["length"]————————', typeof arr['length'])
  console.log('typeof 3————————', typeof 3)


  type first = typeof arr[0]
  // type first = number


  type len = typeof arr['length']
  type len2 = typeof arr.length
  // type len = 2
  // 为什么不是 number 啊 ？？？？？？？？？？？？ 想不通想不通


  let t = typeof arr['length']
  console.log(t)










})()