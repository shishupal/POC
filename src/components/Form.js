import {FormGroup, FormControl,ControlLabel ,Form,Col,Button,InputGroup} from 'react-bootstrap';
import React from 'react';
import Sucesss from './success';
import {bindActionCreators} from 'redux';
import {postInfo} from '../actions/index';
import {connect} from'react-redux';


class CardForm extends React.Component {
  constructor(props) {
    super(props);
    //this.props.postInfo({"firstName":"","lastName":"","email":"shishupal096@gmail.com","ssn":"12345657888","phoneNumber":"4800000000000"});
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
 bollcheck =(error)=>{

   if(error >= 1 && error <= 4 ){
     return <div  className=" text-danger" > Please enter first Name of minmum  5 character </div>;
   }
return '';
};
bollchecklastName =(error)=>{

  if(error >= 1 && error <=4 ){
    return <div  className="text-danger" > Please enter last Name of minmum  5 character</div>;
  }
return '';
};
bollcheckssn = (error)=>{

  if(error >= 1 && error <9 ){
    return <div  className="text-danger" >  Please enter minmum of 9 digits Numbers</div>;
  }
return '';
};
bollcheckphoneNumber =(error)=>{

  if(error >= 1 && error <=9 ){
    return <div  className="bold text-danger" > Please enter Valid Phone number.</div>;
  }
return '';
};
bollcheckEmail =(error)=>{

  if(!error.includes('@')){
    if(error.length==0){
      return '';
    }
    return <div  className="bold text-danger" > Please enter Valid Email.</div>;
  }
return '';
};
  getValidationState(value) {
    const length = value.length;
     if (length > 5) return 'success';
    else if (length > 0 && length <= 4) return 'error';
    return null;
  }
  getValidationStateSSN(value) {
    const length = value.length;
     if (length > 8) return 'success';
    else if (length > 0 && length <= 7) return 'error';
    return null;
  }

  getValidationStatePhone(value) {
    const length = value.length;
     if (length == 10) return 'success';
    else if (length > 0 && length <= 9) return 'error';
    return null;
  }

  getValidationStateEmail(value) {
    const length = value.length;
     if (length == 10) return 'success';
    else if (length > 0 && length <= 7) return 'error';
    return null;
  }
  handleChange(e) {
    const state = this.state
         state[e.target.name] = e.target.value;
         this.setState(state);
        // console.log('A name was submitted: ' + this.state);
  }


  componentDidMount() {
  this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
  //console.log(event);
event.preventDefault();
  const data={
    firstName: document.getElementsByName('firstName')[0].value ||'',
    lastName:document.getElementsByName('lastName')[0].value ||'',
    email:document.getElementsByName('email')[0].value ||'',
    ssn:document.getElementsByName('ssn')[0].value || '',
    phoneNumber:document.getElementsByName('phoneNumber')[0].value ||''
  }

  this.props.postInfo(data).then(info =>{
    //console.log()
    this.setState({chkClick:true})
  });

    //const formData = new FormData(event.target)
//  console.log(data);

  }

  render() {

      if(!this.state.chkClick){
        return (
            <Form horizontal
            name="info"
             onSubmit={this.handleSubmit}>
            <FormGroup controlId="firstName"
            validationState={this.getValidationState(this.state.firstName)}>
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
              <Col sm={4}>
                {this.bollcheck(this.state.firstName.length)}
              </Col>

            </FormGroup>
            <FormGroup controlId="lastName"
            validationState={this.getValidationState(this.state.lastName)}
            >
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
               <Col sm={4}>
                {this.bollchecklastName(this.state.lastName.length)}
              </Col>
            </FormGroup>
            <FormGroup controlId="ssn"
              validationState={this.getValidationStateSSN(this.state.ssn)}
            >
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
              <Col sm={4}> {this.bollcheckssn(this.state.ssn.length)}</Col>
            </FormGroup>
              <FormGroup controlId="email"
              validationState= {this.getValidationStateEmail(this.state.email)}
              >
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
                  <Col sm={4}>{this.bollcheckEmail(this.state.email)}</Col>
              </FormGroup>

              <FormGroup controlId="phoneNumber"
              validationState={this.getValidationStatePhone(this.state.phoneNumber)}
              >
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
                <Col sm={4}>{this.bollcheckphoneNumber(this.state.phoneNumber.length)}</Col>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({postInfo},dispatch);
}
function mapSateToProps(state) {
  return {Info:state.Info};
}

export default connect(mapSateToProps,mapDispatchToProps)(CardForm);

//export default CardForm;
