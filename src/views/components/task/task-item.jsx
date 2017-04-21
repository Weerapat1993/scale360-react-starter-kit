import React from 'react'
import classNames from 'classnames'

class Task extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      title: this.props.task.title,
    }
  }

  editTitle() {
    this.setState({editing: true});
  }

  stopEditing() {
    this.setState({editing: false});
  }

  onKeyUp(event) {
    this.setState({title: event.target.value });
  }

  saveTitle(event) {
    event.preventDefault()
    if (this.state.editing) {
      const { task } = this.props;
      const title = this.state.title

      if (title.length && title !== task.title) {
        this.props.updateTask({title , id: task.id });
      }

      this.stopEditing();
    }
  }

  toggleStatus(task) {
    this.props.updateTask({ id: task.id, completed: !task.completed });
  }

  deleteTask(id) {
    this.props.deleteTask(id);
  }

  renderTitle(task) {
    return (
      <div
        className="task-item__title"
        ref={c => this.titleText = c}
        tabIndex="0">{task.title}
      </div>
    );
  }

  renderTitleInput(task) {
    return (
      <form onSubmit={(e) => this.saveTitle(e)}>
        <input
          autoComplete="off"
          autoFocus
          className="task-item__input"
          defaultValue={task.title}
          maxLength="64"
          onBlur={(e) => this.saveTitle(e)}
          onKeyUp={(e) => this.onKeyUp(e)}
          ref={c => this.titleInput = c}
          type="text"
        />
      </form>
    );
  }

  render () {
    const { editing } = this.state;
    const { task } = this.props;
    return (
      <div className={classNames('task-item',{'task-item--completed': task.completed}) } tabIndex="0">
        <div className="cell">
          <button
            aria-hidden={editing}
            aria-label="Mark task as completed"
            className={classNames('btn task-item__button', {'hide': editing})}
            onClick={() => this.toggleStatus(task)}
            type="button">
            <svg className={classNames('icon', {'icon--active': task.completed})} width="24" height="24" viewBox="0 0 24 24">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          </button>
        </div>
        <div className="cell">
          {editing ? this.renderTitleInput(task) : this.renderTitle(task)}
        </div>
        <div className="cell">
          <button
            aria-hidden={!editing}
            aria-label="Cancel editing"
            className={classNames('btn task-item__button', {'hide': !editing})}
            onClick={(e) => this.stopEditing(e)}
            ref={c => this.cancelEditButton = c}
            type="button">
            <svg className="icon" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </button>
          <button
            aria-hidden={editing}
            aria-label="Edit task"
            className={classNames('btn task-item__button', {'hide': editing})}
            onClick={(e) => this.editTitle(e)}
            ref={c => this.editButton = c}
            type="button">
            <svg className="icon" width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          </button>
          <button
            aria-hidden={editing}
            aria-label="Delete task"
            className={classNames('btn task-item__button', {'hide': editing})}
            onClick={() => this.deleteTask(task.id)}
            ref={c => this.deleteButton = c}
            type="button">
            <svg className="icon" width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </button>
        </div>
      </div>
    )
  }
}

export default Task;
