import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
export default class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  // 创建属性来存储按键方向
  direction: string = 'Right';
  // 记录游戏是否结束
  isLive: boolean = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  // 游戏初始化
  init() {
    // 绑定键盘按下事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run();
  }
  // 创建键盘按下函数
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }
  // 蛇移动
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break
      case "ArrowDown":
      case "Down":
        Y += 10;
        break
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break
      case "ArrowRight":
      case "Right":
        X += 10;
        break
    }
    // 检查是否吃到食物
    this.checkEat(X, Y)
    // 捕获抛出的错误
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      alert(e.message)
      this.isLive = false;
    }
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    this.snake.moveBody();
  }
  // 检查是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 食物改变位置
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 蛇增加一截
      this.snake.addBody();
    }
  }
}