require('normalize.css/normalize.css');
require('styles/App.css');
import NavigationBar  from './NavigationBar';
import React from 'react';
import ControlledCarousel from './Carousel';
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <NavigationBar/>
        <ControlledCarousel/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
