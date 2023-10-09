(() => {
  

  // 一、Partial：给每个属性加上？

  // keyof：将一个接口对象的全部属性取出来变成联合类型
  // in：循环

  type Person = {
    name: string
    age: number
    sex: string
  }
  // 参数<T>
  // 鼠标放上去Par，可发现每个属性都加了一个?
  type Par = Partial<Person>
  // type Par = {
  //   name?: string;
  //   age?: number;
  //   sex?: string;
  // }


  // 原理：我们手动实现
  type _Partial <T> = {
    [key in keyof T] ?: T[key]
  }
  type _Par = _Partial<Person>



  // 二、Pick：取出指定属性及它的类型

  // 参数 <T, K extends keyof T>，第二个参数是第一个参数的 key 的一部分构成的 联合类型

  type Pic = Pick<Person, 'name' | 'age'>
  // 取出的就是指定 key 所组成的 type
  // type Pic = {
  //   name: string;
  //   age: number;
  // }



  // 原理,手动实现
  type _Pick <T, K extends keyof T> = {
    [key in K]: T[key]
  }
  type _Pic = _Pick<Person, 'name' | 'age'>
  type _Pic2 = _Pick<Person, 'name' | 'age'>

})()