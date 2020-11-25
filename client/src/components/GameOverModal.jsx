import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';

function GameOverModal({ gameOver, totalScore, onHide }) {

  return (
    <Modal
    show={gameOver}
    onHide={onHide}
    size="lg"
    centered
  >

    <Modal.Body>
      <h1>Game Over</h1>
      <h2>Total Score: {totalScore}</h2>
         <br/>
         <br/>
         <br/>

    </Modal.Body>
  </Modal>
  )
}

export default GameOverModal;