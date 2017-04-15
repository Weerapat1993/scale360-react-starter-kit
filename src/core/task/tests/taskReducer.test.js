// import { TASK } from '../../constants';
import { TASK } from '../taskActionTypes';
import { taskReducer } from '../taskReducer'
import { fetchData, createData, updateData, deleteData } from '../../../utils/callReducer'

const initialState = [
  {
    key: 1,
    title: 'Task 101',
    completed: true
  }
]

const payload = {
  fetch: initialState,
  create: { key: 2, title: 'Task 102', completed: false },
  update: { key: 1, title: 'Task 101', completed: true },
  delete: 1
}

const actionTypeName = [
  TASK.FETCH.SUCCESS,
  TASK.CREATE.SUCCESS,
  TASK.UPDATE.SUCCESS,
  TASK.DELETE.SUCCESS,
]

const expected_array = [
  fetchData,
  createData,
  updateData,
  deleteData,
]

const type = ['fetch','create','update','delete']

describe('Task Reducers', () => {
  for (let i = 0; i < actionTypeName.length; i++) {
    it('should Task Reducer : '+actionTypeName[i], () => {
      const action = {
        type: actionTypeName[i],
        payload: payload[type[i]]
      }
      const recieved = taskReducer(initialState, action)
      const expected = expected_array[i](initialState, action)
      expect(expected).toEqual(recieved);
    });
  }
});
