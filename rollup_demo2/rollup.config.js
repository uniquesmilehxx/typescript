// // 旧版 rollup 写法：
// import path from 'path'
// import ts from 'rollup-plugin-typescript2'

// export default {
//   input: './src/index.ts',

//   output: {
//     file: path.resolve(__dirname, './dist/index.js')
//   },

//   plugins: [
//     ts()
//   ]
// }


// 新版 rollup 会报错 __dirname 不可用
import ts from 'rollup-plugin-typescript2'
import path from 'path'
import {fileURLToPath} from 'url'
const metaUrl = fileURLToPath(import.meta.url)
const dirName = path.dirname(metaUrl)
export default {
  input:'./src/index.ts',
  output:{
    file:path.resolve(dirName,'./dist/index.js')
  },
  plugins:[
    ts()
  ]
}