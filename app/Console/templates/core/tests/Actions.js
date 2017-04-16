// import { ${name_upper} } from '../../constants';
import { ${name_upper} } from '../${name}ActionTypes';
import { fetch${name_pascal}Success, create${name_pascal}Success, update${name_pascal}Success, delete${name_pascal}Success } from '../${name}Actions';

const payload = {
  key: 1,
  title: '${name_pascal} 101',
  completed: false
}

const actionName = [
  fetch${name_pascal}Success(payload, ${name_upper}.FETCH.SUCCESS),
  create${name_pascal}Success(payload, ${name_upper}.CREATE.SUCCESS),
  update${name_pascal}Success(payload, ${name_upper}.UPDATE.SUCCESS),
  delete${name_pascal}Success(payload, ${name_upper}.DELETE.SUCCESS)
]

const actionTypeName = [
  ${name_upper}.FETCH.SUCCESS,
  ${name_upper}.CREATE.SUCCESS,
  ${name_upper}.UPDATE.SUCCESS,
  ${name_upper}.DELETE.SUCCESS
]

describe('${name_pascal} Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should ${name_pascal} Action '+actionTypeName[i], () => {
      const recieved = actionName[i]
      const expected = {
        type: actionTypeName[i],
        payload
      }
      expect(expected).toEqual(recieved);
    });
  }
});
