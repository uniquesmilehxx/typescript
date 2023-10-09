// 1、对象的混入
interface Name {
  name: string;
}
interface Age {
  age: number;
}
interface Sex {
  sex: string;
}

const a: Name = { name: "blue" };
const b: Age = { age: 18 };
const c: Sex = { sex: "女" };

console.log("111", a, b, c); // {name: 'blue'} {age: 18} {sex: '女'}
Object.assign(a, b, c);
console.log("222", a, b, c); // {name: 'blue', age: 18, sex: '女'} {age: 18} {sex: '女'}

// 2、类的混入（懵逼）
// 类 implemnts 类

class A {
  type: boolean;
  changeType() {
    this.type = !this.type;
  }
  constructor() {
    console.log("这是A的构造函数");
  }
}

class B {
  name: string;
  getName() {
    return this.name;
  }
  constructor() {
    console.log("这是B的构造函数");
  }
}

// 使用 【 implements 】关键字 ！！！！！！
// 将 A、B 当做接口去实现，所以内部要定义好对应的成员（只做初始定义，只是占位符）
class C implements A, B {
  type: boolean = false;
  name: string = "blue";
  changeType: () => void;
  getName: () => string;
}

mixins(C, [A, B]);
function mixins(curClass: any, itemClass: any[]) {
  itemClass.forEach((item) => {
    // 找出原型上的属性或方法，复制到 curClass 的原型上去
    console.log("------", item, Object.getOwnPropertyNames(item.prototype));
    const keys = Object.getOwnPropertyNames(item.prototype);
    keys.forEach((key) => {
      curClass.prototype[key] = item.prototype[key];
    });
  });
}

// 这里就是混合后的Class C 了
console.log("C--------", C, Object.getOwnPropertyNames(C.prototype));
const minxinC = new C();
console.log("minxinC------", minxinC);
minxinC.changeType();
console.log("minxinC------", minxinC);
