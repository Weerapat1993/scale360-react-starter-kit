import queryString from 'query-string'

export function getTaskFilter(state, props) {
  const task = state.task
  const { filter } = queryString.parse(props.location.search)
  switch (filter) {
    case 'active':
      return task.filter(item => !item.completed);

    case 'completed':
      return task.filter(item => item.completed);

    default:
      return task;
  }
}
