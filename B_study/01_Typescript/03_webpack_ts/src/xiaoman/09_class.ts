(() => {
  // class
  // 1、class的使用 extends继承（先）和 implements类型约束（后）
  // 2、修饰符 private（仅内部） 、protected（仅内部及子类内部）、 public 、  readonly(用于属性或索引签名)
  // 3、super的原理
  // 4、静态方法（用的不多）
  // 5、get set 存取器（很像Object.defineProperty），例子见：24kcs/10_存取器

  // 例2：创建虚拟dom简单实现
  interface Vnode {
    tag: string;
    children?: Vnode[];
    text?: string;
  }

  class Dom {
    constructor() {}
    // constructor (name: string) {}

    // 创建节点：把创建好的节点返回出去（仅内部可访问 private）
    private createElement(tag: string) {
      return document.createElement(tag);
    }
    // 填充文本（仅内部可访问 private）
    private setText(el: HTMLElement, text: string) {
      el.textContent = text;
    }
    // 渲染：返回拼装后的 dom 结构（仅内部及子类内部可访问 protected）
    protected render(data: Vnode) {
      // 当前节点
      let root = this.createElement(data.tag);
      // children
      if (data.children && Array.isArray(data.children)) {
        data.children.forEach((item) => {
          // 递归渲染 children
          let child = this.render(item);
          // 插入父节点
          root.appendChild(child);
        });
      }
      // text填充
      else {
        this.setText(root, data.text);
      }
      // 返回 dom
      return root;
    }
  }

  // 例1：class Vue

  interface Options {
    el: string | HTMLElement;
  }

  interface VueClass {
    options: Options;
    init: () => void;
  }

  class Vue extends Dom implements VueClass {
    // 静态属性
    static str: string = "blue";

    str2: string = "aaa";

    options: Options;
    constructor(options: Options) {
      super(); // super的原理：就是父类的 prototype.constructor.call
      // super('blue') // 也可以传参，但是父类的 constructor 需要对应的接收参数
      // super.render  // 这里也可以直接通过 super 访问父类的方法及属性
      this.options = options;
      this.init();
    }

    // 静态方法
    static version() {
      return "1.0.1";
    }
    static test() {
      // 静态方法内部通过this只能调用其他静态属性或方法，不能调用普通属性或方法，如 this.str2、this.init 会报错
      this.version();
      this.str;
    }

    public init(): void {
      let data: Vnode = {
        tag: "div",
        children: [
          {
            tag: "div",
            text: "我是节点1",
          },
          {
            tag: "div",
            text: "我是节点2",
          },
        ],
      };
      // app 对应的 dom
      const app =
        typeof this.options.el === "string"
          ? document.querySelector(this.options.el)
          : this.options.el;
      // 将渲染后的 dom 挂载到 app 上
      app.appendChild(this.render(data));
    }
  }

  let vue = new Vue({
    el: "#app",
  });
  // init 是 public 则可访问，否则不行
  // vue.init()

  // 静态方法，比如 Promise.all
  // 不通过类的实例调用，而通过类本身调用
  // 静态方法中 this 的指向不同，只能调用其他静态属性或方法，不能调用普通属性或方法

  // 上述增加了 version静态方法
  // vue.version  // 无法通过vue实例调用
  console.log("Vue.version-----", Vue.version()); // 通过类名调用

  // get set 存取器
  // 例子见：24kcs/10_存取器
})();
