import { CALL_API } from 'redux-api-middleware'
import { allLoading } from '../core/loading/loadingActions'

// Actions
export const getApiMiddleware = (API, ACTION_TYPE, Action, loading) => (dispatch, getState) => {
  dispatch(allLoading(loading, true))
  dispatch({
    [CALL_API]: {
      endpoint: API,
      method: 'GET',
      types: [
        ACTION_TYPE.REQUEST,
        {
          type: ACTION_TYPE.SUCCESS,
          payload: (action, state, res) => {
            dispatch(allLoading(loading, false))
            return res.json()
          }
        },
        {
          type: ACTION_TYPE.FAILURE,
          payload: (action, state, res) => {
            console.error(ACTION_TYPE.FAILURE);
            console.error(res);
            dispatch(allLoading(loading, false))
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
 * @param {string} loading
 */
export const getFetchApi = (API, ACTION_TYPE, Action, loading) => (dispatch, getState) => {
  dispatch(allLoading(loading, true))
  fetch(API)
    .then(res => res.json())
    .then(res => {
      dispatch(Action(res, ACTION_TYPE.SUCCESS))
      dispatch(allLoading(loading, false))
    })
    .catch(err => {
      console.error(ACTION_TYPE.FAILURE, err);
      dispatch(allLoading(loading, false))
    })
}

/**
 * Payload Actions
 * @param {string} ACTION_TYPE
 * @param {function} Action
 * @param {*} payload
 * @param {string} loading
 */
export const payloadActions = (ACTION_TYPE, Action, payload, loading) => (dispatch, getState) => {
  dispatch(allLoading(loading, true))
  dispatch(Action(payload, ACTION_TYPE.SUCCESS))
  dispatch(allLoading(loading, false))
}
