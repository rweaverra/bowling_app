import React, { useState } from 'react';
import Pins from './Pins.jsx';
import StrikeModal from './StrikeModal.jsx';
import SpareModal from './SpareModal.jsx';

function PlayArea({ rollBall, frameRolls, currentScore }) {
  const [modalShow, setModalShow] = useState(false);
  const [strikeHit, setStrikeHit] = useState(false);
  const [state, setState] = useState({
    showButton1: true,
    showButton2: true,
    showButton3: true,
    showButton4: true,
    showButton5: true,
    showButton6: true,
    showButton7: true,
    showButton8: true,
    showButton9: true,
    showButton10: true
  })


  function showStrikeSpare(value, copy) {
    console.log('value inside showStrikeSpare', value);
    console.log('current score', currentScore);
    if(value === 10) {
      for(var key2 in copy) {
        copy[key2] = true;
      }
     setStrikeHit(true);
     setModalShow(true);
    } else if(frameRolls > 0 && value === (10 - currentScore)) {
      //value equals the highes current pin
      console.log('inside spare finder')
      setModalShow(true);
    }

  }

  function toggleHide(value) {
    var copy = JSON.parse(JSON.stringify(state))


    if(frameRolls > 0) {
      showStrikeSpare(value, copy);
      for(var key1 in copy) {
        copy[key1] = true;
      }

      setState(copy);

    } else {

    for(let i = 11 - value; i <= 10; i++) {
        for (var key in copy) {
          if(key.indexOf(i) > -1) {
            copy[key] = false;
          }
        }
    }

    showStrikeSpare(value, copy);
    setState(copy);

    }

  }

  return (
    <div>
      <button onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button>
      <StrikeModal
      show={strikeModalShow}
      onHide={() => setModalShow(false);
      setStrikeHit(false)}
      strikeHit={strikeHit}
      />

      <Pins
        rollBall={rollBall}
        frameRolls={frameRolls}
        state={state}
        toggleHide={toggleHide}
        />
    </div>
  )
}

export default PlayArea;