import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { taskReducer } from './task'
import { loadingReducer } from './loading'

const rootReducers = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  task: taskReducer,
})

export default rootReducers
