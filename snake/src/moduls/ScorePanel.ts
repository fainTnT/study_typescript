// 定义计分牌类
export default class ScorePanel{
  score = 0;
  level = 1;
  scoreEle:HTMLElement;
  levelEle:HTMLElement;
  // 设置一个限制等级
  maxLevel:number;
  // 设置几分升一级
  upScore:number;
  constructor(maxLevel:number = 10,upScore:number = 10){
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;

  }
  // 设置加分方法
  addScore(){
    this.score++;
    this.scoreEle.innerHTML = 'SCORE:'+this.score;
    // 判断分数来进行升级
    if(this.score%this.upScore === 0){
      this.levelUp()
    }
  }
  // 设置等级提升方法
  levelUp(){
    if(this.level < this.maxLevel){
      this.level++;
      this.levelEle.innerHTML = 'LEVEL:'+this.level;
    }
  }
}