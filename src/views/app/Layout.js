import React from 'react'
import NavbarHeader from './components/NavbarHeader'

export default class Layout extends React.Component {
  render () {
    const { authed } = this.props
    return (
      <div>
        <NavbarHeader authed={authed} />
        <div className="container">
          <div className="row">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}
