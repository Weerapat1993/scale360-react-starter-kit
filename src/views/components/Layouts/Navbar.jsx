import React from 'react'
import Avatar from '../../assets/images/icon/users-user-icon.png';
import Logo from '../../assets/images/logo/logo.png';
import { APP_NAME } from '../../../core/constants'

class Navbar extends React.Component {
  render() {
    const name = 'Username'
    return (
      <nav className="fixed">
        <ul className="navbar">
          <div className="nav-brand bold">
            <a href="/">
              <img src={Logo} alt="Logo"/>
              <span className="desktop-only">{ APP_NAME }</span>
            </a>
          </div>
          <li>
            <a href="https://github.com/weerapat1993/scale360-react-starter-kit" className="font">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#menu" className="font">
              <i className="fa fa-bars"></i>
            </a>
          </li>
          <li>
            <a className="profile" href="#profile"><img src={Avatar} alt="Avatar" className="profile-img"/><span className="profile-name">{ name }</span></a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
