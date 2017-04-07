import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render () {
    return (
      <div className="row">
        <div className="grid-4">
          <div className="card">
            <div className="card-header">
              Task List
            </div>
            <div className="card-body">
              <Link to="/task" className="b">Task</Link>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Home;
