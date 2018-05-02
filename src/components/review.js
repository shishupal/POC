/**
 * Created by Shishupal on 7/16/2016.
 */
import React from 'react';

const ReviewDetails = (props) =>{
  return(
    <div className="row list-group">
        <div className='col-md-6 text-center'><strong>firstName:</strong></div>
      <div className='col-md-6'>{props.data.firstName}</div>
      <div className='col-md-6 text-center'><strong>LastName:</strong></div>
      <div className='col-md-6'>{props.data.lastName}</div>
      <div className='col-md-6 text-center'><strong> SSN:</strong></div>
      <div className='col-md6'>{props.data.ssn}</div>
      <div className='col-md-6 text-center'><strong>Email:</strong></div>
      <div className='col-md6'>{props.data.email}</div>
      <div className='col-md-6 text-center'><strong>phone #:</strong>:</div>
      <div className='col-md6'>{props.data.phoneNumber}</div>
    </div>
  );
} ;

export default ReviewDetails;
