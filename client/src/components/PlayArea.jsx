import React from 'react';


function PlayArea({ rollBall }) {

  return (
    <div>
      <div>
        <button onClick={rollBall} value={1}>1</button>
        <button  onClick={rollBall} value="2">2</button>
        <button  onClick={rollBall} value="3">3</button>
        <button  onClick={rollBall} value="4">4</button>
        <button  onClick={rollBall} value="5">5</button>
        <button  onClick={rollBall} value="6">6</button>
        <button  onClick={rollBall} value="7">7</button>
        <button  onClick={rollBall} value="8">8</button>
        <button  onClick={rollBall} value="9">9</button>
        <button  onClick={rollBall} value="10">10</button>
      </div>
    </div>
  )
}

export default PlayArea;