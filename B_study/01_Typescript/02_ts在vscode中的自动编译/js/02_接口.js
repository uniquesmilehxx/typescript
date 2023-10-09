// 接口：是一种能力，一种约束而已
(() => {
    // 输出姓名
    function showName(person) {
        return person.firstName + '_' + person.lastName;
    }
    const person = {
        firstName: '郝',
        lastName: '笑笑'
    };
    console.log(showName(person));
})();
