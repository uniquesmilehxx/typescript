
// 1、假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 <script> 标签引入 jQuery，
//    然后就可以使用全局变量 $ 或 jQuery 了
// 2、但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西
// 3、当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
// 4、什么是声明文件？


// 例子：演示 jquery 的声明

// 1、首先，先安装juqery：npm install jquery
// 2、使用jquery：

      // 引入
      import jQuery from 'jquery'
      // 定义jquery，定义之后再把鼠标放到下面的使用语句上，就出现了对应的代码提示
      // declare var jQuery: (selector: string) => any
      // 使用
      jQuery('选择器') // 在使用jQuery这里，鼠标放上去，没有任何的代码提示或补全功能，需要先定义


// 3、一般情况下定义操作我们会单独放到一个文件，如 jquery.d.ts（.d.ts文件不需要引入，会自动扫描）
jquery('选择器')


// 4、定义操作（即声明文件）一般会非常的多，且第三方库会自带，我们直接使用即可：npm install @types/jquery --save-dev


// 5、安装成功后一般放在 node_modules 的 @types 目录中，这里上面第2步会报错（因为声明冲突了，注释上面自己定义的即可）
//    现在再看 jQuery('选择器') 这一行，鼠标放上去就会有非常多的提示了

