// ����Ʒ�����
export default class ScorePanel{
  score = 0;
  level = 1;
  scoreEle:HTMLElement;
  levelEle:HTMLElement;
  // ����һ�����Ƶȼ�
  maxLevel:number;
  // ���ü�����һ��
  upScore:number;
  constructor(maxLevel:number = 10,upScore:number = 10){
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;

  }
  // ���üӷַ���
  addScore(){
    this.score++;
    this.scoreEle.innerHTML = 'SCORE:'+this.score;
    // �жϷ�������������
    if(this.score%this.upScore === 0){
      this.levelUp()
    }
  }
  // ���õȼ���������
  levelUp(){
    if(this.level < this.maxLevel){
      this.level++;
      this.levelEle.innerHTML = 'LEVEL:'+this.level;
    }
  }
}