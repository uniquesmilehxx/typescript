(function () {
    // 编译成js后没有类型
    function sayHi(str) {
        return '您好' + str;
    }
    var text = 'blue';
    console.log(sayHi(text));
})();
