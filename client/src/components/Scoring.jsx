import React, { useState } from 'react';
import { postScore } from './../../lib/routes.js';
import { startGame } from './../../lib/routes.js';
import PlayArea from './PlayArea.jsx';
import ScoreTable from './ScoreTable.jsx';
import GameOverModal from './GameOverModal.jsx';

function Scoring() {
  const [name, setName] = useState('');
  const [frame, setFrame] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [result, setResult] = useState([]);
  const [frameScore, setFrameScore] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [frameRolls, setFrameRolls] =  useState(0);
  const [gameOver, setGameOver] = useState(false);


  const resultsAfterRoll = (update) => {
    setName(update.name);
          setFrame(update.frame + 1);
          setFrameRolls(update.frameRolls);
          setCurrentScore(update.currentScore);
          setResult(update.result);
          setFrameScore(update.frameScore);
          setTotalScore(update.totalScore);
          setGameOver(update.isOver);

  }

  const rollBall = (value) => {
    //send request to server with button pressed
    var score = value;
    postScore(score, (err, result) => {
        if(err) {
          console.log('error')
        } else {
          //set state
          let update = result.data;
         console.log('update inside of roll score', update)
         resultsAfterRoll(update);
        }
    });
  }
  //onHide function that will reset the game. not sure if I can just write a function to reset calulator or how I go about that.
  const onHide = () => {
    //post request to calculator to reset the player object
    startGame(name, (err, result) => {
      if(err) {
        console.log(err)
      } else {
        resultsAfterRoll(result.data)
        //have to reset all of the pins
}
})
    setGameOver(false);
  }



  return (
    <div>
      <ScoreTable
        result={result}
        frameScore={frameScore}
        totalScore={totalScore}
      />
      <div>
        <GameOverModal
          gameOver={gameOver}
          totalScore={totalScore}
          onHide={onHide}
          />
      </div>
        <PlayArea
        frameRolls={frameRolls}
        rollBall={rollBall}
        currentScore={currentScore}
        gameOver={gameOver}

        />
    </div>
  )
}

export default Scoring;