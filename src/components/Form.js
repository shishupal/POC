import {HelpBlock,FormGroup, FormControl,ControlLabel ,Form,Col,Button,InputGroup} from 'react-bootstrap';
import React from 'react';

class CardForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form horizontal>
      <FormGroup controlId="formHorizontalFirstName">
        <Col componentClass={ControlLabel} sm={2}>
        First Name
        </Col>
        <Col sm={6}>
          <FormControl type="text" placeholder=" First Name" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalLastName">
        <Col componentClass={ControlLabel} sm={2}>
          Last Name
        </Col>
        <Col sm={6}>
          <FormControl type="text" placeholder="Last Name" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalLastName">
        <Col componentClass={ControlLabel} sm={2}>
          SSN
        </Col>
        <Col sm={6}>
          <FormControl type="text" placeholder="Social security Number" />
        </Col>
      </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={6}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Phone Number
          </Col>
          <Col sm={6}>
          <InputGroup>
      <InputGroup.Addon>+1</InputGroup.Addon>
      <FormControl type="text" placeholder="Phone Number" />
    </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" bsStyle="primary">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
export default CardForm;
