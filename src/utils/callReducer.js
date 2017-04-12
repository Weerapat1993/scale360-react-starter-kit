/**
 * Create new data
 * @param {*} state 
 * @param {*} action 
 */
export function createData(state,action) {
  return [
    ...state,
    action.payload
  ]
}

/**
 * Update Data (item.key)
 * @param {*} state 
 * @param {*} action 
 */
export function updateData(state,action) {
  let news = state.filter((item) => action.payload.key === item.key)
  let newData = Object.assign({}, news[0], action.payload)
  let newState = state
  newState.forEach((item,i) => {
    if(newData.key === item.key){
      newState[i] = newData
    }
  })
  return newState;
}

/**
 * Remove Data (item.key)
 * @param {*} state 
 * @param {*} action 
 */
export function deleteData(state,action) {
  return state.filter((item) => action.payload !== item.key)
}
