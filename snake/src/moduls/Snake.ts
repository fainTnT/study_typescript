export default class Snake {
  // 蛇头
  head: HTMLElement;
  // 身体
  bodies: HTMLCollection
  // 整个蛇
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!;
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
  }

  // 获取蛇的坐标（蛇头坐标）
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  // 设置蛇头坐标
  set X(value: number) {
    // 如果新值和旧值一样
    if (this.X === value) {
      return
    }
    // 撞墙
    if (value < 0 || value > 290) {
      throw new Error('游戏结束！')
    }

    // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // console.log('水平方向发生了掉头');
      // 如果发生了掉头，让蛇向反方向继续移动
      if (value > this.X) {
        // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
        value = this.X - 10;
      } else {
        // 向左走
        value = this.X + 10;
      }
    }

    // 移动身体
    this.moveBody();


    this.head.style.left = value + 'px'
    // 检查有没有撞到自己
    // this.checkHeadBody();

  }
  set Y(value: number) {
    // 如果新值和旧值一样
    if (this.Y === value) {
      return
    }
    // 撞墙
    if (value < 0 || value > 290) {
      throw new Error('游戏结束！')
    }


    // 修改y时，是在修改垂直坐标，蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      if(value > this.Y){
          value = this.Y - 10;
      }else{
          value = this.Y + 10;
      }
  }
    this.head.style.top = value + 'px'
    // 检查有没有撞到自己
    // this.checkHeadBody();
  }
  // 蛇增加身体
  addBody() {
    const div = document.createElement('div')
    this.element.appendChild(div);
    // this.moveBody();
    // this.element.insertAdjacentElement('beforeend','<div></div>')
  }

  // 身体移动
  moveBody() {
    // 将后面的身体设置为前一个身体的位置
    console.log(this.bodies.length)
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';

    }
  }

  // 检查蛇头是否撞到身体的方法
  checkHeadBody() {
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 进入判断说明蛇头撞到了身体，游戏结束
        throw new Error('撞到自己了！');
      }
    }
  }
}