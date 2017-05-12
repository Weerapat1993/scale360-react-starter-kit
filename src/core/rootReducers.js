import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { taskReducer } from './task'

export default combineReducers({
  form: formReducer,
  task: taskReducer,
})
