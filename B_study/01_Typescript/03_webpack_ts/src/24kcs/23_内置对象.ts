(() => {
  
//  1、ECMAScript 的内置对象（注意，左侧是大写！！！！）
let b: Boolean = new Boolean(1)
let n: Number = new Number(true)
let s: String = new String('abc')
let d: Date = new Date()
let r: RegExp = /^1/
let e: Error = new Error('error message')
console.log('----', b, n, s, d, r)

// 一开始是对象！！！！(大写Boolean，是一个对象)
console.log(b)
// 赋值为布尔值之后，打印才是布尔值
b = true
console.log(b)

// 如果初始化时左侧改为小写，会报错（相当于把对象定义为布尔类型）
// let bb: boolean = new Boolean(2)





// 2、BOM 和 DOM 的内置对象

// - Window
// - Document
// - HTMLElement
// - DocumentFragment
// - Event
// - NodeList


const div: HTMLElement = document.getElementById('test')
const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
  console.dir(event.target)
})
const fragment: DocumentFragment = document.createDocumentFragment()


})()