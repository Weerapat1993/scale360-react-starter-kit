import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import Layout from '../app/Layout'

class About extends Component {
  render () {
    return (
      <Switch>
        <Layout>
          <div className="card">
            <div className="card-header">
              About
            </div>
            <div className="card-body">
              About
            </div>
          </div>
        </Layout>
      </Switch>
    )
  }
}

export default About;
