// 实战编写插件：实现 localstorage 的存取，并且支持设置过期时间

import { StorageClass, Key, Expire, Data, Result } from "./type/index";
import { Dictionaries } from "./enum/index";

export class Storage implements StorageClass {
  // 传入 key value 过期时间，默认永久
  public set<T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
    // 数据格式化， 存入 value 和 过期时间
    const data = JSON.stringify({
      value,
      [Dictionaries.expire]: expire,
    });
    localStorage.setItem(key, data);
  }

  // 小满写的是：（不知道谁对哈哈哈）
  // public get <T> (key: Key) : Result<T | null> {
  public get<T>(key: Key): Result<T> {
    const value = localStorage.getItem(key);
    if (value) {
      const data: Data<T> = JSON.parse(value);
      const now = new Date().getTime();
      // 判断是否过期
      if (
        typeof data[Dictionaries.expire] === "number" &&
        data[Dictionaries.expire] < now
      ) {
        // 已经过期了
        this.remove(key);
        return {
          msg: `您的${key}已过期`,
          value: null,
        };
      } else {
        // 正常
        return {
          msg: "成功",
          value: data.value,
        };
      }
    } else {
      return {
        msg: "值无效",
        value: null,
      };
    }
  }

  public remove(key: Key) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}

console.log("=========================================================");

// 编写发布订阅模式

import { DispatchClass, List } from "./type/index";

// 调度中心
class Dispatch implements DispatchClass {
  list: List;

  constructor() {
    this.list = {};
  }

  // 注册事件
  on(name: string, fn: Function) {
    // 把传入的事件放入list中
    let callbacks = this.list[name] || [];
    callbacks.push(fn);
    this.list[name] = callbacks;
  }

  // 调用事件
  emit(name: string, ...args: Array<any>) {
    const callbacks = this.list[name];
    if (callbacks && callbacks.length) {
      callbacks.forEach((fns) => {
        fns.apply(this, args);
      });
    } else {
      console.log("无可调用的事件，名称错误");
    }
  }

  // 解绑事件
  off(name: string, fn: Function) {
    const callbacks = this.list[name];
    if (callbacks && fn) {
      const index = callbacks.findIndex((fns) => fns === fn);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    } else {
      console.log("该事件未监听");
    }
  }

  // 注册一个仅执行一次的事件：执行结束后立刻解绑（仅注册，还是需要 emit 执行）
  once(name: string, fn: Function) {
    // 创建一个临时函数用于绑定，在临时函数内部执行完 fn 之后即刻解绑
    const temFn = (...args: Array<any>) => {
      fn.apply(this, args);
      this.off(name, temFn);
    };
    this.on(name, temFn);
  }
}

const o = new Dispatch();

const callback1 = (...args: any[]) => {
  console.log("1111--callback", args);
};
const callback2 = (...args: any[]) => {
  console.log("2222--callback", args);
};
const callback3 = (...args: any[]) => {
  console.log("3333--callback", args);
};

// 注册了两个回调函数 给 test
o.on("test", callback1);
o.on("test", callback2);

// 这里调用后，就会执行两个函数
o.emit("test", 123, false, { name: "blue" });
console.log("------------");

// 这里先解绑一个事件
o.off("test", callback1);
// 这里再解绑就只会执行一个了
o.emit("test", 456, true, { name: "blue" });
console.log("------------");

// 注册一个仅执行一次的事件
o.once("test2", callback3);
// 调用这个事件
o.emit("test2", 789, false);
// 第二次调用，找不到了，无法调用
o.emit("test2", "once第二次调用");

console.log("=====================================================");
