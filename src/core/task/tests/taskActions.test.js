// import { TASK } from '../../constants';
import { TASK } from '../taskActionTypes';
import { fetchTaskSuccess, createTaskSuccess, updateTaskSuccess, deleteTaskSuccess } from '../taskActions';

const payload = {
  key: 1,
  title: 'Task 101',
  completed: false
}

const actionName = [
  fetchTaskSuccess(payload, TASK.FETCH.SUCCESS),
  createTaskSuccess(payload, TASK.CREATE.SUCCESS),
  updateTaskSuccess(payload, TASK.UPDATE.SUCCESS),
  deleteTaskSuccess(payload, TASK.DELETE.SUCCESS)
]

const actionTypeName = [
  TASK.FETCH.SUCCESS,
  TASK.CREATE.SUCCESS,
  TASK.UPDATE.SUCCESS,
  TASK.DELETE.SUCCESS
]

describe('Task Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should Task Action '+actionTypeName[i], () => {
      const recieved = actionName[i]
      const expected = {
        type: actionTypeName[i],
        payload
      }
      expect(expected).toEqual(recieved);
    });
  }
});
