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
    contentClassName="startModal"

  >

    <Modal.Body>
       <div>
            <form
            onSubmit={ () => {
              submitStart();
              submitName(name);
            }}>
            <label>
                <p className="modalTitle">Enter Name to begin <br /></p>
                <input type="text" name="name" value={name} onChange={handleChange}/>
                </label>
              <button>Start</button>
            </form>
     </div>

    </Modal.Body>
  </Modal>
  )
}

export default StartGameModal;