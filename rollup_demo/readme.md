webpack 打包出来的项目较大，rollup 打包后的项目较小

### 在 demo/typescript/rollup_demo 中做示范

## 一、一大堆安装

#### 全局安装 rollup

`npm i rollup -g`

#### 创建 package.json 文件

`npm init -y`

#### 在项目下安装 typescript

`npm i typescript -D`

#### 安装 TypeScript 转换器 (rollup 不认识 ts，所以让 rollup 支持 ts)

`npm install rollup-plugin-typescript2 -D`

#### 安装代码压缩插件

`npm install rollup-plugin-terser -D`

#### 安装 rollupweb 服务

`npm install rollup-plugin-serve -D`

#### 安装热更新

`npm install rollup-plugin-livereload -D`

#### 引入外部依赖

`npm install rollup-plugin-node-resolve -D`

#### 安装配置环境变量用来区分本地和生产

`npm install cross-env -D`

#### 替换环境变量给浏览器使用

`npm install rollup-plugin-replace -D`

#### 生成 tsconfig.json

`tsc --init`

## 二、目录手动初始化

#### 在根目录:

- 新建 rollup.config.js 文件
- 新建 src 目录，并在 src 下新建 index.ts，在 index.ts 中随便写点东西
- 新建 public 目录，并在 public 下新建 index.html，index.html 用！初始化一下

## 三、rollup.config.js 配置

#### 输入、输出

- 让 rollup 支持 ts：插件 rollup-plugin-typescript2
- 配置 package.json 的 script：

  - rollup -c：-c 的意思是让 rollup 去读当前目录 rollup.config.js 里面的配置
  - -w ：--watch 的缩写。若 rollup.config.js 一有改动，就会自动重启 rollup 的服务

    尝试打包，执行 npm run build，报错：Cannot find module 'node:process'

    修改 ts.config.js 中 的 module，改为 ES2015

    再次打包，嗯， 还是报错

    最终在 package.json 的 script 命令行最后加上 --bundleConfigAsCjs 后缀，不再报错！！！nice！！！！

- npm run build 后可以看到，生成了/lib/index.js 文件

  然后在 index.html 中引入这个 js 文件

- 起一个前端的服务，先配置 run dev 的 script 命令

  使用插件 rollup-plugin-serve，类似于 webpack-dev-server 的配置

        open：是否自动打开浏览器窗口

        port：端口号

        openPage：打开的html地址

  配置好之后，npm run dev 就可以啦

  此时在 index.ts 编写的代码就生效了，比如一些打印

- 代码更新后，需要手动刷新浏览器才可以看到更新，所以我们需要一个热更新

  插件：rollup-plugin-livereload

  引用 livereload 调用即可

- 想要将 lib/index.js 压缩，使用插件：rollup-plugin-terser

  引入 terser，调用即可

  也可以配置的具体一点，比如：

        压缩配置

        ```js
        compress: {
            // 删除代码里的打印
            drop_console: true
        }
        ```

- 压缩完之后，代码有报错不好调试怎么办？

  开启 sourcemap：

      - output -> sourcemap 设置为true

      - tsconfig.json中 sourceMap 也得开启

  开启后，打印的内容可以直接定位到某一行

- 开发时需要区分环境，怎么引入环境变量？

  插件：cross-env

  配置 package.json 的 scripts：（其中 NODE_ENV=development 可以随便起名，相当于自定义参数）

  ```js
  "dev": "cross-env NODE_ENV=development rollup -c -w --bundleConfigAsCjs",
  "build": "cross-env NODE_ENV=production rollup -c --bundleConfigAsCjs"
  ```

- 怎么调试呢？
  - 在 rollup.config.js 中 打印 process.env，先把 dev 的 -w 去掉
  - 执行 npm run dev 可以看到终端打印的 NODE_ENV 是 development
  - 执行 npm run build 可以看到终端打印的 NODE_ENV 是 production
- 调试完，重新把 -w 加上，再把 rollup.config.js 中的打印 process.env 去掉

- 但是 process.env 是 node 环境里面的东西，浏览器里面没这个东西（在 index.ts 中 打印不到），怎么在浏览器里面也访问到呢？
  插件：rollup-plugin-replace（类似于 webpack 的 definePlugin）

      ```js
      replace({
          // 将 node的环境变量 注册到 浏览器中
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          // 可以自己随意定义，比如 a: xxxxx
      }),
      ```

  然后浏览器环境也可以打印到了

  利用环境变量可以做一些配置，比如 开发环境才 启动热更新、server 服务、删除打印（见 rollup.config.js）

#### index.html 也可以直接使用 liveserver 打开

在 vscode 中 安装 liveserver 插件，然后 index.html 右键 ->使用 liveserver 打开

自动打开了浏览器窗口：http://127.0.0.1:5500/demo/typescript/rollup_demo/public/index.html
