abstract class A {
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name = name;
    this.age = age
  }

  abstract say():void
}
// abstract可以定义一个抽象类 
// 抽象类只能用来继承 不能用来定义实例
// 抽象类中可以定义抽象方法，子类必须对抽象方法进行重写

class Dog extends A {
  sex:string
  constructor(name:string,age:number,sex:string){
    super(name,age);
    this.sex = sex 
  }
  say(){
    console.log(`${this.name}说话`)
  }
}

const dog1 = new Dog('aa',3,'male')
dog1.say()
console.log(dog1)