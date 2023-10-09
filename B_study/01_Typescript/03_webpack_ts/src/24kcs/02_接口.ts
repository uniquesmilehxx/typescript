(() => {
  // 接口：是对象的状态(属性)和行为(方法)的抽象(描述)
  // 是一种规范、规则、能力、约束
  console.log('接口')

  // 例子：     创建人的对象
  // 只读:      readonly 属性名（定义只读变量时用 const，只读属性用 readonly）
  // 可有可无：    属性名 ?:
  interface IPerson {
    // 声明只读属性
    readonly name: string;
    // 可读可写
    age: number;
    // 可读可写
    number: number
    // 非必传（可有可无）
    sex ?: string
  }

  const person:IPerson = {
    name: 'blue',
    age: 18,
    number: 4103221996,
    // 可传可不传
    sex: '女',
  }

  console.log('person--', person)

  // age 属性是可读可写的
  person.age = 16
  console.log('person--', person)

  // name 属性是只读的
  // person.name = '哈哈'

})()