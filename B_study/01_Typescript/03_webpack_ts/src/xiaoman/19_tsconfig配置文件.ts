(() => {
  // tsconfig配置文件


  // 一、生成配置文件：tsc --init

  // 二、查看文件

  // 这里用一个变量来展示json文件中的配置，方便增加注释
  let json = {
    // 配置选项
    "compilerOptions": {
      // ---------------------项目相关-----------------------------------

      // 官方注释：保存.tsbuildinfo文件以允许增量编译项目
      // TS编译器在第一次编译之后会生成一个存储缓存文件，第二次编译会在第一次的基础上读取缓存文件
      "incremental": true,

      // 官方注释：指定.tsbuildinfo增量编译文件的路径
      // 增量编译文件的存储位置
      "tsBuildInfoFile": './buildFile',

      // 打印诊断信息（编译文件、IO流、编译时间等信息）
      "diagnostics": true,

      // ----------------------- 语言和环境---------------------------

      // 官方注释：为发出的JavaScript设置JavaScript语言版本，并包含兼容的库声明
      // 目标语言的版本
      "target": "ES5",

      // 官方注释：指定一组描述目标运行时环境的绑定库声明文件
      // TS需要引用的库，即声明文件，es5默认引用dom、es5、scriptHost
      "lib": [
        "DOM",
        "ES2015",
        "ScriptHost"
      ],

      // 官方注释：指定针对React JSX发射时使用的JSX工厂函数，例如“React.createElement”或“h”
      // jsx 用什么解析器
      "jsxFactory": "React.createElement",

      // 官方注释：指定生成的JSX代码。
      // preserve会保留原本的jsx文件
      "jsx": "preserve", 

      // ---------------------- 模块 --------------------------------

      // 官方注释：指定生成的模块代码
      // 生成代码的模板标准（AMD、UMD、CommonJS、ES6等等）
      "module": "CommonJS",

      // 官方注释：指定源文件中的根文件夹。
      // 个人理解：指定根目录
      "rootDir": './',

      // 声明文件目录，默认是 node_modules/@types
      "typeRoots": [],

      // 官方注释：指定要包含但不在源文件中引用的类型包名称。
      // 加载的声明文件包（一般与 typeRoots 配合使用）
      "types": [],
      
      // 官方注释：指定TypeScript如何从给定的模块说明符中查找文件
      // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
      "moduleResolution": "node",

      // 官方注释：指定基本目录以解析非相对模块名称
      // 解析非相对模块的基地址，他会使用 baseUrl 选项作为 url 路径，默认是当前目录
      "baseUrl": "./",

      // 官方注释：指定一组条目，用于将导入重新映射到其他查找位置。
      // 路径映射，相对于baseUrl（相当于是别名的意思）
      "paths": {
        // 如：使用jquery不想使用默认版本，而需要手动指定版本，可进行如下配置
        "@jquery": [
          "node_modules/jquery/dist/jquery.min.js"
        ],
        // @ 指定 src 目录
        "@/*": [
          "./src/*"
        ]
      },


      // ---------------------- js 支持----------------------------

      // 官方注释：允许JavaScript文件成为程序的一部分。使用“checkJS”选项可以从这些文件中获取错误。
      // 允许编译器编译 JS、JSX 文件（一般不会 ts 和 js 混着写，所以不建议开启）
      "allowJs": false,

      // 官方注释：在类型检查的JavaScript文件中启用错误报告
      // 允许在 js 文件中报错，通常与 allowJs 一起使用
      "checkJs": false,

      
      // --------------------------- Emit --------------------------

      // 官方注释：为所有发出的文件指定一个输出文件夹。
      // 指定输出目录
      "outDir": './dist',

      // 官方注释：从项目中的TypeScript和JavaScript文件生成.d.ts文件
      // 生成声明文件，开启后会自动生成声明文件
      "declaration": true,

      // 官方注释：为生成的声明文件指定输出目录
      // 指定生成声明文件存放目录
      "declarationDir": "",

      // 官方注释：为d.ts文件创建源映射。
      // 为声明文件生成 sourcemap 
      "declarationMap": true,

      // 官方注释：仅输出d.ts文件，不输出JavaScript文件
      // 仅生成声明文件，而不生成js文件
      "emitDeclarationOnly": false,

      // 官方注释：为发出的JavaScript文件创建源映射文件
      // 生成目标文件的 sourcemap 文件
      "sourceMap": false,

      // 官方注释：在发出的JavaScript中包含源映射文件。
      // 生成目标文件的 inline sourcemap，inline sourcemap 会包含在生成的 js 文件中
      "inlineSourceMap": true,    

      // 删除注释
      "removeComments": true,

      // 不输出文件，即编译后不会生成任何 js 文件
      "noEmit": false,

      // 有错误时不输出任何文件
      "noEmitOnError": true,

      // 官方注释：为迭代发出更兼容但冗长且性能较差的JavaScript。
      // 降级遍历器实现，如果目标源是 es3/5，那么遍历器会有降级的实现（建议打开）
      "downlevelIteration": true,

      // ------------------------------------ 类型检查 -------------------------

      // 严格模式
      "strict": true,

      // 官方注释：确保始终发出“use strict”
      // 在代码中注入 'use strict'
      "alwaysStrict": true, 

      // 官方注释：为具有隐含“any”类型的表达式和声明启用错误报告
      // 不允许隐式的 any 类型（建议关掉）
      "noImplicitAny": true,

      // 官方注释：类型检查时，请考虑 “null” 和 “undefined”
      // 不允许把 null、undefined 赋值给其他类型的变量
      "strictNullChecks": true,

      // 官方注释：分配函数时，请检查以确保参数和返回值与子类型兼容。
      // 不允许函数参数双向协变（后面会讲）
      "strictFunctionTypes": true,

      // 官方注释：检查构造函数中已声明但未设置的类属性
      // 类的实例属性必须初始化（在constructor中赋值初始化）
      "strictPropertyInitialization": false, 

      // 官方注释：检查“bind”、“call”和“apply”方法的参数是否与原始函数匹配
      // 严格的 bind/call/apply 类型检查
      "strictBindCallApply": true,

      // 官方注释：当“this”的类型为“any”时启用错误报告
      // 不允许 this 有隐式的 any 类型
      "noImplicitThis": false,

      // 官方注释：未读取本地变量时启用错误报告
      // 检查只声明、未使用的局部变量（只提示不报错）
      "noUnusedLocals": true,

      // 官方注释：未读取函数参数时引发错误
      // 检查未使用的函数参数（只提示不报错）
      "noUnusedParameters": true,

      // 官方注释：为switch语句中的失败案例启用错误报告
      // 防止Switch语句贯穿（即如果没有break语句后面不会执行）
      "noFallthroughCasesInSwitch": true,


    },
    // 指定匹配列表（属于自动指定该路径下的所有ts相关文件）
    "include": [
      "src/**/*",
      "index.ts"
    ],
    // 指定排除列表（与include相反
    "exclude": [
      "demo.ts"
    ],
    // 指定哪些文件使用该配置（属于手动一个个指定文件）(只能指定文件，不能指定文件夹)
    "files": [
      "index.ts"
    ]
  }

})()

