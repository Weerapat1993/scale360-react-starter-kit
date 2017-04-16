import React, { Component } from 'react'

class InputTemplate extends Component {
  constructor() {
    super()

    this.state = {
      title: ''
    }
  }

  handleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleKeyUp(e) {
    if (e.keyCode === 27) {
      this.clearInput();
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let title = this.state.title
    if(title === '') return false;
    this.props.handleSubmit(title)
    this.clearInput()
  }

  clearInput() {
    this.setState({ title: '' })
  }

  render () {
    const { className, placeholder } = this.props
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          className={className}
          autoComplete="off"
          autoFocus
          placeholder={placeholder}
          type="text"
          onChange={(e) => this.handleChange(e)}
          onKeyUp={(e) => this.handleKeyUp(e)}
          value={this.state.title}
        />
      </form>
    )
  }
}

export default InputTemplate;
