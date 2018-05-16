import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from "reactstrap";

class NavComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Dragon Clicky Memory Game!</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <h3>Score {this.props.score}</h3>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }

}

export default NavComponent;