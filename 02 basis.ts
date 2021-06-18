// 变量声明
// type:1(先声明变量类型再赋值)
let a:number;
a = 1;
// type:2(声明变量类型并赋值)
let b:string = '1';
// type:3(变量的类型自动变成值的类型)
let c = true;

// 声明函数参数的类型、返回值的类型
function sum(x:number,y:number) :number {
  return x+y
}
let d = sum(1,2)

