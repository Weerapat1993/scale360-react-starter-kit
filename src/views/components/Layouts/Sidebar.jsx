import React, { Component } from 'react'
import { Link } from 'react-router'

class Sidebar extends Component {
  render () {
    return (
      <ul className="sidebar">
        <li><Link activeClassName="active" to="/home">Home</Link></li>
        <li><Link activeClassName="active" to="/about">About</Link></li>
        <li><Link activeClassName="active" to="/task">Task</Link></li>
      </ul>
    )
  }
}

export default Sidebar;
