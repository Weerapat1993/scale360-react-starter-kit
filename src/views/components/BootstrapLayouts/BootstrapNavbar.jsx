import React from 'react'
import NavLink from './NavLink'

class BootstrapNavbar extends React.Component {
  render() {
    const textMenu = {
      color: '#00BCD4',
    };
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a href="#/" className="navbar-brand" style={textMenu}>Character Model</a>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="app-navbar-collapse">
            <ul className="nav navbar-nav">
                <NavLink to="/" onlyActiveOnIndex>
                  Home
                </NavLink>
                <NavLink to="/about">
                  About
                </NavLink>
                <NavLink to="/gallery">
                  Gallery
                </NavLink>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <NavLink to="/login">
                  Login
                </NavLink>
                <NavLink to="/register">
                  Register
                </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default BootstrapNavbar