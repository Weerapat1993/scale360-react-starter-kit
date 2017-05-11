import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset } from 'redux-form';
import { taskActions, getTaskFilter } from '../../../core/task';

import TaskFilters from './task-filters'
import TaskItem from './task-item'
import TaskReduxForm from '../../forms/TaskForm'

class Task extends Component {
  componentDidMount() {
    // console.clear();
    this.props.taskActions.fetchTask()
  }

  createTask(values, dispatch, props) {
    const data = {
      id: new Date().getTime(),
      title: values.title,
      completed: false
    }
    dispatch(taskActions.createTask(data));
    dispatch(reset('TaskForm'));
  }

  updateTask(data) {
    this.props.taskActions.updateTask(data)
  }

  deleteTask(id) {
    this.props.taskActions.deleteTask(id)
  }

  render() {
    const { tasks, loading } = this.props;
    const data = tasks.map((item, i) => (
        <TaskItem
          key={item.id}
          task={item}
          updateTask={(data) => this.updateTask(data)}
          deleteTask={(id) => this.deleteTask(id)}
        />
    ))
    return (
      <div className="card">
        <div className="card-header">
          Task Lists
        </div>
        <div className="card-body">
          <div className="g-row">
            <div className="g-col">
              <TaskReduxForm onSubmit={this.createTask} />
            </div>
            <div className="g-col">
              <TaskFilters filter={this.props.location.query.filter} />
              <div className="task-list">
                { (!loading) ? data : <div className="loader"></div> }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  tasks: getTaskFilter(state,ownProps),
  loading: state.task.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  taskActions: bindActionCreators(taskActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
