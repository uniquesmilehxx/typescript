(() => {
  
  // 内置对象，记住规则即可（右侧创建好以后，把鼠标放在左侧即可看到类型，然后cv一下就好了）



  // String Boolean Number Date RegExp Error 等，规则都是一样的，记住这个规则就行
  let s:String = new String('asd')
  let b:Boolean = new Boolean(false)
  let n:Number = new Number(123)
  let d:Date = new Date()
  let r:RegExp = /^a+$/
  let e:Error = new Error('错误')
  let xhr:XMLHttpRequest = new XMLHttpRequest()
  console.log('内置对象打印----', s, b, n, d, r, xhr)
  console.log(r.test('rrr'), r.test('aaa'))
  console.log('error---', e)

  console.log('====================================================')



  // DOM 内置对象，先按 js 一样创建，然后就能看到提示中它属于哪一类了
  let div: HTMLDivElement = document.querySelector('div') // 创建好以后，把鼠标放在div上就能看到 div 的类型
  let span: HTMLSpanElement = document.querySelector('span') 
  let canv: HTMLCanvasElement = document.querySelector('canvas') 
  let list: NodeListOf<HTMLDivElement> = document.querySelectorAll('div')
  list.forEach(item => {
    // nodeList 可以使用 forEach
  })
  // ......还有很多



  // Bom 内置对象
  let ls: Storage = localStorage
  let ss: Storage = sessionStorage
  let loc: Location = location
  let promise: Promise<number> = new Promise((resolve, reject) => resolve(111))
  let promise2: Promise<string> = new Promise((resolve, reject) => resolve('blue'))
  promise.then(res => {
    console.log('promise---res', res)
  })
  promise2.then(res => {
    console.log('promise2---res', res)
  })

  let cookie: string = document.cookie
  console.log('cookie-----', cookie)

  console.log('====================================================')



  // 代码雨
  // 画布
  let canvas: HTMLCanvasElement = document.querySelector('#canvas') as HTMLCanvasElement
  canvas.width = screen.availWidth
  canvas.height = screen.availHeight

  let ctx: CanvasRenderingContext2D = canvas.getContext('2d')

  // 定义下雨的文字
  let str: string[] = 'hxxblueuuniquesmilebeautifu'.split('')
  // 定义文字的y位置
  let arr: number[] = Array(Math.ceil(canvas.width/10)).fill(0)
  console.log('arr---', arr)

  const draw = () => {
    //填充背景颜色
    ctx.fillStyle = 'rgba(0,0,0,0.05)'
    // 填充的形状
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // 文字颜色
    ctx.fillStyle = '#0f0'

    // (method) CanvasText.fillText(text: string, x: number, y: number, maxWidth?: number): void
    arr.forEach((item, index) => {
      // 填充参数：文字随机、x位置以索引*10，y位置+10
      ctx.fillText(str[Math.floor(Math.random()*str.length)], index*10, item+10)
      // 然后把 y 修改，大于canvas高度或者大于一个随机数之后就从0开始
      arr[index] = item >= canvas.height || item > 10000*Math.random() ? 0 : item + 10
      console.log('arr---', arr)
    })  
  }
  setInterval(draw, 40)






  console.log('====================================================')




})()