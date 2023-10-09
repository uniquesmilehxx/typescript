// proxy 代理，13个方法，参数一模一样
// reflect 代理，13个方法，参数一模一样
// mobx observable


// proxy代理 ,比如 会用在 vite 的代理配置中
// server : {
//   proxy: {
//     '/api': {
//       target: 'xxxxx'
//     }
//   }
// }

// proxy不只是代理接口的，是ES6新增的拦截器


// 一、proxy 基本用法

let person = {
  name: '小满',
  age: 26
}
// person.name // 取值
// person.name = 'blue' // 赋值


// proxy 接收两个参数
// 第一个参数 target，只接受 5 种参数：对象 数组 函数 set map
// 第二个参数 描述符 handler，里面有13个方法，可以拦截各种情况

let proxyPerson = new Proxy(person, {
  // 拦截取值操作
  // person name person
  get (target, key, receiver) {

  },

  // 拦截赋值
  // receiver 的存在，是为了避免函数嵌套过多时上下文错乱的情况，其实也就是target
  // person name 'blue' person
  set (target, key, value, receiver) {
    // set 要求返回 布尔值
    return true
  },


  // 拦截函数的调用
  apply () {

  },

  // 拦截 in 操作
  // 比如  'name' in person
  has (target, p) {
    console.log('has----------------target, p', target, p)
    return true
  },

  // 拦截 for in 操作
  // for (let key in xxx)
  ownKeys () {

    return []
  },


  // 拦截 new 操作符
  construct () {

    return {}
  },


  // 拦截删除操作
  deleteProperty (target, p) {
    return true
  }

})
console.log('========================================')




// 二、proxy 结合 reflect

let per = {
  name: '小满',
  age: 26
}

let perProxy = new Proxy(per, {
  // 取值
  get (target, key, receiver) {
    console.log('target, key, receiver', target, key, receiver)
    // reflect 与 proxy 功能一一对应，默认调的也是 get
    // return Reflect.get(targrt, key, receiver)

    // 也可以做一些自定义操作
    if (target.age > 18) {
      return '是成年人啦'
    } else {
      return target.age
    }
  },

  // 赋值
  set (target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    return true
  }
})

// 注意，这里操作的是它的代理！！！！
console.log(perProxy.age) // 是成年人啦
perProxy.age = 17
console.log(perProxy.age) // 17


console.log('====================================================')






// 三、Reflect 的使用

// 可以直接使用，比如作为对象的基础操作方法

let per2 = {
  name: '小满'
}
console.log(per2.name) // 小满
console.log(Reflect.get(per2, 'name', per2)) // 小满
console.log(Reflect.set(per2, 'name', '大满', per2)) // true
console.log(per2.name) // 大满


console.log('====================================================')




// 四、简单实现 mobx 的观察者模式 observable

// mobx 状态管理器
//    - 订阅者：管理变化后回调的函数列表
//    - 观察者：将传入的数据监听起来，并且在有变化时，执行订阅者管理的函数列表


// 订阅者的函数列表，set结构，内部是 function
const list: Set<Function> = new Set()
// 订阅者,管理函数列表
const autoRun = (fn: Function) => {
  if (!list.has(fn)) {
    list.add(fn)
  }
}

// 观察者
const observable = <T extends object> (params: T) => {
  return new Proxy(params, {
    set (target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver)
  
      // 可以自定义一些内容
      // 这里需要执行订阅者的回调函数，即 list 中所有函数
      list.forEach(fn => fn())
  
      return result
    }
  })
}

// 通过观察者创建数据
const proxyObservable = observable({
  name: '笑笑',
  attr: '真好看哈哈哈'
})
console.log('-----', proxyObservable.attr)

// 订阅者中新增一个函数
autoRun(() => {
  console.log('有变化了哈哈哈')
})

// 更新数据
proxyObservable.attr = '今天又好看了一点' // 有变化了哈哈哈
proxyObservable.name = 'blue' // 有变化了哈哈哈


