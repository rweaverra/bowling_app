
  const Score = function() {
  this.frame = 0,
  this.currentScore = 0,
  this.result = [],
  this.frameScore = [],
  this.totalScore = 0,
  this.frameRolls = 0,
  this.isOver = false

  }

  Score.prototype.calculateScore = (score) => {
    this.frame = 'wassap';
    this.currentScore = score;
//its calling this method, but this.frame isn't changing, and Im not sure why this is happening. Im not sure if I am handling the global object correctly. perhaps this is not correct.
   console.log('inside calculateScore');
  }

module.exports = Score;


//lets make this an object and give it its own methods. I want to go over this kind of stuff and then I can do this.method ect. This way I believe I can make it multiplayer.

//calculate current score
//calcutalte frame score
//calculate total score
//conditions on when the game is over

//last time i did 1st roll and second roll, but this made it really messy to create conditions on when the game is over.