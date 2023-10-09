(() => {
  // 例子： 用 infer 实现数组的翻转

  type arr = [1, 2, 3, 4]
  type arr2 = [number, string, boolean, symbol]


  type ReverseArr <T extends any[]> = T extends [infer first, ...infer rest] ? [ReverseArr<rest>, first] : []
  type rev = ReverseArr<arr>
  // type rev = [[[[[], 4], 3], 2], 1]


  // 递归这里需要解构，否则机会像上面的例子一样数组层次越来越深
  type ReverseArr2 <T extends any[]> = T extends [infer first, ...infer rest] ? [...ReverseArr2<rest>, first] : []
  type rev2 = ReverseArr2<arr>
  // type rev2 = [4, 3, 2, 1]


  type rev3 = ReverseArr2<arr2>
  // type rev3 = [symbol, boolean, string, number]


})()