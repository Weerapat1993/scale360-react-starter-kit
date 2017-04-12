import { createData, updateData, deleteData } from '../../utils/callReducer'
import { TASK } from '../constants'

const initialState = [];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_TASK_SUCCESS: ================================
    case TASK.FETCH.SUCCESS:
      return action.payload
    // CREATE_TASK_SUCCESS: ================================
    case TASK.CREATE.SUCCESS:
      return createData(state,action)
    // UPDATE_TASK_SUCCESS: ================================
    case TASK.UPDATE.SUCCESS:
      return updateData(state,action)
    // CREATE_TASK_SUCCESS: ================================
    case TASK.DELETE.SUCCESS:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}
