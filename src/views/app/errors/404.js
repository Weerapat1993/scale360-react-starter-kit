import React from 'react'

class Error404 extends React.Component {
  render () {
    return (
      <div className="text-center">
        <h1>404 NotFound</h1>
        <p>No Match for <code>{this.props.location.pathname}</code></p>
      </div>
    )
  }
}

export default Error404;
