
import React from 'react';

import {Modal,Button} from 'react-bootstrap';

class MyLargeModal extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Please Enter Your Details.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Form started</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default MyLargeModal;
