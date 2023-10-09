(() => {


  // 1、Readonly

  // Readonly 和 Partial 比较像，将每个属性变为只读

  type Person = {
    name: string 
    age: number
    sex ?: string
  }
  type Read = Readonly<Person>
  // type Read = {
  //   readonly name: string;
  //   readonly age: number;
  //   readonly sex?: string;
  // }



  // 然后我们来手写一下

  type _Readonly<T> = {
    readonly [key in keyof T] : T[key]
  }

  type _Read = _Readonly<Person>
  // type _Read = {
  //   readonly name: string;
  //   readonly age: number;
  //   readonly sex: string;
  // }



  console.log('===============================================')



  // 2、Record（用在对象上，第一个参数约束 key，第二个参数约束 value）

  // 这个有点难理解，我们先看源码

  // type Record <K extends keyof any, T> = {
  //   [P in K]: T
  // }
  // 或
  // type Record<K extends string | number | symbol, T> = { 
  //   [P in K]: T;
  // }


  // keyof any：等价于 = keyof  string | number | symbol
  // 帮我们同时约束了 key 和 value
  //      key 是 第一个参数的类型 或 值的所有(更常用，所有值都要当做 key 在对象中实现)
  //      value 是第二个参数 T



  
  // 使用示例 1：第一个参数如果传具体的 key, type使用时每个 key 需要被具体设置
  type Rec = Record<'A' | 'B' | 'C', number>
  // type Rec = {
  //   A: number;
  //   B: number;
  //   C: number;
  // }

  let obj: Rec = {
    A: 1,
    B: 2,
    C: 10
  }
  console.log('obj1-------', obj)


  // 使用示例 2：第一个参数传具体的值，可以是 string | number | symbol 的任意类型
  type Rec2 = Record<'A' | 2, boolean>
  // type Rec2 = {
  //   A: boolean;
  //   2: boolean;
  // }

  let obj2: Rec2 = {
    A: true,
    2: false
  }
  console.log('obj2-------', obj2)



  // 使用示例 3：第一个参数如果传类型，使用时每个key都要对应上这个类型
  type Rec3 = Record<string, number>
  // type Rec3 = {
  //   [x: string]: number
  // }

  let obj3: Rec3 = {
    A: 1,
    adc: 2,
    10: 100,
    // '10': 100 // 这里会报错 key重复，由此可见，上面的 key 10 自动将 10 转为了 '10'
    // [Symbol('111')]: false // 这里不报错。。。。。。
  }
  console.log('obj3-------', obj3)



  // 使用示例 4
  type Rec4 = Record<number | symbol, boolean>
  // type Rec4 = {
  //   [x: number]: boolean;
  //   [x: symbol]: boolean;
  // }
  
  let obj4: Rec4 = {
    1: true,
    [Symbol('111')]: false,
    2: false,
    // 'a': false // 报错，key类型不是 number 或 symbol
  }
  console.log('obj4-------', obj4)



  // 使用示例 5：路由信息的使用
  type page = 'home' | 'login' | 'user'
  type pageInfo = {
    title: string,
    needLogin: boolean
  }

  let obj5: Record<page, pageInfo> = {
    home: { title: '1111', needLogin: false },
    login: { title: '1111', needLogin: false },
    user: { title: '1111', needLogin: true },
  }
  console.log('obj5---------', obj5)


  console.log('=============================================================')

  // 本节课程内容到此结束，仍然有一些高级类型未在课程提到



  // 3、Required

  // 与 Readonly 相似，Required 是把每个属性变为必填

  // 源码：-? 意思是移除可选属性
  type _Required<T> = {
    [P in keyof T]-?: T[P]
  }

  type Person2 = {
    name ?: string
    age: number
    sex ?: string
  }

  type per2 = _Required<Person2>
  // type per2 = {
  //   name: string;
  //   age: number;
  //   sex: string;
  // }




  // 4、Exclude：剔除指定的类型

  // 源码：如果 T 是 U 的子类型则返回 never 不是则返回 T
  // 白话：从 T 出 剔除 U 中出现的类型；从 T 中挑选出 U 中没出现的类型
  type Exclude<T, U> = T extends U ? never : T

  type A = string | number | boolean
  type B = string | boolean | symbol
  type C = string

  type exc = Exclude<A, B>
  // type exc = number

  type exc2 = Exclude<A, C>
  // type exc2 = number | boolean



  // 5、Extract（提取）：与 Exclude 相反

  // 源码：如果 T 是 U 的子类型则返回 T 不是则返回 never
  // 白话：从 T 中 找出 在 U 中出现的类型
  type Extract<T, U> = T extends U ? T : never
  
  type D = string | number | boolean
  type E = number
  type F = string | number | symbol

  type ext = Extract<D, E>
  // type ext = number

  type ext2 = Extract<D, F>
  // type ext2 = string | number





  // 6、Omit 剔除，与 Pick 相反，剔除给定的 key  （omit:省略、遗漏、删掉）

  // 源码
  type _Omit<T, K extends string | number | symbol> = { 

    // type Exclude<T, U> = T extends U ? never : T

    [P in Exclude<keyof T, K>]: T[P];
  }
  // 或
  type __Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

  type Person3 = {
    name ?: string
    age: number
    readonly sex: string
    hobby: string
    height: number
  }

  
  type per3 = _Omit<Person3, 'hobby' | 'height' | 'weight'>
  // type per3 = {
  //   name?: string;
  //   age: number;
  //   readonly sex: string;
  // }




  // 7、NonNullable

  // 从泛型 T 中排除掉 null 和 undefined

  type nonBefore =  string | number | boolean | symbol | any | undefined | null | never | unknown
  type nonBefore2 = string | undefined | boolean | null

  type non = NonNullable<nonBefore>
  // type non = any

  type non2 = NonNullable<nonBefore2>
  // type non2 = string | boolean



  // 8、Parameters

  // 以【元组】的方式获得【函数的入参类型】

  // 源码
  // type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

  // 例子
  type Para = Parameters<(name: string, age: number) => any>
  // type Para = [name: string, age: number]
  const para: Para = ['abc', 123]

  // 
  type Para2 = Parameters<(a: string, b: boolean) => boolean>
  // type Para2 = [a: string, b: boolean]
  
  type paraFn = (a: string, b: boolean) => boolean
  type Para3 = Parameters<paraFn>
  // type Para3 = [a: string, b: boolean]



  // 9、ConstructorParameters

  // 以【元祖】的方式获得 【构造函数的入参类型】

  // 源码：
  type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;


  // 使用
  type Con = ConstructorParameters<new (name: string) => any>
  // type Con = [name: string]
  const con: Con = ['blue']

  // 联合类型
  type Con2 = ConstructorParameters<(new (name: string) => any) | (new (age: number) => number)>
  // type Con2 = [name: string] | [age: number]
  const con2: Con2 = ['blue']
  const con22: Con2 = [123]

  // 多个参数
  type Con3 = ConstructorParameters<new (name: string, age: number) => any>
  // type Con3 = [name: string, age: number]
  const con3: Con3 = ['blue', 123]


  // 10、ReturnType

  // 获得【函数】【返回值的类型】

  // 源码：
  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;


  // 使用
  type Ret = ReturnType<() => void>
  // type Ret = void

  type Ret2 = ReturnType<() => boolean>
  // type Ret2 = boolean

  type Ret3 = ReturnType<() => string | number>
  // type Ret3 = string | number


  // 11、InstanceType

  // 获得【构造函数】【返回值的类型】

  // 源码
  type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

  // 使用
  type Ins = InstanceType<new (age: number) => number>
  // type Ins = number

  type Ins2 = InstanceType<new () => number>
  // type Ins2 = number



})()