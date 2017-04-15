// import { AUTH } from '../constants'
import { AUTH } from './authActionTypes'

const initialState = {
  authed: false,
  loading: false,
  email: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN:
      if(action.payload) {
        return {
          authed: true,
          loading: false,
          email: action.payload.email
        }
      }
      return initialState
    case AUTH.LOGOUT:
      return initialState
    default:
      return state
  }
}
