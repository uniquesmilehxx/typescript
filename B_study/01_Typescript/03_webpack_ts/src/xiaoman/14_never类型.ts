(() => {
  // never： 通常表示不存在的状态，或无法达到预期的状态


  type A = string & number
  // 这里 A 是一个永远不会存在的类型，所以推断为：
  // type A = never


  // 函数并不是没有返回值，而是抛出了异常，这里用 void 不合适，可以用 never
  function xm (): never {
    throw new Error('错误')
  }

  // 或者函数是死循环，也可以用 never 
  function xm2 (): never {
    while(true) {

    }
  }

  // never 属于底层的类型（bottom type），所以在联合类型中会被忽略掉
  type B = string | number | never
  // type B = string | number


  // never 可用于兜底逻辑
  type t = '唱' | '跳' | 'rap'   // 不会报错
  // type t = '唱' | '跳' | 'rap' | '篮球'  // 下面的error会报错：Type 'string' is not assignable to type 'never'
  function xm3 (value: t) {
    switch(value) {
      case '唱':
        break
      case '跳':
        break
      case 'rap':
        break
      default:
        // 兜底逻辑：将没有定义在 case 的情况，定义为 never类型
        // 后续若传入没在 case 中定义的情况，会报错，给编写者以提示
        const error:never = value
        break
    }
  }
})()