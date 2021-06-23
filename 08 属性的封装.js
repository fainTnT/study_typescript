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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    // 通过添加方法使得私有属性可以在外部访问
    Person.prototype.getName = function () {
        return this._name;
    };
    Person.prototype.setName = function (value) {
        this._name = value;
    };
    Object.defineProperty(Person.prototype, "name", {
        // Ts增加的(相当于上面的语法糖)
        // getter方法用来读取属性
        // setter方法用来设置属性
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p = new Person('yyy', 22);
p.setName('hhh');
// 通过语法糖直接调用
p.name = 'bbb';
console.log(p.name);
var A = /** @class */ (function () {
    function A(num) {
        this.num = num;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.test = function () {
        // protected只能在当前类和当前类的子类中使用
        console.log(this.num);
    };
    return B;
}(A));
var b = new B(123);
// 在类外面使用就报错
// b.num = 33;
var C = /** @class */ (function () {
    function C(name, age) {
        this.name = name;
        this.age = age;
    }
    return C;
}());
// 语法糖写法
// class C {
//   constructor(public name:string,public age:number){
//   }
// }
