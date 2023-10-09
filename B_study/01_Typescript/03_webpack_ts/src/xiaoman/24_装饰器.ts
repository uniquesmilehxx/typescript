
// 装饰器（需要把 tsconfig.json 中 experimentalDecorators 设置为 true）
// 类装饰器  ClassDecorator
// 装饰器工厂
// 方法装饰器 MethodDecorator PropertyDescriptor
// 参数装饰器 ParameterDecorator
// 属性装饰器（用的不多） PropertyDecorator


// @xxx，装饰器内部会立即执行，装饰器内部若还有普通方法，调用后才执行




// 一、类装饰器 ClassDecorator（回传的target,是构造函数，不是原型对象）
// 功能 & 使用场景：不想破坏原有的类的结构，又不想去读内部的代码逻辑，只想给类增加一些新的属性或方法，可对该类使用装饰器

// 1、简单使用
const DecoratorClassDemo: ClassDecorator = (target) => {
  console.log('target', target)
  // 回传的 target 是调用者的构造函数
  // 可以额外定义属性、方法
  target.prototype.color = 'blue' // 若需要防止重名，可以加下划线，如 __color = 'blue'
  target.prototype.showColor = () => {
    console.log('this', this, target.prototype.color) // {} blue
  }
  console.log('target.prototype', target.prototype) // {color: 'blue', showColor: ƒ, constructor: ƒ}
}

// 写法一：@xx，若担心写法浏览器不支持，可以使用写法二
@DecoratorClassDemo
class Http {
  // ....原有封装了几百行的代码
  // 不想读里面的逻辑，又想加一些东西，并且不破坏原有的结构，可以考虑在外层使用装饰器
}
// 写法二：xx(className)
// DecoratorClassDemo(Http)

// 将类实例化后，可以访问到装饰器里新增的属性和方法
const http = new Http() as any
console.log('http.color', http.color, http.__proto__) // blue, {color: 'blue', showColor: ƒ, constructor: ƒ}
http.showColor()

// 2、想要传参数的话怎么办？装饰器工厂（普通函数内部将装饰器返回，其他逻辑正常处理，比如参数接收和使用）
const DecoratorClassDemo2 = (msg: string, age: number) => {
  const fn: ClassDecorator = (target) => {
    target.prototype.msg = msg
    target.prototype.age = age
  }
  return fn
}
// DecoratorClassDemo2 是装饰器，我们可以先把它定义为普通函数（保证参数的接收），然后在其内部返回一个装饰器函数即可
@DecoratorClassDemo2('hahaha', 18)
class Http2 {
  // .....
}
const http2 = new Http2() as any
console.log('类装饰器传参---', http2.msg)
console.log('类装饰器传参---', http2.age)
console.log("=====================================================")





// 二、方法装饰器 MethodDecorator PropertyDescriptor
// 顾名思义，就是对方法使用装饰器，使用方式和类相似，若要传参，也是可以使用函数返回装饰器
// 回传：target, propertyKey, descriptor
//       target: 调用者的原型
//       propertyKey： 调用者的 key(方法名字)
//       descriptor：调用者的描述
// 方法装饰器想要回调数据给调用者，需要 把 descriptor 声明为 PropertyDescriptor，通过 descriptor.value(xxx) 返回


import axios from 'axios'

const Get = (url: string) => {
  const fn: MethodDecorator = (target, propertyKey, descriptor: PropertyDescriptor) => {
    // {constructor: ƒ, getList: ƒ}
    // getList
    // {writable: true, enumerable: false, configurable: true, value: ƒ}
    console.log('target, propertyKey, descriptor', target, propertyKey, descriptor)

    // 这里为了方便演示，使用axios
    axios.get(url).then(res => {
      // 拿到结果后通过 descriptor 的 value 返回（注意value是个函数）
      descriptor.value(res.data) // 这样直接调用为什么不对呢？（需要在上面先把 descriptor 声明为 PropertyDescriptor）
    })
  }
  return fn
}

class Http3 {
  // 对 getList  使用 方法装饰器 Get
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=1&size=10')
  getList (data: any) {
    console.log(data)
  }

  // 同样的方法也可以创建 post 装饰器
  // @Post
}
console.log("=====================================================")




// 三、参数装饰器 ParameterDecorator
// 顾名思义，对参数使用装饰器
// 回传 target, propertyKey, parameterIndex
//      target：原型
//      propertyKey：方法名称
//      parameterIndex：该参数处于对应方法参数的索引位置（是第几个参数）

// 需要用到插件 reflect-metadata：npm i xxx
//      es6新增的 reflect，使用元数据
//      tsconfig 中需要将 emitDecoratorMetadata 开启
//      Reflect.defineMetadata 存入元数据
//      Reflect.getMetadata 取出元数据



// 还是用上面的例子，不要偷懒，再敲一遍巩固
import 'reflect-metadata'

const Result = () => {
  const fn: ParameterDecorator = (target, propertyKey, parameterIndex) => {
    // {constructor: ƒ, getList: ƒ} getList 0
    console.log('target, propertyKey, parameterIndex', target, propertyKey, parameterIndex)

    // function Reflect.defineMetadata(metadataKey: any, metadataValue: any, target: Object): void
    // metadataKey 所要存元数据的 key
    // metadataValue 对应的 value
    // target 存入的目标
    Reflect.defineMetadata('key', 'result', target)
  }
  return fn
}


const Get2 = (url: string) => {
  const fn: MethodDecorator = (target, propertyKey, descriptor: PropertyDescriptor) => {
    axios.get(url).then(res => {
      // 在这里取出所存元数据的 key 所存的 value(字符串 result) ,看返回的数据中有没有这个值，有的话直接返回
      // function Reflect.getMetadata(metadataKey: any, target: Object): any 
      const k = Reflect.getMetadata('key', target)

      descriptor.value(k ? res.data[k] : res.data)
    })
  }
  return fn
}
class Http4 {
  @Get2('https://api.apiopen.top/api/getHaoKanVideo?page=1&size=10')

  // 比如：对这里的 data 使用装饰器 Result,自动取出 data 中的 result 属性
  // @Result 优先于 @Get2 先执行，在 @Result 存元数据，在 @Get2 中取元数据

  // getList(name: string, @Result() data: any) {  //比如这个情况下，索引就是1

  getList(@Result() data: any) {

    console.log(data)
  }
}
console.log("=====================================================")





// 四、属性装饰器 PropertyDecorator（用的不多，仅做了解）
// 属性的装饰器
// target：调用者的原型对象
// propertyKey: 调用者的名字


const Color: PropertyDecorator = (target, propertyKey) => {
  // type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void

  // {constructor: ƒ} color
  console.log('target, propertyKey', target, propertyKey)
}
class Http5 {
  // 对 属性color 使用 属性装饰器Color
  @Color
  color:string
  constructor () {
    this.color = 'blue'
  }
}
