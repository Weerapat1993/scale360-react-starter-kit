import { getTaskFilter } from '../taskSelector'

const initialState = {
  task: [
    {
      key: 1,
      title: 'Task 101',
      completed: true
    },
    {
      key: 2,
      title: 'Task 102',
      completed: false
    }
  ]
}

// Filter Data
const search = ['','active','completed']

describe('Task Selector', () => {
  for (let i = 0; i < search.length; i++) {
    it('should Task Selector Filter : ' + search[i], () => {
      const props = {
        location: {
          query: {
            filter: search[i]
          }
        }
      }
      const recieved = getTaskFilter(initialState, props)
      const expected = getFilterData(initialState, props)

      expect(expected).toEqual(recieved);
    })
  }
})

// Function Filter Data
function getFilterData(state, props) {
  const task = state.task
  const { filter } = props.location.query
  switch (filter) {
    case 'active':
      return task.filter(item => !item.completed);

    case 'completed':
      return task.filter(item => item.completed);

    default:
      return task;
  }
}
