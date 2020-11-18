
const Score = function() {
  this.frame = 0,
  this.currentScore = 0,
  this.result = [],
  this.frameScore = [],
  this.totalScore = 0,
  this.frameRolls = 0,
  this.isOver = false

  }

  Score.prototype.calculateScore = function(score) {


   //check for strike
  //if frameRolls === 0(or 1) && score === 10
    if(this.frameRolls === 0 && score === 10) {
    //this.result = strike
      this.result.push('X')
    //frame ++
      this.frame ++;
      this.frameRolls = 0;
      //check for spare
    } else if(this.frameRolls === 1 && this.currentScore + score >= 10) {
        //this.result = currentscore + spare
      this.result.push(`${this.currentScore} /`)
    //frame++
      this.frame++
    // frame rolls = 0
      this.frameRolls = 0;
      this.currentScore = 0;
       //check for open score
    } else if(this.frameRolls === 0 && score < 10) {
    // current score = score
    this.currentScore = score;
  // frame rolls = 1
    this.frameRolls += 1;
        //check for open score 2 rolls
  } else if(this.frameRolls === 1 && score < 10) {
      this.result.push(`${this.currentScore} ${score} `)
      this.frame += 1;
      this.frameRolls = 0;
      this.currentScore = 0;
    }

   //will need to put whole function inside of here. it will be better if I can split it up though and call on different methods. The idea is to make the code look good.
   console.log('inside calculate score', this.frame);


  }

  //Score.prototype.AddResults = function() {}

  //Score.prototype.AddTotalScore = function() {}

module.exports = Score;


//calculate current score
//calcutalte frame score
//calculate total score
//conditions on when the game is over

//last time i did 1st roll and second roll, but this made it really messy to create conditions on when the game is over.