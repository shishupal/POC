  /**
 * Created by Shishupal on 7/16/2016.
 */
import React from 'react';
import {Button} from 'react-bootstrap';
import CardForm from './Form';
import {bindActionCreators} from 'redux';
import {postInfo} from '../actions/index';
import Sucesss from './success';
import {connect} from'react-redux';
import '../styles/review.css';


class ReviewDetails extends React.Component {
  //isreview=false;
 constructor(props) {
   super(props);
   this.handleBack= this.handleBack.bind(this);
   this.handleSubmit= this.handleSubmit.bind(this);
   this.state={
     reviewClick:true,
     chkClick:false
   }
}
handleBack(event){
  Object.assign(this.props.data,{reviewClick:false});
  this.setState({reviewClick:false});
  event.preventDefault();
}

handleSubmit(event) {
event.preventDefault();
this.props.postInfo(this.props.data).then(info =>{
  this.setState({chkClick:true,reviewClick:false});
})
}
render(){
    if(this.state.reviewClick){
      return(
        <div className="row review">
        <div className="row">
            <div className='col-md-5 text-right'><strong>firstName:</strong></div>
          <div className='col-md-6 text-center'>{this.props.data.firstName}</div>
        </div>
        <div className="row ">
        <div className='col-md-5 text-right'><strong>LastName:</strong></div>
        <div className='col-md-6 text-center'>{this.props.data.lastName}</div>
        </div>
        <div className="row ">
        <div className='col-md-5 text-right'><strong> SSN:</strong></div>
        <div className='col-md-6 text-center'>{this.props.data.ssn}</div>
        </div>
        <div className="row ">
        <div className='col-md-5 text-right'><strong>Email:</strong></div>
        <div className='col-md-6 text-center'>{this.props.data.email}</div>
        </div>
        <div className="row ">
        <div className='col-md-5 text-right'><strong>PhoneNumber:</strong>:</div>
        <div className='col-md-6 text-center'>{this.props.data.phoneNumber}</div>
        </div>
          <div className='row'>
          <div className='col-md-4'></div>
            <div className='col-md-3'>
                <Button type="button" bsStyle="primary" onClick={this.handleBack}>  Back  </Button>
            </div>
            <div className='col-md-3'>
              <Button type="button" bsStyle="primary" onClick={this.handleSubmit}>  Submit  </Button>
            </div>
          </div>

        </div>
      )
    }
  else {
    if(this.state.chkClick && !this.state.reviewClick){
        return  <Sucesss/>
    }else {
      return  <CardForm  data={this.props.data}/>
    }
  }
}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({postInfo},dispatch);
}
function mapSateToProps(state) {
  return {Info:state.Info};
}

export default connect(mapSateToProps,mapDispatchToProps)(ReviewDetails);

//export default ReviewDetails;
