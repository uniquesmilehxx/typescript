// ts中书写js中的类
(() => {
    class Person {
        // 构造器函数
        constructor(firstName, lastName) {
            // 更新属性
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '-----' + this.lastName;
        }
    }
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    const person = new Person('周', '瞿');
    console.log(person);
    console.log(showFullName(person));
})();
