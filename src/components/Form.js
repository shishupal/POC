import {HelpBlock,FormGroup, FormControl,ControlLabel ,Form,Col,Button,InputGroup} from 'react-bootstrap';
import React from 'react';

class CardForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      firstName: '',
      lastName:'',
      email:'',
      ssn:'',
      phoneNumber:''
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
    const state = this.state
         state[e.target.name] = e.target.value;
         this.setState(state);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state);
    
    event.preventDefault();
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
      <FormGroup controlId="firstName">
        <Col componentClass={ControlLabel} sm={2}>
        First Name
        </Col>
        <Col sm={6}>
          <FormControl
          type="text"
          name='firstName'
          placeholder=" First Name"
          value={this.state.firstName}
          onChange={this.handleChange} />
        </Col>
      </FormGroup>
      <FormGroup controlId="lastName">
        <Col componentClass={ControlLabel} sm={2}>
          Last Name
        </Col>
        <Col sm={6}>
          <FormControl
          type="text"
          name='lastName'
          placeholder="Last Name"
          value={this.state.lastName}
        onChange={this.handleChange} />
        </Col>
      </FormGroup>
      <FormGroup controlId="ssn">
        <Col componentClass={ControlLabel} sm={2}>
          SSN
        </Col>
        <Col sm={6}>
          <FormControl type="text"
          name='ssn'
          placeholder="Social security Number"
          value={this.state.ssn}
          onChange={this.handleChange}
          />
        </Col>
      </FormGroup>
        <FormGroup controlId="email">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={6}>
            <FormControl type="email"
              name='email'
            placeholder="Email"
            value={this.state.email}
              onChange={this.handleChange}
              />
          </Col>
        </FormGroup>

        <FormGroup controlId="phoneNumber">
          <Col componentClass={ControlLabel} sm={2}>
            Phone Number
          </Col>
          <Col sm={6}>
          <InputGroup>
      <InputGroup.Addon>+1</InputGroup.Addon>
      <FormControl type="text" placeholder="Phone Number"
        name="phoneNumber"
      value={this.state.phoneNumber}
        onChange={this.handleChange}
        />
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
