// 接口：是一种能力，一种约束而已
(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string,
    lastName: string
  }

  // 输出姓名
  function showName (person: IPerson) {
    return person.firstName + '_' + person.lastName
  }
  const person = {
    firstName: '郝',
    lastName: '笑笑'
  }

  console.log(showName(person))
})()