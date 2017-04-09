import { CALL_API } from 'redux-api-middleware'

// Actions
export const getApiMiddleware = (API, ACTION_TYPE, loading) => (dispatch, getState) => {
  dispatch(loading(true))
  dispatch({
    [CALL_API]: {
      endpoint: API,
      method: 'GET',
      types: [
        ACTION_TYPE.REQUEST,
        {
          type: ACTION_TYPE.SUCCESS,
          payload: (action, state, res) => {
            dispatch(loading(false))
            return res.json()
          }
        },
        {
          type: ACTION_TYPE.FAILURE,
          payload: (action, state, res) => {
            console.error(ACTION_TYPE.FAILURE);
            console.error(res);
            dispatch(loading(false))
            return res.json()
          }
        }
      ]
    }
  })
}

export const getFetchApi = (API, ACTION_TYPE, loading) => (dispatch, getState) => {
  dispatch(loading(true))
  fetch(API)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: ACTION_TYPE.SUCCESS,
        payload: res
      })
      dispatch(loading(false))
    })
    .catch(err => {
      console.error(ACTION_TYPE.FAILURE);
      console.error(err);
      dispatch({
        type: ACTION_TYPE.FAILURE,
        payload: err
      })
      dispatch(loading(false))
    })
}

export const createActions = (ACTION_TYPE, data, loading) => (dispatch, getState) => {
  dispatch(loading(true))
  dispatch({
    type: ACTION_TYPE,
    data
  })
  dispatch(loading(false))
}

export const updateActions = (ACTION_TYPE, data, loading) => (dispatch, getState) => {
  dispatch(loading(true))
  dispatch({
    type: ACTION_TYPE,
    data
  })
  dispatch(loading(false))
}

export const deleteActions = (ACTION_TYPE, key, loading) => (dispatch, getState) => {
  dispatch(loading(true))
  dispatch({
    type: ACTION_TYPE,
    key
  })
  dispatch(loading(false))
}
