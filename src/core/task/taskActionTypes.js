import { asyncActionType } from '../../utils/actionTypes'

export const TASK = {
  FETCH: asyncActionType('FETCH_TASK'),
  CREATE: 'CREATE_TASK',
  UPDATE: 'UPDATE_TASK',
  DELETE: 'DELETE_TASK',
}
