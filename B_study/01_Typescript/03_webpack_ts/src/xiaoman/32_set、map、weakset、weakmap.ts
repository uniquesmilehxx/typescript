(() => {
  // set map weakset weakmap


  // 一、set
  // 天然去重，引用类型除外
  // 增删改查：add、has、delete、clear
  // 循环：forEach、entries、keys、for...of(内置的有iterator迭代器)
  // 长度： xxx.size

  // 天然去重，引用类型除外
  let set: Set<number> = new Set([1, 2, 3, 1, 2, 3, 4, 5]) // Set(5) {1, 2, 3, 4, 5}
  // let set = new Set([1, 2, 3, 1, 2, 3, 4, 5, {a: 1}, {a: 1}]) // Set(5) {1, 2, 3, 4, 5, Object, Object}
  console.log('set', set, set.size)

  set.add(7)
  console.log(set.has(7)) // true

  set.delete(5)
  console.log(set.has(5))

  set.forEach(item => {
    console.log('forEach', item)
  })

  console.log('entries-----', set.entries()) // SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4, 7 => 7}
  console.log('keys------', set.keys()) // SetIterator {1, 2, 3, 4, 7}

  for (let key of set) {
    console.log('for of---', key, set[key])
  }

  set.clear()
  console.log(set)

  console.log('=======================================================')


  // 二、map
  // key 可以是引用类型，比如数组、对象
  // 增删改查：set get has delete clear
  // 循环：forEach、entries、keys、for...of
  // 长度: .size

  let obj = {
    name: '小满'
  }
  let arr = [1, 2, 3, 4]

  let map:Map<object, any> = new Map()

  map.set(obj, 123)
  map.set(arr, '我是数组')
  console.log('map-------', map, map.size)
  console.log(map.get(obj))
  console.log(map.has(obj))

  map.forEach(item => {
    console.log('forEach-----', item)
  })

  console.log('entries--------', map.entries())
  console.log('keys--------', map.keys())


  for(let key of map) {
    console.log('for of----', key)
  }

  map.delete(obj)
  console.log('map-------', map)

  map.clear()
  console.log('map-------', map)


  console.log('=======================================================')


  // 三、weakset、weakmap
  // weak 弱引用， 不会被计入垃圾回收机制
  // GC时间不稳定，所以不允许取键值、不允许遍历
 



  // weakmap 
  //    key 只能是引用类型
  //    允许 get has set delete 
  //    不允许读取entries、keys，不允许遍历，不允许 clear

  let o1 = { name: 'blue' }   // 1次

  // 浅拷贝，拷贝的只是引用
  let x = o1 // 正常赋值，2次

  // key 只能是 引用 类型
  let wm: WeakMap<object, any> = new WeakMap()

  // 将 o1 用于 wm 的 key，但是不会增加 o1 的使用次数，因为是弱引用不参与计数
  wm.set(o1, 2222)
  console.log('weakmap---get', wm.get(o1))

  // wm.delete(o1)
  // console.log('weakmap---get', wm.get(o1))  // undefined


  // 释放第一个，不影响第二个地方 x 的访问（因为是浅拷贝）
  o1 = null
  // console.log('x-----', x) // 测试下面的内容时，这一行打印需要去掉，否则也是在占用


  // 但是这时候如果把第二个也释放掉，wm 中就无法访问了（我发现这里注释掉，wm中也无法访问。。。。？？？？？？？）
  // x = null

  // 立刻访问是能看到，但是取不出来，因为垃圾回收需要时间（至少200ms，不稳定）
  console.log('回收前', wm, wm.get(o1))  // WeakMap {{…} => 2222}   undefined


  // 垃圾回收机制需要一定时间，所以这里在延时器里面进行验证
  setTimeout(() => {
    console.log('回收后的wm', wm.get(o1)) // undefined
    console.log('回收后的wm', wm)
    // WeakMap {}
    //   [[Entries]]
    //   No properties
    //   [[Prototype]]
    //   : 
    //   WeakMap
  }, 2000)

  console.log('=======================================================')



  // 正式因为GC时间不稳定，所以弱引用不允许 取键名、循环
  // entries、keys、循环都不支持



  // weakset
  //    只能存引用类型
  //    允许 add has delete
  //    不允许取键值、不允许循环

  let ws1: WeakSet<object> = new WeakSet([{ a: 1 }])

  let ws: WeakSet<object> = new WeakSet()

  
  let o2 = {a: 1}
  ws.add(o2)

  // 如果不加这句打印，o2会被回收（因为是弱引用）。。下面ws就打不出来，ws.has(o2)是true
  // 加上之后, ws可以正常打印
  // console.log('o2--', o2)


  console.log('weakset------', ws, ws.has(o2))

  console.log('=======================================================')


})()