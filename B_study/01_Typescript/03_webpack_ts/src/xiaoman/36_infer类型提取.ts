(() => {
  // infer定义的占位符只能用在true语句中！！


  // 一、提取

  // 可用 infer 定义数组参数的每一项
  type Every<T extends any[]> = T extends [infer one, infer two, infer three] ? three : []
  type some = Every<[1, 2, 'a']>
  // type some = "a"



  // 提取数组的首项
  // ...any[]：数组解构
  type First<T extends any[]> = T extends [infer one, ...any[]] ? one : []
  type first = First<['a', 'b', 'c']>
  // type first = "a"


  // 提取数组最后一项
  type Last <T extends any[]> = T extends [...any[], infer last] ? last : []
  type last = Last<['a', 'b', 'ccc']>
  // type last = "ccc"


  // 二、剔除

  // pop 的实现：剔除的项可以直接用 unknow代替
  // type Pop <T extends any[]> = T extends [...infer rest, infer last] ? rest : []
  type Pop <T extends any[]> = T extends [...infer rest, unknown] ? rest : []
  type pop = Pop<[1, 2, 3, 4]>
  // type pop = [1, 2, 3]



  // shift 的实现：剔除的项可以直接用 unknow代替
  // type Shift <T extends any[]> = T extends [infer first, ...infer rest] ? rest : []
  type Shift <T extends any[]> = T extends [unknown, ...infer rest] ? rest : []
  type shift = Shift<[1, 2, 3, 4]>
  // type shift = [2, 3, 4]


})()