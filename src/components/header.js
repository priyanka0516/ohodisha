import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      navExpanded: false,
      dropdownVisible: false,
    };
  }
  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }
  setNavClose = () => {
    this.setState({ navExpanded: false });
  } 
  toggleDropdown = () => {
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  };
  toggleDropdown = () => {
    this.setState({ dropdownVisible: !this.state.dropdownVisible });
  };
  render() {
  return(
      <Navbar  expand="lg"sticky="top" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
        <Container>
          <Navbar.Brand to="/">
            <img src={require('./images/ohh_odisha.png')} alt="ohodisha" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"  onClick={this.setNavClose}>
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/about" className='nav-link'>About</Link>
              <Link to="/events" className='nav-link'>Events</Link>
              <Link to="/festival" className='nav-link'>Fairs & Festivals</Link>
              <Link to="/hiddengems" className='nav-link'>Crafts</Link>
              <Link to="/musuems" className='nav-link'>Museums</Link>
              {/* <Link to="/post" className='nav-link'>Post</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

