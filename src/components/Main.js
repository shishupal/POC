require('normalize.css/normalize.css');
require('styles/App.css');
import NavigationBar  from './NavigationBar';
import React from 'react';
import {bindActionCreators} from 'redux';
import {fetchCards} from '../actions/index';
import {connect} from'react-redux';
import CardContainer from './cardContainer';
class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props.fetchCards();
  }
    render() {
    return (
      <div className="index">
        <NavigationBar/>
        <CardContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCards},dispatch);
}

export default connect(null,mapDispatchToProps)(AppComponent);
