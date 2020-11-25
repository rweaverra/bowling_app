import React, { useState } from 'react';
import { startGame } from './../../lib/routes.js';
import { Modal, ModalBody } from 'react-bootstrap';

function StartGameModal({ submitName }) {
  const [name, setName] = useState('');
  const [isStarted, setIsStarted] = useState(true);

  const handleChange = (event) => {
    setName(event.target.value)
 }

  const submitStart = () => {
    event.preventDefault();
     setIsStarted(false);
      startGame(name, (err, result) => {
        if(err) {
          console.log(err)
        } else {
         console.log('game has started', result)
  }
})
  }

  return (
    <Modal
    show={isStarted}
    size="lg"
    centered
  >

    <Modal.Body>
       <div>
            <form
            onSubmit={ () => {
              submitStart();
              submitName(name);
            }}>
            <label>
                Enter Name to begin <br />
                <input type="text" name="name" value={name} onChange={handleChange}/>
                </label>
              <button>start!!</button>
            </form>
     </div>

    </Modal.Body>
  </Modal>
  )
}

export default StartGameModal;