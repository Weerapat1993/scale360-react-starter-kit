import { createData, updateData, deleteData } from '../../utils/callReducer'
// import { ${name_upper} } from '../constants'
import { ${name_upper} } from './${name}ActionTypes'

const initialState = [];

export const ${name}Reducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_${name_upper}_SUCCESS: ================================
    case ${name_upper}.FETCH.SUCCESS:
      return action.payload
    // CREATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.CREATE.SUCCESS:
      return createData(state,action)
    // UPDATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.UPDATE.SUCCESS:
      return updateData(state,action)
    // CREATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.DELETE.SUCCESS:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}
