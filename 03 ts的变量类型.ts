// 1.字面量类型
let a:1;
a = 1; // a只能是1 相当于const 
// 通过|来设置多个类型(或)
let b :'aaa'|123;
b='aaa' ; b=123 ;
let c:number|string;

// 2.any 任意类型 相当于对该变量关闭了ts类型检查（不建议使用）
let d:any;
d = 123;
let e; // 声明变量不指定类型，相当于any(隐式any)

let g:string
g = d; // 把any类型的值赋值给任意类型的变量都不会报错(关闭了g的类型转换)



// 3.unknown 表示未知类型的值
let f:unknown;
f = '123';
let h:string
// h = f; // 把unknown类型的值赋值给任意类型的变量都会报错
          // 相当于类型安全的any（用unknown不用any）
if(typeof f === 'string'){
  h = f
}

// 类型断言:可以用来告诉解析器变量的实际类型
// 两种语法
h = f as string
h = <string>f

// 4.void 用来表示为空(undefined)，以函数为例，表示没有返回值
function fn():void {

}

// 5.never 没有值 表示永远不会返回结果
// 用于用来报错的函数
function fn2():never {
  throw new Error('error!');
}

// 6.object
let obj:object;
let obj1 = {}
let obj2:{name:string,age?:number};// 指定obj2对象必须有name属性，
                                   // 属性值为字符串,属性加?表示属性可有可无
                                   // 没写的属性不可以加上
// 若想指定必须有的属性 而且 让其他所有属性可有可无
let obj3:{name:string,[propName:string]:any} // 属性名为字符串值为任意值（js的属性名只能是字符串）
obj3={name:'aaa',age:18,sex:true}

// 函数对象
let fun:(a:number,b:number) => number; // 定义函数类型,参数类型，返回值类型
fun = function(x:number,y:number):number{
  return 
}

// 7.array
let arr: string[] //全是字符串类型的数组
arr=['1','2']

let arr2:Array<number>; // 写法二

// 8.元组 tuple:固定长度的数组
// 语法:[类型，类型...]
let arr3:[string,number]
arr3=['a',123]

// 9.enum 枚举
enum Sex {
  Male = 0,
  Female = 1
}
let i:{name:string,sex:Sex}
i = {
  name:'aaa',
  sex:Sex.Male
}
console.log(i.sex === Sex.Male)

// 类型别名
type myType = number|string|boolean
let s:myType




 