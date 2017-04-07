import { asyncActionType } from '../utils/actionTypes'

//=========================================================
//  CONSTANTS
//---------------------------------------------------------
export const APP_NAME = 'Scale360 React Starter Kit';

//=====================================
//  API
//-------------------------------------
export const API_BASE_URL = 'https://scale360-react-starter-kit.firebaseapp.com';

export const API = {
  TASK: API_BASE_URL + '/assets/json/task.json',
}

//=====================================
//  ACTION_TYPE
//-------------------------------------

// Loading
export const TASK_LOADING = 'TASK_LOADING'

export const TASK = {
  FETCH: asyncActionType('FETCH_TASK'),
  CREATE: 'CREATE_TASK',
  UPDATE: 'UPDATE_TASK',
  DELETE: 'DELETE_TASK',
}
