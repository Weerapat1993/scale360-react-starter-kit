import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom'
import Layout from '../app/Layout'

class Home extends Component {
  render () {
    return (
      <Switch>
        <Layout>
          <div className="card">
            <div className="card-header">
              Task Lists
            </div>
            <div className="card-body">
              <Link to="/task" className="b">Task</Link>
            </div>
          </div>
        </Layout>
      </Switch>
    )
  }
}

export default Home
