
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
      this.result.push(`${this.currentScore} /`)
      this.frame++;
      this.frameRolls = 0;
      this.currentScore = 0;
       //check for open score
    } else if(this.frameRolls === 0 && score < 10) {
    this.currentScore = score;
    this.frameRolls += 1;
        //check for open score 2 rolls
  } else if(this.frameRolls === 1 && score < 10) {
      this.result.push(`${this.currentScore} ${score} `)
      this.frame ++;
      this.frameRolls = 0;
      this.currentScore = 0;
    }




   //****  will need to change frames to 10 or make this a variable <<<<<<<<<<<<<
   if(this.frame >= 3) {
     this.finalFrameScore()
   }


   this.addFrameScore();


  }

  //occurs after the the frame has been added
  Score.prototype.finalFrameScore = function(score) {
    console.log('inside final frame')
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
     const checkCurrentFrame = function(i, result) {
        //if X && frame + 2 !== undefined

    //so this issue is that "this" is undefined since it is inside of another function. I think I will have to bind this again so that it will refer to the Object's properties. This will be a good learning experience. I need to celebrate these roadblocks because it means I Am going to learn something new. when checkCurrentFrame is called, I think I need to bind this to this.


     }


  //iterate result
  if(this.result !== undefined) {

  for ( let i = 0; i < this.result.length; i++) {
    checkCurrentFrame(i, this.result);

  }

  }
  }



  //Score.prototype.AddTotalScore = function() {}

module.exports = Score;


//calculate current score
//calcutalte frame score
//calculate total score
//conditions on when the game is over

//last time i did 1st roll and second roll, but this made it really messy to create conditions on when the game is over.



/*
Score.prototype.addFrameScore = function() {
  //checkCurrentFrame Function
  var checkCurrentFrame = function(i) {
     //if X && frame + 2 !== undefined
      console.log('i inside check currentFrame this.result', this.result);
      if(this.result[i] === 'X') {
        console.log('eaaaat cheese')
      // add frame plus 1 and frame + 2 to result and return
      return this.frameScore[i] = this.result[i] + this.result[i + 1] + this.result[i + 2];
      //if X && frame + 1 !== undefined
    } else if (this.result[i] === 'X' && this.result[i + 1] !== undefined) {
        // add frame and frame + 1
         return this.frameScore[i] = this.result[i] + this.result[i + 1]
        // if X and frame + 1 === undefined
    } else if (this.result[i] === 'X' && this.result[i + 1] === undefined) {
        // return frame plus 10
        return this.frameScore[i] = 10;
    }

     //else if / && frame + 1 !== undefined
      // add frame and frame + 1
    //else if / && frame + 1 === undefined
      // add 10 to frame
    //else open score(length === 2 && not X or /)
    // iterate the two numbers and add them to frame score
    */