// �ڶ��庯��������ʱ������������Ͳ���ȷ�Ϳ���ʹ�÷���
function fn<T>(a:T):T {
  return a
}
fn(10); // ����ָ�����ͣ�TS�����Զ������ͽ����ƶ�
fn<string>('hello')

// ָ���������
function fn2<T,K>(a:T,b:K):T {
  return a
}

fn2<number,string>(1,'hello')

// �ӿڷ���
interface inter {
  length:number;
}
// T extends inter ��ʾ����T������inter����
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