import React from 'react'

import Contact from './Contact';
import { Router, Link } from '@reach/router'
import { Nav, Navbar, NavDropdown, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormControl, Button } from 'react-bootstrap';
//import '../css/navigation.css'
import '../lib/bootstrap.min.css'



const Navigation = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <div className="navigation">
        <Navbar bg="link" className="navigation-content" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <NavDropdown.Item href="/">Domov</NavDropdown.Item>
            <NavDropdown.Item href="about">O nas</NavDropdown.Item>
            */}
              <Link className="navigation-link" to="/">Domov</Link>
              <Link className="navigation-link" to="/about">O&nbsp;nas</Link>
              <NavDropdown title="Operativa" id="basic-nav-dropdown" className="navigation-link">
                {/*  <NavDropdown.Item href="voznipark" className="navigation-link">Vozni park</NavDropdown.Item>
              <NavDropdown.Item href="pozarninacrt" className="navigation-link">Pozarni nacrt</NavDropdown.Item>
 */}
                <Link className="navigation-link" to="/voznipark">Vozni park</Link>
                <NavDropdown.Divider />
                <Link className="navigation-link" to="/pozarninacrt">Požarni načrt</Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <Link className="navigation-link" to="/zgodovina">Zgodovina</Link>
              <Link className="navigation-link" to="/povezave">Povezave</Link>
              <Link className="navigation-link" to="/galerija">Galerija</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/*<nav>
  <Link to="/">Domov</Link>
   <Link to="operativa">Operativa</Link>
</nav>
       <Router>   
          <Home path="/home" />
          <Operativa path="operativa">
            <VozniPark path="/voznipark" />
            <PozarniNacrt path="/pozarninacrt" />
          </Operativa>
      </Router> */}
      </div>
    )
  }
}



export default Navigation