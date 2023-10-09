(() => {
  // 1、根据打印结果，顺序为：
  // -  属性装饰器
  // -  方法参数装饰器
  // -  方法装饰器
  // -  构造函数中的方法参数装饰器
  // -  类装饰器

  // 2、属性装饰器是从上而下；（同级别的多个）参数装饰器、类装饰器是先执行后者
  // 3、一个方法中，先执行参数装饰器（从后开始），再执行方法装饰器

  // 类装饰器1
  function testClass1(params: string) {
    return function (target: any) {
      console.log("类装饰器1" + params);
    };
  }
  // 类装饰器2
  function testClass2(params: string) {
    return function (target: any) {
      console.log("类装饰器2" + params);
    };
  }
  // 属性装饰器
  function testAttribute(params?: string) {
    return function (target: any, attrName: any) {
      console.log("属性装饰器" + params);
    };
  }
  // 方法装饰器
  function logMethod(params?: string) {
    return function (target: any, methodName: any, desc: any) {
      console.log("方法装饰器" + params);
    };
  }
  // 方法参数装饰器1
  function testParmas1(params?: string) {
    return function (target: any, methodName: any, paramsIndex: any) {
      console.log("方法参数装饰器1" + params);
    };
  }
  // 方法参数装饰器2
  function testParmas2(params?: string) {
    return function (target: any, methodName: any, paramsIndex: any) {
      console.log("方法参数装饰器2" + params);
    };
  }

  @testClass1("www.baidu.com") // 13
  @testClass2("www.qq.com") // 12
  class TestClass {
    @testAttribute("url") // 1
    public url: string | undefined;
    @testAttribute("url1") // 2
    public url1: string | undefined;

    constructor(
      @testParmas1("constructor 实例化 TestClass") attr1: any, // 11
      @testParmas2("constructor 实例化 TestClass") attr2: any // 10
    ) {
      console.log("实例化 TestClass"); // 14
    }

    @logMethod("getData1") // 5
    getData1(
      @testParmas1("getData1") attr1: any, // 4
      @testParmas2("getData1") attr2: any // 3
    ) {}

    @logMethod("getData2") // 8
    getData2(
      @testParmas1("getData2") attr1: any, // 7
      @testParmas2("getData2") attr2: any // 6
    ) {}

    setData(
      @testParmas1() attr1: any, // 9
      @testParmas2() attr2: any // 8
    ) {}
  }

  var http = new TestClass(1, 2);

  // 属性装饰器url
  // 属性装饰器url1
  // 方法参数装饰器2getData1
  // 方法参数装饰器1getData1
  // 方法装饰器getData1
  // 方法参数装饰器2getData2
  // 方法参数装饰器1getData2
  // 方法装饰器getData2
  // 方法参数装饰器2undefined
  // 方法参数装饰器1undefined
  // 方法参数装饰器2constructor 实例化 TestClass
  // 方法参数装饰器1constructor 实例化 TestClass
  // 类装饰器2www.qq.com
  // 类装饰器1www.baidu.com
  // 实例化 TestClass
})();
