import React from 'react'

class NodeEnv extends React.Component {
  render () {
    return (
      <div className={`node-env ${process.env.NODE_ENV}`}>
        {process.env.NODE_ENV.toUpperCase()}
      </div>
    )
  }
}

export default NodeEnv;
