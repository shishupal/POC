import React from 'react';

class NavMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render(){
  return (
    <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
  );
}
}
