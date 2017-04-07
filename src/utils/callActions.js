import { CALL_API } from 'redux-api-middleware'

// Actions
export const getApiMiddleware = (API, ACTION_TYPE) => ({
  [CALL_API]: {
    endpoint: API,
    method: 'GET',
    types: [
      ACTION_TYPE.REQUEST,
      ACTION_TYPE.SUCCESS,
      ACTION_TYPE.FAILURE
    ]
  }
})

export const getFetchApi = (API, ACTION_TYPE, loading) => (dispach, getState) => {
  dispach(loading(true))
  fetch(API)
    .then(res => res.json())
    .then(res => {
      dispach({
        type: ACTION_TYPE.SUCCESS,
        payload: res
      })
      dispach(loading(false))
    })
    .catch(err => {
      dispach({
        type: ACTION_TYPE.FAILURE,
        payload: err
      })
      dispach(loading(false))
    })
}

export const createActions = (ACTION_TYPE, data, loading) => (dispach, getState) => {
  dispach(loading(true))
  dispach({
    type: ACTION_TYPE,
    data
  })
  dispach(loading(false))
}

export const updateActions = (ACTION_TYPE, data, loading) => (dispach, getState) => {
  dispach(loading(true))
  dispach({
    type: ACTION_TYPE,
    data
  })
  dispach(loading(false))
}

export const deleteActions = (ACTION_TYPE, key, loading) => (dispach, getState) => {
  dispach(loading(true))
  dispach({
    type: ACTION_TYPE,
    key
  })
  dispach(loading(false))
}
