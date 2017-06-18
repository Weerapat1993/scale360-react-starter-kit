import React from 'react'
import BootstrapNavbar from './BootstrapNavbar'

class BootstrapLayout extends React.Component {
  render() {
    return (
      <div>
        <BootstrapNavbar />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default BootstrapLayout