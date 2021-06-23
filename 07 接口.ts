// 描述一个对象的类型
type myType = {
  name:string,
  age:number
}

const obj:myType = {
  name:'aaa',
  age:123
}

// 接口就是用来定义一个类的结构(定义规范)
// 用来定义一个类应该包含哪些属性和方法

interface myInterface {
  name:string,
  age:number
}
// 可以重复声明 合并
interface myInterface {
  sex:string
}
// 定义对象
const obj2:myInterface = {
  name:'bbb',
  age:12,
  sex:'men'
}

// 接口中的所有属性都不能有实际的值，只定义结构
// 接口中所有的方法都是抽象方法
interface myInter {
  name:string,
  say():void
}

// 定义类 
class MyClass implements myInter {
  name:string
  age:number
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }

  say(){
    console.log('hello')
  }
}