require('normalize.css/normalize.css');
require('styles/App.css');
import NavigationBar  from './NavigationBar';
import React from 'react';
import CardContainer from './cardContainer';
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <NavigationBar/>
        <CardContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
