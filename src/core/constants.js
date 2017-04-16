import { asyncActionType } from '../utils/actionTypes'

//=========================================================
//  CONSTANTS
//---------------------------------------------------------
export const APP_NAME = 'Scale360 React Starter Kit';

//=====================================
//  API
//-------------------------------------
export const API_BASE_URL = 'http://localhost:3000/'

export const API = {
  TASK: API_BASE_URL + '/assets/json/task.json',
}

//=====================================
//  ACTION_TYPE
//-------------------------------------

export const TASK = {
  FETCH: asyncActionType('FETCH_TASK'),
  CREATE: asyncActionType('CREATE_TASK'),
  UPDATE: asyncActionType('UPDATE_TASK'),
  DELETE: asyncActionType('DELETE_TASK'),
}

// export const FETCH_TASK = asyncActionType('FETCH_TASK')
// export const CREATE_TASK = 'CREATE_TASK'
// export const UPDATE_TASK = 'UPDATE_TASK'
// export const DELETE_TASK = 'DELETE_TASK'
