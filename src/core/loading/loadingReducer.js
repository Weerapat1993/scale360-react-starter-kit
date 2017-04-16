const LOADING = 'LOADING'

const initialState = {
  authLoading: true,
  taskLoading: true
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    // ALL_LOADING: ================================
    case LOADING:
      return {
        ...state,
        [action.loading]: action.bool
      }
    default:
      return state
  }
}
