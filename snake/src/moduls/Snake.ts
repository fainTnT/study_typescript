export default class Snake{
  // 蛇头
  head:HTMLElement;
  // 身体
  bodies:HTMLCollection
  // 整个蛇
  element:HTMLElement
  constructor(){
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!;
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
  }

  // 获取蛇的坐标（蛇头坐标）
  get X(){
    return this.head.offsetLeft
  }
  get Y(){
    return this.head.offsetTop
  }
  // 设置蛇头坐标
  set X(value:number){
    // 如果新值和旧值一样
    if(this.X === value){
      return 
    }
    // 撞墙
    if(value<0||value>290){
      throw new Error('游戏结束！')
    }
    this.head.style.left = value+'px'
  }
  set Y(value:number){
    // 如果新值和旧值一样
    if(this.Y === value){
      return 
    }
    // 撞墙
    if(value<0||value>290){
      throw new Error('游戏结束！')
    }
    this.head.style.top = value+'px'
  }
  // 蛇增加身体
  addBody(){
    const div = document.createElement('div')
    this.element.appendChild(div);
    // this.element.insertAdjacentElement('beforeend','<div></div>')
  }

  // 身体移动
  moveBody(){
    // 将后面的身体设置为前一个身体的位置
    console.log(this.bodies.length)
    for(let i=this.bodies.length-1;i>0;i--){
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
      console.log(X,Y);
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y+'px';

    }
  }
}