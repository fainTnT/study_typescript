// 1.����������
let a:1;
a = 1; // aֻ����1 �൱��const 
// ͨ��|�����ö������(��)
let b :'aaa'|123;
b='aaa' ; b=123 ;
let c:number|string;

// 2.any �������� �൱�ڶԸñ����ر���ts���ͼ�飨������ʹ�ã�
let d:any;
d = 123;
let e; // ����������ָ�����ͣ��൱��any(��ʽany)

let g:string
g = d; // ��any���͵�ֵ��ֵ���������͵ı��������ᱨ��(�ر���g������ת��)



// 3.unknown ��ʾδ֪���͵�ֵ
let f:unknown;
f = '123';
let h:string
// h = f; // ��unknown���͵�ֵ��ֵ���������͵ı������ᱨ��
          // �൱�����Ͱ�ȫ��any����unknown����any��
if(typeof f === 'string'){
  h = f
}

// ���Ͷ���:�����������߽�����������ʵ������
// �����﷨
h = f as string
h = <string>f

// 4.void ������ʾΪ��(undefined)���Ժ���Ϊ������ʾû�з���ֵ
function fn():void {

}

// 5.never û��ֵ ��ʾ��Զ���᷵�ؽ��
// ������������ĺ���
function fn2():never {
  throw new Error('error!');
}

// 6.object
let obj:object;
let obj1 = {}
let obj2:{name:string,age?:number};// ָ��obj2���������name���ԣ�
                                   // ����ֵΪ�ַ���,���Լ�?��ʾ���Կ��п���
                                   // ûд�����Բ����Լ���
// ����ָ�������е����� ���� �������������Կ��п���
let obj3:{name:string,[propName:string]:any} // ������Ϊ�ַ���ֵΪ����ֵ��js��������ֻ�����ַ�����
obj3={name:'aaa',age:18,sex:true}

// ��������
let fun:(a:number,b:number) => number; // ���庯������,�������ͣ�����ֵ����
fun = function(x:number,y:number):number{
  return 
}

// 7.array
let arr: string[] //ȫ���ַ������͵�����
arr=['1','2']

let arr2:Array<number>; // д����

// 8.Ԫ�� tuple:�̶����ȵ�����
// �﷨:[���ͣ�����...]
let arr3:[string,number]
arr3=['a',123]

// 9.enum ö��
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

// ���ͱ���
type myType = number|string|boolean
let s:myType




 