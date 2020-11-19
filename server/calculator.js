
const Score = function() {
  this.frame = 0,
  this.currentScore = 0,
  this.result = [],
  this.frameScore = [],
  this.totalScore = 0,
  this.frameRolls = 0,
  this.isOver = false

  }

  Score.prototype.calculateScore = function(score, rollsleft) {


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


   console.log('inside calculate score', this.frame);

   if(this.frame >= 3) {
     this.finalFrameScore()
   }


  }

  //occurs after the the frame has been added
  Score.prototype.finalFrameScore = function(score) {
    // if(this.result[2] !== 'X' || this.result[2] !== '/') {
    //   this.isOver = true;
    //   console.log('Game over Biatch');
    if ( this.result[2].indexOf('/') > -1 && this.frameRolls === 1) {
      this.isOver = true;
    }else if (this.result[2] === 'X' && this.result[3] === 'X' && this.frame === 5){
      this.isOver = true;
    }else if(this.result[2] === 'X' && this.result[3] !== 'X' && this.frame === 4) {
      this.isOver = true;
    } else {
      this.isOver = true;
    }

  }

   //end of game conditional- if strike on 10 frame - two more rolls if spare on 10 frame 1 more roll

  //Score.prototype.AddFrameScore = function() {}

  //Score.prototype.AddTotalScore = function() {}

module.exports = Score;


//calculate current score
//calcutalte frame score
//calculate total score
//conditions on when the game is over

//last time i did 1st roll and second roll, but this made it really messy to create conditions on when the game is over.