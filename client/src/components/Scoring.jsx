import React, { useState } from 'react';
import { postScore } from './../../lib/routes.js';
import PlayArea from './PlayArea.jsx';
import ScoreTable from './ScoreTable.jsx';

function Scoring() {
  const [frame, setFrame] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [result, setResult] = useState([]);
  const [frameScore, setFrameScore] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [frameRolls, setFrameRolls] =  useState(0);
  const [gameOver, setGameOver] = useState(false);



  const rollBall = (value) => {
    //send request to server with button pressed
    var score = value;
    postScore(score, (err, result) => {
        if(err) {
          console.log('error')
        } else {
          //set state
          let update = result.data;

          setFrame(update.frame + 1);
          setFrameRolls(update.frameRolls);
          setCurrentScore(update.currentScore);
          setResult(update.result);
          setFrameScore(update.frameScore);
          setTotalScore(update.totalScore);
          setGameOver(update.isOver);
        }
    });

    //receive back info and set the state with it and update state
  }
  return (
    <div>
      <ScoreTable
        result={result}
        frameScore={frameScore}
        totalScore={totalScore}
      />
      <div>
        <div>Game Over: {gameOver ? "gameOver" : "play On"}</div>
      </div>
        <PlayArea
        frameRolls={frameRolls}
        rollBall={rollBall}
        currentScore={currentScore}
        />
    </div>
  )
}

export default Scoring;