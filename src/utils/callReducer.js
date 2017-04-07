// Reducers
export function createData(state,action) {
  return [
    ...state,
    action.data
  ]
}

export function updateData(state,action) {
  let news = state.filter((item) => action.data.key === item.key)
  let newData = Object.assign({}, news[0], action.data)
  let newState = state
  newState.forEach((item,i) => {
    if(newData.key === item.key){
      newState[i] = newData
    }
  })
  return newState;
}

export function deleteData(state,action) {
  return state.filter((item) => action.key !== item.key)
}
