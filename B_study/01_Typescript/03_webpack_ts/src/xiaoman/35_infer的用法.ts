(() => {
  // infer 的用法

  // 条件类型的基本语法是：    T extends U ? X : Y
  //      - infer只能在条件类型的 extends 子句中使用
  //      - infer得到的类型只能在true语句中使用



  // 例 1： 定义一个类型，如果是数组类型，那就返回数组元素的类型，否则传入什么类型就返回什么类型

  // T[number]：T 是数组，number在这里是数组的索引，T[number]就是数组里的每个元素
  type TYPE<T> = T extends Array<any> ? T[number] : T

  type t1 = TYPE<string>
  // type t1 = string

  type t2 = TYPE<number[]>
  // type t2 = number

  type t3 = TYPE<(string | number)[]>
  // type t3 = string | number

  // 会把元祖变为联合类型！！
  type t31 = TYPE<[string, number]>
  // type t31 = string | number


  // 例2： 通过 infer 去简化上面的类型

  // infer 一般用在 extends 后面，这里就代表把 any 重新起名叫 U
  // U 不是泛型，只是充当一个占位符
  
  type TYPE2<T> = T extends Array<infer U> ? U : T

  type t4 = TYPE2<(string | number)[]>
  // type t4 = string | number

  type t5 = TYPE<string>
  // type t5 = string


  // 会把元祖变为联合类型！！
  type t6 = TYPE2<[string, number]>
  // type t6 = string | number



  // 例 3：处理为 never 后
  type TYPE3<T> = T extends Array<infer U> ? U : never

  type t7 = TYPE3<boolean>
  // type t7 = never



})()