import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pins from './Pins.jsx';

function PlayArea({ rollBall, frameRolls }) {
  return (
    <div>
      <Pins
        rollBall={rollBall}
        frameRolls={frameRolls} />
    </div>
  )
}

export default PlayArea;