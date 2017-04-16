import { combineReducers } from 'redux'
import { taskReducer } from './task'
import { loadingReducer } from './loading'

const rootReducers = combineReducers({
  loading: loadingReducer,
  task: taskReducer,
})

export default rootReducers
