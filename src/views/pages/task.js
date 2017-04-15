import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { taskActions, getTaskFilter } from '../../core/task';

import TaskFilters from '../components/task/task-filters'
import TaskItem from '../components/task/task-item'
import TaskForm from '../components/task/task-form'


class Task extends Component {
  componentDidMount() {
    console.clear();
    this.props.taskActions.fetchTask()
  }

  createTask(title) {
    let data = {
      key: new Date().getTime(),
      title,
      completed: false
    }
    this.props.taskActions.createTask(data)
  }

  updateTask(data) {
    this.props.taskActions.updateTask(data)
  }

  deleteTask(key) {
    this.props.taskActions.deleteTask(key)
  }

  render() {
    const { tasks, loading } = this.props;
    const data = tasks.map((item, i) => (
        <TaskItem
          key={item.key}
          task={item}
          updateTask={(data) => this.updateTask(data)}
          deleteTask={(key) => this.deleteTask(key)}
        />
    ))
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Task Lists
          </div>
          <div className="card-body">
            <div className="g-row">
              <div className="g-col">
                <TaskForm createTask={(title) => this.createTask(title)} />
              </div>
              <div className="g-col">
                <TaskFilters search={this.props.location.search} />
                <div className="task-list">
                  { (!loading) ? data : <div className="loader"></div> }
                </div>
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
  loading: state.loading.taskLoading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  taskActions: bindActionCreators(taskActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
