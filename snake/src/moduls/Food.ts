// ����ʳ����
export default class Food{
  // ����һ�����Ա�ʾʳ������Ӧ��Ԫ��
  element:HTMLElement;
  constructor(){
    // ��ȡҳ����foodԪ�ز���ֵ��element
    this.element = document.getElementById('food')! //!��ʾ������Ϊ��
  }

  // ����һ����ȡʳ��X������ķ���
  get X(){
    return this.element.offsetLeft
  }
  // ����һ����ȡʳ��Y������ķ���
  get Y(){
    return this.element.offsetTop
  }
  // �޸�ʳ���λ��
  change(){
    // ����һ�����λ��
    // ʳ��λ�� 0 - 290
    // ���ƶ�һ�ξ���һ��10px������ʳ��λ�ñ�����10�ı���
    let top = Math.round(Math.random()*29)*10
    let left = Math.round(Math.random()*29)*10

    this.element.style.left=left+'px'
    this.element.style.top=top+'px'
  }
}