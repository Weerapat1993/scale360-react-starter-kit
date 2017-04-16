import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render () {
    return (
      <div className="card">
        <div className="card-header">
          Task Lists
        </div>
        <div className="card-body">
          <Link to="/task" className="b">Task</Link>
        </div>
      </div>
    )
  }
}

export default Home;
