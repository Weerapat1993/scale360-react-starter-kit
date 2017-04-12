// import { ${name_upper} } from '../../constants';
import { ${name_upper} } from '../${name}ActionTypes';
import { create${name_pascal}Success, update${name_pascal}Success, delete${name_pascal}Success } from '../${name}Actions';

const actionName = [ create${name_pascal}Success(), update${name_pascal}Success(), delete${name_pascal}Success() ]
const actionTypeName = [ ${name_upper}.CREATE.SUCCESS, ${name_upper}.UPDATE.SUCCESS, ${name_upper}.DELETE.SUCCESS ]

describe('${name_pascal} Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should  action type '+actionTypeName[i], () => {
      expect(actionName[i]).toEqual({
        type: actionTypeName[i]
      });
    });
  }
});
