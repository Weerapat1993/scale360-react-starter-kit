import React, { Component } from 'react'
import Navbar from './Navbar'
import NodeEnv from './NodeEnv'
import { APP_NAME } from '../../../core/constants'
import Menu from './Menu'

class Layout extends Component {
  render () {
    return (
      <div>
        <Navbar />
          <div className="container">
            <h2 className="text-center">{ APP_NAME }</h2>
            <br/>
            <div className="row">
              <div className="grid-3">
                <Menu />
              </div>
              <div className="grid-9">
                { this.props.children }
              </div>
            </div>
          </div>
        <NodeEnv/>
      </div>
    )
  }
}

export default Layout;
