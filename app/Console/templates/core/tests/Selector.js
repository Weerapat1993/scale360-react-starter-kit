import { get${name_pascal}Filter } from '../${name}Selector'

const initialState = {
  ${name}: [
    {
      key: 1,
      title: '${name_pascal} 101',
      completed: true
    },
    {
      key: 2,
      title: '${name_pascal} 102',
      completed: false
    }
  ]
}

// Filter Data
const search = ['','active','completed']

describe('${name_pascal} Selector', () => {
  for (let i = 0; i < search.length; i++) {
    it('should ${name_pascal} Selector Filter : ' + search[i], () => {
      const props = {
        location: {
          query: {
            filter: search[i]
          }
        }
      }
      const recieved = get${name_pascal}Filter(initialState, props)
      const expected = getFilterData(initialState, props)

      expect(expected).toEqual(recieved);
    })
  }
})

// Function Filter Data
function getFilterData(state, props) {
  const ${name} = state.${name}
  const { filter } = props.location.query
  switch (filter) {
    case 'active':
      return ${name}.filter(item => !item.completed);

    case 'completed':
      return ${name}.filter(item => item.completed);

    default:
      return ${name};
  }
}
