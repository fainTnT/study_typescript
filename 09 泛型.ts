// 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
function fn<T>(a:T):T {
  return a
}
fn(10); // 当不指定泛型，TS可以自动对类型进行推断
fn<string>('hello')

// 指定多个泛型
function fn2<T,K>(a:T,b:K):T {
  return a
}

fn2<number,string>(1,'hello')

// 接口泛型
interface inter {
  length:number;
}
// T extends inter 表示泛型T必须是inter子类
function fn3<T extends inter>(a:T):number{
  return a.length
}

class MyClass<T>{
  name:T;
  constructor(name:T){
    this.name = name;
  }
}

const mc = new MyClass<string>('aaa')