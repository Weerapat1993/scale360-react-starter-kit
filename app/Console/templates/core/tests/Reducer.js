// import { ${name_upper} } from '../../constants';
import { ${name_upper} } from '../${name}ActionTypes';
import { ${name}Reducer } from '../${name}Reducer'
import { fetchData, createData, updateData, deleteData } from '../../../utils/callReducer'

const initialState = [
  {
    key: 1,
    title: '${name_pascal} 101',
    completed: true
  }
]

const payload = {
  fetch: initialState,
  create: { key: 2, title: '${name_pascal} 102', completed: false },
  update: { key: 1, title: '${name_pascal} 101', completed: true },
  delete: 1
}

const actionTypeName = [
  ${name_upper}.FETCH.SUCCESS,
  ${name_upper}.CREATE.SUCCESS,
  ${name_upper}.UPDATE.SUCCESS,
  ${name_upper}.DELETE.SUCCESS,
]

const expected_array = [
  fetchData,
  createData,
  updateData,
  deleteData,
]

const type = ['fetch','create','update','delete']

describe('${name_pascal} Reducers', () => {
  for (let i = 0; i < actionTypeName.length; i++) {
    it('should ${name_pascal} Reducer : '+actionTypeName[i], () => {
      const action = {
        type: actionTypeName[i],
        payload: payload[type[i]]
      }
      const recieved = ${name}Reducer(initialState, action)
      const expected = expected_array[i](initialState, action)
      expect(expected).toEqual(recieved);
    });
  }
});
