import { TASK_LOADING } from '../constants'

const initialState = {
  taskLoading: true
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    // TASK_LOADING: ================================
    case TASK_LOADING:
      return {
        ...state,
        taskLoading: action.loading
      }
    default:
      return state
  }
}
