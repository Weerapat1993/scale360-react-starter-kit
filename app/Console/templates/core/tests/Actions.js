// import { ${name_upper} } from '../../constants';
import { ${name_upper} } from '../${name}ActionTypes';
import { create${name_pascal}, update${name_pascal}, delete${name_pascal} } from '../${name}Actions';

const actionName = [ create${name_pascal}(), update${name_pascal}(), delete${name_pascal}() ]
const actionTypeName = [ ${name_upper}.CREATE, ${name_upper}.UPDATE, ${name_upper}.DELETE ]

describe('${name_pascal} Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should create '+actionTypeName[i], () => {
      expect(actionName[i]).toEqual({
        type: actionTypeName[i]
      });
    });
  }
});
