// ts中书写js中的类
(() => {
  interface IPerson {
    firstName: string,
    lastName: string
  }

  class Person {

    // 定义公共的字段（属性）
    firstName: string
    lastName: string
    fullName: string

    // 构造器函数
    constructor (firstName: string, lastName: string) {
      // 更新属性
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = this.firstName + '-----' + this.lastName
    }
  }

  function showFullName (person: IPerson) {
    return person.firstName + '_' + person.lastName
  }

  const person = new Person('周', '瞿')
  console.log(person)
  console.log(showFullName(person))

})()