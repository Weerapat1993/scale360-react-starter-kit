import { createData, updateData, deleteData } from '../../utils/callReducer'
// import { TASK } from '../constants'
import { TASK } from './taskActionTypes'

const initialState = [];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_TASK.SUCCESS: ================================
    case TASK.FETCH.SUCCESS:
      return action.payload
    // FETCH_TASK.FAILURE: ================================
    case TASK.FETCH.FAILURE:
      console.error(TASK.FETCH.FAILURE)
      console.error(action.payload);
      return state
    // CREATE_TASK: ================================
    case TASK.CREATE:
      return createData(state,action)
    // UPDATE_TASK: ================================
    case TASK.UPDATE:
      return updateData(state,action)
    // CREATE_TASK: ================================
    case TASK.DELETE:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}
