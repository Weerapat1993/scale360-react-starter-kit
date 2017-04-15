import React, { Component } from 'react'
import { firebaseAuth } from '../../core/firebase'
import { Routes } from '../routes'
import Loading from './Loading'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      authed: false,
      loading: true,
      email: ''
    }
  }
  componentDidMount () {
    this.removeListener = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          email: user.email
        })
      } else {
        this.setState({
          authed: false,
          loading: false,
          email: null
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return (this.state.loading) ? <Loading /> : <Routes authed={this.state.authed} email={this.state.email} />
  }
}
