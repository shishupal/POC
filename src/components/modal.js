
import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import CardForm from './Form';
let bank_logo = require('../images/bank_logo.png');

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
          <Modal.Title id="contained-modal-title-lg">
          <div className='row'>
            <div className="col-md-4">
            <img width={120} height={30} alt="US BANK" src={bank_logo}/>
            </div>
            <div className="col-md-6 text-left bold">
            Please enter Your Details.
            </div>

          </div>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default MyLargeModal;
