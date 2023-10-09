(() => {

  // 24kcs中 课程 17 对泛型也有详细记录，这里不做过多代码演示，仅记录差异

  // 泛型：动态类型！！！！！将类型作为变量使用

  // 1、函数使用泛型
  function xiaoman<T>(x: T, y: T): T[] {
    return [x, y]
  }
  function xiaoman2<T>(x: T, y: T): Array<T> {
    return [x, y]
  }

  // 会自动做类型判断，传参时不写类型也行
  xiaoman<number>(1, 2)
  xiaoman(1, 2)
  xiaoman(false, true)



  // 2、类型别名使用泛型
  // type A<T> = number | string | T
  type A<T> = T

  let a:A<boolean> = true
  let b:A<undefined> = undefined
  let c:A<null> = null
  let d:A<string> = 'abc'


  // 3、interface 使用泛型
  interface IXiaoman <T> {
    msg: T
  }

  class Xiaoman implements IXiaoman<string> {
    // msg: number // 报错
    // msg: string
    // msg: '111'
    msg:string = '111'
  }

  let data: IXiaoman<boolean> = {
    msg: false
  }


  // 4、多个泛型使用、泛型在定义时可以使用默认值

  function add <T = number, K = string> (x: T, y: K): Array<T | K> {
    return [x, y]
  }

  add<string, number>('111', 123)
  add('111', 123)


  // 5、实战中，泛型怎么使用的？

  // 定义一个 axios 请求
  const axios = {
    get<T> (url: string): Promise<T> {
      return new Promise((resolve, reject) => {
        let xhr: XMLHttpRequest = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } 
        }
        xhr.send(null)
      })
    }
  }
  interface Data {
    message: string
    code: number
  }
  axios.get<Data>('/public/xiaoman.json').then(res => {
    // 使用接口定义了返回类型，在使用的时候 res.code、res.message 也会有提示
    console.log('axios----', res.code, res.message)
  })



})()
