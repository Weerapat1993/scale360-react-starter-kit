import React from 'react'
import { logout } from '../../../utils/firebase/auth'
import { APP_NAME } from '../../../core/constants'
import RouterLink from './RouterLink'
import {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap'

class NavbarHeader extends React.Component {
  render () {
    const { authed, email, location } = this.props
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">{ APP_NAME }</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <RouterLink to="/" location={location}>Home</RouterLink>
            <RouterLink to="/about" location={location}>About</RouterLink>
            {
              authed ? <RouterLink to="/task" location={location}>Task</RouterLink> : ''
            }
          </Nav>
          {
            !authed ? <Nav pullRight>
              <RouterLink to="/login" location={location}>Login</RouterLink>
              <RouterLink to="/register" location={location}>Register</RouterLink>
            </Nav> : <Nav pullRight>
              <NavDropdown eventKey={1} title={email} id="basic-nav-dropdown">
                <RouterLink to="/profile" location={location}>Profile</RouterLink>
                <MenuItem divider />
                <RouterLink handleClick={() => logout()} location={location}>Logout</RouterLink>
              </NavDropdown>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarHeader
