import { asyncActionType } from '../../utils/actionTypes'

export const ${name_upper} = {
  FETCH: asyncActionType('FETCH_${name_upper}'),
  CREATE: 'CREATE_${name_upper}',
  UPDATE: 'UPDATE_${name_upper}',
  DELETE: 'DELETE_${name_upper}',
}
