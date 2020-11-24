import React from 'react';
import {
  Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button,
} from 'react-bootstrap';

function StrikeModal({show, onHide, isStrike}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >

      <Modal.Body>
  {isStrike ? <h1>Strike!!!!!</h1> : <h1>Spare!</h1> }
           <br/>
           <br/>
           <br/>

      </Modal.Body>
    </Modal>

  );
}

    export default StrikeModal;