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
    }
  }
  componentDidMount () {
    this.removeListener = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return (this.state.loading) ? <Loading /> : <Routes authed={this.state.authed} />
  }
}
