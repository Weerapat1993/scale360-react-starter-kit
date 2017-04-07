import React, { Component } from 'react'
import Header from './Header'
import NodeEnv from './NodeEnv'
import { APP_NAME } from '../../../core/constants'

class Layout extends Component {
  render () {
    return (
      <div>
        <Header/>
          <div className="g-row">
            <div className="g-col">
            <h2>{ APP_NAME }</h2>
            { this.props.children }
            </div>
          </div>
        <NodeEnv/>
      </div>
    )
  }
}

export default Layout;
