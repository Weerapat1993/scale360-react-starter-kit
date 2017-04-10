import React, { Component } from 'react'
import Sidebar from './Sidebar'

class Menu extends Component {
  render () {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <i className="fa fa-bars"></i> Menu
          </div>
          <div className="card-body no-padding">
            <Sidebar />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <i className="fa fa-bar-chart"></i> Statistic
          </div>
          <div className="card-body">
            Statistic
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
