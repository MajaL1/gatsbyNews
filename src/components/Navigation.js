import React from "react"
import { Link } from "@reach/router"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
//import '../css/navigation.css'
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
              <NavLink className="navigation-link" to="/">
                Domov
              </NavLink>
              <NavLink className="navigation-link" to="/about">
                O&nbsp;nas
              </NavLink>
              <NavDropdown
                title="Operativa"
                id="basic-nav-dropdown"
                className="navigation-dropdown-link navigation-link"
              >
                <NavLink className="navigation-link" to="/voznipark">
                  Vozni park
                </NavLink>
                <NavLink className="navigation-link" to="/pozarninacrt">
                  Požarni načrt
                </NavLink>
              </NavDropdown>

              <NavLink className="navigation-link" to="/zgodovina">
                Zgodovina
              </NavLink>
              <NavLink className="navigation-link" to="/povezave">
                Povezave
              </NavLink>
              <NavDropdown
                title="Galerija"
                id="basic-nav-dropdown"
                className="navigation-dropdown-link navigation-link"
              >
                <NavLink className="navigation-link" to="/galerija-operativa">
                  Operativa
                </NavLink>
                <NavLink className="navigation-link" to="/galerija-mladina">
                  Mladina
                </NavLink>
                <NavLink className="navigation-link" to="/galerija-dogodki">
                  Dogodki
                </NavLink>
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
