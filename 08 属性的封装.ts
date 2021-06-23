class Person {
  // private:私有属性，私有属性只能在类内部进行访问、修改
  // public:修饰的属性可以在任意位置访问、修改（默认值）
  // protected:受保护的属性，只能在当前类和当前类的子类中使用
  private _name:string
  private _age:number
  constructor(name:string,age:number){
    this._name = name;
    this._age = age;
  }
  // 通过添加方法使得私有属性可以在外部访问
  getName(){
    return this._name
  }
  setName(value:string){
    this._name = value
  }
  // Ts增加的(相当于上面的语法糖)
  // getter方法用来读取属性
  // setter方法用来设置属性
  get name(){
    return this._name;
  }
  set name(value:string){
    this._name = value
  }
}
const p = new Person('yyy',22)
p.setName('hhh');

// 通过语法糖直接调用
p.name = 'bbb';
console.log(p.name)


class A {
  protected num:number
  constructor(num:number){
    this.num = num
  }
}

class B extends A {
  test(){
    // protected只能在当前类和当前类的子类中使用
    console.log(this.num)
  }
}
const b = new B(123)
// 在类外面使用就报错
// b.num = 33;


class C {
  name:string
  age:number
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
}
// 语法糖写法
// class C {
//   constructor(public name:string,public age:number){

//   }
// }