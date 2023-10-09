(() => {
  // 难理解，多看几遍！！！

  // 一、生成器（Generator）
  // *标志
  // 函数内部 yield 标志暂停
  // next手动控制执行进度
  // next返回 { value: xxx, done: boolean }

  function* gen() {
    console.log("开始执行");
    yield Promise.resolve(1);
    yield 2;
    yield 3;
    yield 4;
    yield 5;

    // 第 6 次 才会执行
    console.log("结束执行");
  }

  const xiaoman = gen(); // 不执行，只是赋值
  console.log("xiaoman", xiaoman); // Generator类型

  // 每一次调用 next，都会执行到下一个 yield，返回的都是一个对象 { value: xxx, done: boolean }
  // - value: 当前 yield 后面返回的值
  // - done：是否执行完毕
  console.log(xiaoman.next()); // 开始执行、{value: Promise, done: false}
  console.log(xiaoman.next()); // {value: 2, done: false}
  console.log(xiaoman.next()); // {value: 3, done: false}
  console.log(xiaoman.next()); // {value: 4, done: false}
  console.log(xiaoman.next()); // {value: 5, done: false}

  // 执行 第 6 次，done = true
  console.log(xiaoman.next()); // 结束执行  {value: undefined, done: true}

  console.log("=====================================================");

  // 二、set map

  // set：创建时接收数组，类型 <value>
  let set: Set<number> = new Set([1, 2, 3, 1, 1, 3]); // 天然去重 1 2 3
  console.log("set-------", set);

  // map：类型 <key, value>
  // 与对象不同，key可以是引用类型
  let map: Map<any, any> = new Map();
  map.set("aaa", 1);

  map.set({ a: 1 }, 222);
  console.log(map.get({ a: 1 })); // undefined

  let key = [1, 2, 3];
  map.set(key, 123);
  console.log(map.get(key)); // 123

  console.log("map-------", map);

  console.log("================================================");

  // 三、迭代器

  // 除了map、set，还有一些不容易被遍历的数据类型，如：arguments、nodeList等
  // 有没有一种方法能同时遍历这些类型的数据？

  function test(x: any) {
    console.log(arguments); // 伪数组、类数组
    // 类数组不具有数组的方法
    // arguments.pop()
  }
  test(1);

  const ele = document.getElementsByTagName("div");
  console.log("ele---", ele);

  // 打印后发现这些数据的原型中，都有这样的一个方法：Symbol(Symbol.iterator)，迭代器！
  // 类似生成器的用法：fn().next() = { value: ..., done: boolean }
  // value[Symbol.iterator]().next().value
  // value[Symbol.iterator]().next().done

  const each = (value: any) => {
    console.log("—————— value", value);
    // 读到数据的迭代器（类似生成器的用法）
    let iterator: any = value[Symbol.iterator]();
    console.log("iterator", iterator);

    // 定义next
    let next: any = { done: false };
    while (!next.done) {
      // 执行next
      next = iterator.next();
      console.log("next----", next.value);
    }
  };

  each(set);
  each(map);
  each(ele);

  console.log("==========================");

  // 四、手写迭代器有点麻烦，有没有语法糖呢？

  // 1、迭代器的语法糖 —— for of

  for (let value of set) {
    console.log(value);
  }
  for (let value of map) {
    console.log(value);
  }

  // 2、for of 对于对象不可用！因为对象身上没有 Symbol.iterator

  // 3、数组解构，底层原理是调用 iterator

  let [a, b, c] = [4, 5, 6];
  console.log(a, b, c); // 4 5 6

  let x = [1, 2, 3];
  let copy = [...x];
  console.log("-----", x, copy);

  // 4、同样的，能不能让对象也支持 for...of ？

  let obj = {
    max: 5,
    current: 0,
    // 对象执行for of，没有 [Symbol.iterator](){} 会报错，这里给它手动加上
    [Symbol.iterator]() {
      return {
        // this指向
        max1: this.max,
        current1: this.current,

        next() {
          if (this.max1 > this.current1) {
            return { value: this.current1++, done: false };
          }
          return { value: this.current1, done: true };
        },
      };
    },
  };

  // for of 走的是自定义的 iterator
  for (let value of obj) {
    console.log("对象使用for of", value);
  }
  // 数组解构，走的是自定义的 iterator
  let y = [...obj];
  console.log("数组解构----", y); // [0, 1, 2, 3, 4]

  // 对象解构，用的是js本身的
  let z = { ...obj };
  console.log("对象解构----", z); // {max: 5, current: 0, Symbol(Symbol.iterator): ƒ}

  // 思考题：对象的解构，底层是用什么实现的呢？

  // js 对象由键值对组成，在使用解构语法时：
  // - js引擎会先创建一个临时对象，再将对象的键值对复制到这个临时对象中。
  //      -  这个过程用到 Object.keys获取所有属性名，然后遍历所有属性名，将每个属性名作为键，对应的属性值作为值
  //      - 使用 Object.defineProperty() 方法将每个属性名定义为临时对象的属性
  // - 复制完成后就可以使用点运算（解构）或方括号运算访问这些属性了
})();
