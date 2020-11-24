import React from 'react';
import {
  Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button,
} from 'react-bootstrap';

function StrikeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"

      centered
    >

      <Modal.Body>
        <h1>Strike!!!!!</h1>
           <br/>
           <br/>
           <br/>

      </Modal.Body>
    </Modal>

  );
}

    export default StrikeModal;