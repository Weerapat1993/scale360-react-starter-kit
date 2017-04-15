import React from 'react'
import NavbarHeader from './components/NavbarHeader'

class Layout extends React.Component {
  render () {
    return (
      <div>
        <NavbarHeader {...this.props} />
        <div className="container">
          <div className="row">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
