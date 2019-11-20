import React from 'react'
import { Link } from '@reach/router'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
              <Link className="navigation-link" to="/">Domov</Link>
              <Link className="navigation-link" to="/about">O&nbsp;nas</Link>
              <NavDropdown title="Operativa" id="basic-nav-dropdown" className="navigation-dropdown-link navigation-link">
                <Link className="navigation-link" to="/voznipark">Vozni park</Link>
                <NavDropdown.Divider />
                <Link className="navigation-link" to="/pozarninacrt">Požarni načrt</Link>
              </NavDropdown>

              <Link className="navigation-link" to="/zgodovina">Zgodovina</Link>
              <Link className="navigation-link" to="/povezave">Povezave</Link>
              <Link className="navigation-link" to="/galerija">Galerija</Link>
              <Link className="navigation-link" to="/kontakt">Kontakt</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}



export default Navigation