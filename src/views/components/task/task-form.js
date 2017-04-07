import React, { PropTypes } from 'react'

class TaskForm extends React.Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired
  };
  constructor(props, context) {
    super(props, context);

    this.state = {title: ''};
  }

  clearInput() {
    this.setState({title: ''});
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  handleKeyUp(e) {
    if (e.keyCode === 27) {
      this.clearInput();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title.trim();
    if (title.length) this.props.createTask(title);
    this.clearInput();
  }


  render () {
    return (
      <form className="task-form" onSubmit={(e) => this.handleSubmit(e)} noValidate>
        <input
          autoComplete="off"
          autoFocus
          className="task-form__input"
          maxLength="64"
          onChange={(e) => this.handleChange(e)}
          onKeyUp={(e) => this.handleKeyUp(e)}
          placeholder="What needs to be done?"
          ref={c => this.titleInput = c}
          type="text"
          value={this.state.title}
        />
      </form>
    )
  }
}

export default TaskForm;
