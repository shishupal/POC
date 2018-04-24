import {FormGroup, FormControl,ControlLabel ,Form,Col,Button,InputGroup,FormData} from 'react-bootstrap';
import React from 'react';
//import post from './post';
import axios from 'axios';
import Sucesss from './success';


class CardForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      firstName: '',
      lastName:'',
      email:'',
      ssn:'',
      phoneNumber:'',
      chkClick :false
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
         console.log('A name was submitted: ' + this.state);
  }


  componentDidMount() {
  this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
  //console.log(event);
event.preventDefault();
  const data={
    firstName: document.getElementsByName("firstName")[0].value ||'',
    lastName:document.getElementsByName("lastName")[0].value ||'',
    email:document.getElementsByName("email")[0].value ||'',
    ssn:document.getElementsByName("ssn")[0].value || '',
    phoneNumber:document.getElementsByName("phoneNumber")[0].value ||''
  }
    //const formData = new FormData(event.target)
  console.log(data);
    axios.post('http://localhost:3000/db',data).then(data=>{
      alert("hello")
    }).catch(err=>{
      console.log(err);
      this.setState({chkClick:true})
    })

  }

  render() {
      if(!this.state.chkClick){
        return (
            <Form horizontal
            name="info"
             onSubmit={this.handleSubmit}>
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
      }else{
        return <Sucesss/>
      }

  }
}
export default CardForm;
