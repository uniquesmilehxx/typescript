(() => {
  // 全局安装 ts-node
  // npm i ts-node -g

  // 生成 package.json 文件
  // npm init -y 

  // 安装 ts声明文件
  // npm i @types/node -D

  // 然后就可以用 ts-node 直接执行 ts 文件
  // ts-node xx.ts



  // any 任意类型     
  // unknown 不知道的类型

  // 1、顶级类型（top type）：any、unknown
  // 2、Object 第二大
  // 3、Number String Boolean
  // 4、number string boolean
  // 5、1  'abc'  true
  // 6、never

  
  // |     any    |    unknown   |
  // |          Object           |
  // | Number | String | Boolean |
  // | number | string | boolean |
  // |   1    |  'abc' |  false  |
  // |          never            |


  // 排序越靠前的类型，可以包含下面等级的类型
  // 比如定义为 any、unknown的类型，可以赋值成 2、3、4、5、6中的所有类型
  // let a:any = []
  let a:unknown = []
  a = 1
  a = false
  a = 'mike'
  a = Symbol




  // 但是 unknown 和 any 不同的地方：
  // 1、any可以和任意值互相赋值
  let b: any = []
  let c: number = 123
  b = c
  c = b
  // 而 unknown 可以接收其他类型的值，只能赋值给自身类型或者 any
  let d: unknown = []
  d = c
  b = d
  // c = d // 这里会报错



  // 2、unknown 因为未知，所以就算定义为对象，也读不到里面的属性，方法也不能调用
  let e:unknown = { 
    name: 'blue',
    play: () => {}
  }
  // e.name   //报错：Property 'name' does not exist on type 'unknown'
  // e.play // 报错：Property 'play' does not exist on type 'unknown'
  // any类型是可以的
  let f:any = { 
    name: 'blue',
    play: () => {}
  }
  f.name
  f.play()



  // 3、正因为特性2，unknown 类型 比 any 类型更加安全，any 会丢失一些类型检查
  // 所以不知道定义什么类型的时候，可以考虑定义成 unknown，再考虑 any 类型







})()