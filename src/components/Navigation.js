import React from "react"
import { Link } from "@reach/router"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import "../lib/bootstrap.min.css"

const Navigation = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active",
          })
          : this.setState({
            navBarActiveClass: "",
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
              <div className="dropdown-divider"></div>
              <NavLink className="navigation-link" to="/nagovor-predsednika">
                Domov
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="navigation-link" to="/">
                Novice
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="navigation-link" to="/about">
                O&nbsp;nas
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavDropdown
                title="Operativa"
                id="basic-nav-dropdown"
                className="navigation-dropdown-link navigation-link"
              >
                <div className="dropdown-divider"></div>

                <NavLink className="navigation-link" to="/voznipark">
                  Vozni park
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="navigation-link" to="/pozarninacrt">
                  Območje delovanja
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="navigation-link" to="/aed-lokacije">
                  AED lokacije
                </NavLink>
              </NavDropdown>
              <div className="dropdown-divider"></div>
              <NavLink className="navigation-link" to="/zgodovina">
                Zgodovina
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavDropdown
                title="Galerija"
                id="basic-nav-dropdown"
                className="navigation-dropdown-link navigation-link"
              >
                <div className="dropdown-divider"></div>

                <NavLink className="navigation-link" to="/galerija-operativa">
                  Operativa
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="navigation-link" to="/galerija-mladina">
                  Mladina
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="navigation-link" to="/galerija-dogodki">
                  Dogodki
                </NavLink>
                <div className="dropdown-divider"></div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "lightgrey" : "a01818",
          backgroundColor: isCurrent ? "#a01818" : "",
        },
      }
    }}
  />
)

export default Navigation
