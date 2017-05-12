import React from 'react'
import LoginForm from '../../forms/LoginForm'

class Form extends React.Component {
  handleSubmit(values) {
    console.log(values);
    alert('Submit')
  }
  render () {
    return (
      <div>
        <h2>Login Form</h2>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Form;
