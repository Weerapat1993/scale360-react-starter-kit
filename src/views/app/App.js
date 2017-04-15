import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authActions } from '../../core/auth'
import { loadingActions } from '../../core/loading'
import { firebaseAuth } from '../../core/firebase'

import Loading from './Loading'
import { Routes } from '../routes'

class App extends Component {
  componentDidMount () {
    // this.props.authActions.loginAuth()
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.props.loadingActions.allLoading('authLoading', false)
        this.props.authActions.loginAuthSuccess(user)
      } else {
        this.props.loadingActions.allLoading('authLoading', false)
        this.props.authActions.logoutAuthSuccess()
      }
    })
  }
  render() {
    const { authed, email } = this.props.auth
    return (this.props.loading) ? <Loading /> : <Routes authed={authed} email={email} />
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
  loading: state.loading.authLoading,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  authActions: bindActionCreators(authActions, dispatch),
  loadingActions: bindActionCreators(loadingActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
