
import * as React from 'react';
let Navbar = require('react-bootstrap/lib/Navbar');
let NavItem = require('react-bootstrap/lib/NavItem');
let Nav = require ('react-bootstrap/lib/Nav');
import {Button ,FormGroup,FormControl} from 'react-bootstrap';

class NavigationBar extends React.Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Company-LOGO</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav >
              <NavItem eventKey={1} href="#">Home</NavItem>
              <NavItem eventKey={2} href="#">About</NavItem>
              <NavItem eventKey={3} href="#">Products</NavItem>
              <NavItem eventKey={4} href="#">Services</NavItem>
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavigationBar;
