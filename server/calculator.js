
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
      this.frame ++;
      this.frameRolls = 0;
      //check for spare
    } else if(this.frameRolls === 1 && this.currentScore + score >= 10) {
      this.result.push(`${this.currentScore}/`)
      this.frame++;
      this.frameRolls = 0;
      this.currentScore = 0;
       //check for open score
    } else if(this.frameRolls === 0 && score < 10) {
    this.currentScore = score;
    this.frameRolls += 1;
        //check for open score 2 rolls
  } else if(this.frameRolls === 1 && score < 10) {
      this.result.push(`${this.currentScore}${score}`)
      this.frame ++;
      this.frameRolls = 0;
      this.currentScore = 0;
    }




   //****  will need to change frames to 10 or make this a variable <<<<<<<<<<<<<
   if(this.frame >= 3) {
     this.finalFrameScore()
   }


   this.addFrameScore();
   this.AddTotalScore();

  }

  //occurs after the the frame has been added
  Score.prototype.finalFrameScore = function(score) {
    //whis need to change this.result[2] to this.result[9] and do the same to make it work with 10 frames <<<<<<<<<<<<<<<<<
    if ( this.result[2].indexOf('/') > -1 && this.frameRolls === 1) {
      this.isOver = true;
    } else if( this.result[2].indexOf('/') > -1 && this.result[3] === 'X' ) {
      this.isOver = true;
    } else if (this.result[2] === 'X' && this.result[3] === 'X' && this.frame === 5){
      this.isOver = true;
    }else if(this.result[2] === 'X' && this.result[3] !== 'X' && this.frame === 4) {
      this.isOver = true;
    } else if (this.result[2].length >=  2 && this.result[2].indexOf('/') === -1) {
      this.isOver = true;
    }

  }

  //Score.prototype.AddFrameScore = function() {}
  Score.prototype.addFrameScore = function() {
     //checkCurrentFrame Function


     const checkCurrentFrame = function(i, result, frame) {
      var isStrike = result[i] === 'X';


       if(result[i].length >= 2 && result[i].indexOf('/') === -1) {
         let total = parseInt(result[i][0]) + parseInt(result[i][1]);
         return total;
       } else if(result[i].indexOf('/') > -1 && result[i + 1] === 'X') {
        let total = 20
        return total;
      } else if(result[i].indexOf('/') > -1 && result[i + 1]) {
        let total = 10 + parseInt(result[i + 1][0]);
        return total;
      } else if (isStrike && result[i + 1] === 'X' && result[i + 2] === 'X') {
        return 30;
      } else if ( isStrike && result[i + 1] === 'X' && result[i + 2]) {
        let total = 20 + parseInt(result[i + 2][0])
        return total;
      } else if ( isStrike && result[i + 1]) {
        if(result[i + 1]  === 'X'){
          return;
        }
        if(result[i + 1].indexOf('/') > -1) {
          console.log('inside X plus /')
          return 20;
        } else if ( isStrike && result[i + 1]) {
        let total = 10 + parseInt(result[i + 1][0]) + parseInt(result[i + 1][1])
        console.log('inside X then open', total)
        return total;
      }

     }
    }

  //iterate result
  if(this.result !== undefined) {

  for ( let i = 0; i < this.result.length; i++) {
    this.frameScore[i] = checkCurrentFrame(i, this.result, this.frame);

  }

  }
 console.log('this.result', this.result)
  console.log('this.frameScore', this.frameScore);
  }



  //Score.prototype.AddTotalScore = function() {}
  Score.prototype.AddTotalScore = function() {
    this.totalScore = 0;
    for (let i = 0; i < this.frameScore.length; i++) {
      if(this.frameScore[i] === undefined) {
        break;
      }
      this.totalScore += this.frameScore[i]
    }
  }

module.exports = Score;

//===========Info to help
// const isStrike = result[i] === 'X';
// if (isStrike && 'whatever else'...) {
  //const bowl = return Math.floor(Math.random() * 10)




