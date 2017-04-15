import React, { Component } from 'react'
import { auth } from '../../../utils/firebase/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.pw.value !== this.pw2.value){
      this.setState({ registerError: 'Password is not match.'})
    } else {
      auth(this.email.value, this.pw.value)
        .catch(e => this.setState(setErrorMsg(e)))
    }
  }
  render () {
    return (
      <div>
        <div className="col-sm-6 col-sm-offset-3">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password" ref={(pw2) => this.pw2 = pw2} />
            </div>
            {
              this.state.registerError &&
              <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                &nbsp;{this.state.registerError}
              </div>
            }
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    )
  }
}
