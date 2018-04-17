
import * as React from 'react';
let Navbar = require('react-bootstrap/lib/Navbar');
let NavItem = require('react-bootstrap/lib/NavItem');
let Nav = require ('react-bootstrap/lib/Nav');
import {Button ,FormGroup,FormControl} from 'react-bootstrap';
let yeomanImage = require('../images/usbank_logo.png');

class NavigationBar extends React.Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                <img width={120} height={30} alt="US BANK" src={yeomanImage}/>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav >
              <NavItem eventKey={1} href="#">Banking</NavItem>
              <NavItem eventKey={2} href="#">Personal</NavItem>
              <NavItem eventKey={3} href="#">Products</NavItem>
              <NavItem eventKey={4} href="#">Services</NavItem>
            </Nav>

            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{' '}
              <Button type="submit" className="btn-primary">Sign In</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavigationBar;
