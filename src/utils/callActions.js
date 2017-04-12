import { CALL_API } from 'redux-api-middleware'

// Actions
export const getApiMiddleware = (API, ACTION_TYPE, Action, loading) => (dispatch, getState) => {
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

/**
 * GET Fetch API Data
 * @param {string} API
 * @param {string} ACTION_TYPE 
 * @param {function} Action 
 * @param {function} loading 
 */
export const getFetchApi = (API, ACTION_TYPE, Action, loading) => (dispatch, getState) => {
  dispatch(loading(true))
  fetch(API)
    .then(res => res.json())
    .then(res => {
      dispatch(Action(res, ACTION_TYPE.SUCCESS))
      dispatch(loading(false))
    })
    .catch(err => {
      console.error(ACTION_TYPE.FAILURE, err);
      dispatch(loading(false))
    })
}

/**
 * Payload Actions
 * @param {string} ACTION_TYPE 
 * @param {function} Action
 * @param {*} payload 
 * @param {function} loading 
 */
export const payloadActions = (ACTION_TYPE, Action, payload, loading) => (dispatch, getState) => {
  dispatch(loading(true))
  dispatch(Action(payload, ACTION_TYPE.SUCCESS))
  dispatch(loading(false))
}
