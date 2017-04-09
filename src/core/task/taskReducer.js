import { createData, updateData, deleteData } from '../../utils/callReducer'
import { TASK } from '../constants'

const initialState = [];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_TASK.SUCCESS: ================================
    case TASK.FETCH.SUCCESS:
      return action.payload
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
