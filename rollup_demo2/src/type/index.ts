import { Dictionaries } from '../enum/index'

// key
export type Key = string

// 过期时间
export type Expire = Dictionaries.permanent | number // 默认是永久，也可以传时间戳

// 缓存取出的数据
export interface Data <T> {
  value: T,
  [Dictionaries.expire]: Expire
}

// get方法返回的数据
export interface Result <T>{
  msg: string,
  value: T | null
}

// 类
export interface StorageClass {
  // 小满写的是：（不知道谁对哈哈哈）
  // get: <T> (key: Key) => Result<T | null>
  get: <T> (key: Key) => Result<T>

  set: <T> (key: Key, value: T, expire: Expire) => void
  remove: (key: Key) => void
  clear: () => void
}



// ===============================================

// 存放事件的容器，key是事件名，value是对应的事件列表
export interface List {
  [key: string]: Array<Function>
}

export interface DispatchClass {
  on: (name: string, fn: Function) => void
  emit: (name: string, ...args: Array<any>) => void
  off: (name: string, fn: Function) => void
  once: (name: string, fn: Function) => void
}