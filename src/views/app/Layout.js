import React from 'react'
import { firebaseAuth } from '../../core/firebase'
import NavbarHeader from './components/NavbarHeader'
import Loading from './Loading'

export default class Layout extends React.Component {
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

  render () {
    const { authed, email } = this.state
    return ( (this.state.loading) ? <Loading /> :
      <div>
        <NavbarHeader authed={authed} email={email} {...this.props} />
        <div className="container">
          <div className="row">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}
