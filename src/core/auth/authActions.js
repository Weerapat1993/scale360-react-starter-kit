import { AUTH } from './authActionTypes'
import { firebaseAuth } from '../firebase'
import { allLoading } from '../loading/loadingActions'

// SUCCESS
export const loginAuthSuccess = (payload) => ({ payload, type: AUTH.LOGIN })
export const logoutAuthSuccess = () => ({ type: AUTH.LOGOUT })

// LOGIN & LOGOUT
export const loginAuth = () => (dispatch, getState) => {
  dispatch(allLoading('authLoading', false))
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(loginAuthSuccess(user))
    } else {
      dispatch(logoutAuthSuccess())
    }
  })
}
