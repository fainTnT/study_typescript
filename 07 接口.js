var obj = {
    name: 'aaa',
    age: 123
};
// 定义对象
var obj2 = {
    name: 'bbb',
    age: 12,
    sex: 'men'
};
// 定义类 
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    MyClass.prototype.say = function () {
        console.log('hello');
    };
    return MyClass;
}());
