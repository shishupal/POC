import React from 'react';

class NavMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    //  this.state = { index: 0, direction: null };

  }
  render(){
  return (
    <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
  );
}
}
