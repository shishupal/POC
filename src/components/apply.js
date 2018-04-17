
import MyLargeModal from './modal';
import {ButtonToolbar,Button } from 'react-bootstrap';
import React from 'react';

class Apply extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      smShow: false,
      lgShow: false
    };
  }
  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <ButtonToolbar>
        <Button
          bsStyle="success"
          onClick={() => this.setState({ lgShow: true })}
        >Apply Now
        </Button>
        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
      </ButtonToolbar>
    );
  }
}
export default Apply;
