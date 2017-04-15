import React from 'react'
import Layout from '../Layout'
import { Switch } from 'react-router-dom'

class Error404 extends React.Component {
  render () {
    return (
      <Switch>
        <Layout>
          <h1 className="text-center">404 NotFound</h1>
        </Layout>
      </Switch>
    )
  }
}

export default Error404;
