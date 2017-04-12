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
    const { authed } = this.props
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
            <RouterLink to="/" active>Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            {
              authed ? <RouterLink to="/task">Task</RouterLink> : ''
            }
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          {
            !authed ? <Nav pullRight>
              <RouterLink to="/login">Login</RouterLink>
              <RouterLink to="/register">Register</RouterLink>
            </Nav> : <Nav pullRight>
              <RouterLink handleClick={() => logout()}>Logout</RouterLink>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarHeader
