// 1.����������
var a;
a = 1; // aֻ����1 �൱��const 
// ͨ��|�����ö������?(��)
var b;
b = 'aaa';
b = 123;
var c;
// 2.any �������� �൱�ڶԸñ����ر���ts���ͼ�飨������ʹ�ã�?
var d;
d = 123;
var e; // ����������ָ�����ͣ��൱��any(��ʽany)
var g;
g = d; // ��any���͵�ֵ��ֵ���������͵ı��������ᱨ��(�ر���g������ת��)
// 3.unknown ��ʾδ֪���͵�ֵ
var f;
f = '123';
var h;
// h = f; // ��unknown���͵�ֵ��ֵ���������͵ı������ᱨ��
// �൱�����Ͱ�ȫ��any����unknown����any��
if (typeof f === 'string') {
    h = f;
}
// ���Ͷ���:�����������߽�����������ʵ������
// �����﷨
h = f;
h = f;
// 4.void ������ʾΪ��(undefined)���Ժ���Ϊ������ʾû�з���ֵ
function fn() {
}
// 5.never û��ֵ ��ʾ��Զ���᷵�ؽ��?
// �������������ĺ���
function fn2() {
    throw new Error('error!');
}
// 6.object
var obj;
var obj1 = {};
var obj2; // ָ��obj2���������name���ԣ�
// ����ֵΪ�ַ���,���Լ�?��ʾ���Կ��п���
// ûд�����Բ����Լ���
// ����ָ�������е����� ���� �������������Կ��п���
var obj3; // ������Ϊ�ַ���ֵΪ����ֵ��js��������ֻ�����ַ�����
obj3 = { name: 'aaa', age: 18, sex: true };
// ��������
var fun; // ���庯������,�������ͣ�����ֵ����
fun = function (x, y) {
    return;
};
// 7.array
var arr; //ȫ���ַ������͵�����
arr = ['1', '2'];
var arr2; // д����
// 8.Ԫ�� tuple:�̶����ȵ�����
// �﷨:[���ͣ�����...]
var arr3;
arr3 = ['a', 123];
// 9.enum ö��
var Sex;
(function (Sex) {
    Sex[Sex["Male"] = 0] = "Male";
    Sex[Sex["Female"] = 1] = "Female";
})(Sex || (Sex = {}));
var i;
i = {
    name: 'aaa',
    sex: Sex.Male
};
console.log(i.sex === Sex.Male);
