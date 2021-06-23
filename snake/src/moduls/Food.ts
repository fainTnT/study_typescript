// 定义食物类
export default class Food{
  // 定义一个属性表示食物所对应的元素
  element:HTMLElement;
  constructor(){
    // 获取页面中food元素并赋值给element
    this.element = document.getElementById('food')! //!表示不可能为空
  }

  // 定义一个获取食物X轴坐标的方法
  get X(){
    return this.element.offsetLeft
  }
  // 定义一个获取食物Y轴坐标的方法
  get Y(){
    return this.element.offsetTop
  }
  // 修改食物的位置
  change(){
    // 设置一个随机位置
    // 食物位置 0 - 290
    // 蛇移动一次就是一格10px，所以食物位置必须是10的倍数
    let top = Math.round(Math.random()*29)*10
    let left = Math.round(Math.random()*29)*10

    this.element.style.left=left+'px'
    this.element.style.top=top+'px'
  }
}