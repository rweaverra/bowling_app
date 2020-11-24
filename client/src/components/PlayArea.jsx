import React, { useState } from 'react';
import Pins from './Pins.jsx';
import StrikeModal from './StrikeModal.jsx';

function PlayArea({ rollBall, frameRolls }) {
  const [modalShow, setModalShow] = useState(false);
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

  function toggleHide(value) {
    var copy = JSON.parse(JSON.stringify(state))


    if(frameRolls > 0) {
      //reset pins
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

    //I will make this a separate function called alert strike, spare, or open and call it after each toggle Hide

    if(value === 10) {
      for(var key2 in copy) {
        copy[key2] = true;
      }
     alert("strike!")//modal strike probably need state true false for strike modal can put modal inside playArea
    }//else if value === highest value and frame rolls === 1 then show spare modal

    //else show open modal and calcuate score
    setState(copy);

    }

  }

  return (
    <div>
      <button onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button>
      <StrikeModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
      <Pins
        rollBall={rollBall}
        frameRolls={frameRolls}
        state={state}
        toggleHide={toggleHide} />
    </div>
  )
}

export default PlayArea;