var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A(name, age) {
        this.name = name;
        this.age = age;
    }
    return A;
}());
// abstract可以定义一个抽象类 
// 抽象类只能用来继承 不能用来定义实例
// 抽象类中可以定义抽象方法，子类必须对抽象方法进行重写
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, sex) {
        var _this = _super.call(this, name, age) || this;
        _this.sex = sex;
        return _this;
    }
    Dog.prototype.say = function () {
        console.log(this.name + "\u8BF4\u8BDD");
    };
    return Dog;
}(A));
var dog1 = new Dog('aa', 3, 'male');
dog1.say();
console.log(dog1);
