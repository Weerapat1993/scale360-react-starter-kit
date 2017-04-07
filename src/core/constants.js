import { asyncActionType } from '../utils/actionTypes'

//=========================================================
//  CONSTANTS
//---------------------------------------------------------
export const APP_NAME = 'scale360-react-starter-kit';

//=====================================
//  API
//-------------------------------------
export const API_BASE_URL = 'http://localhost:3000';

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
