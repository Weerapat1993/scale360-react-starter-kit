import queryString from 'query-string'

export function get${name_pascal}Filter(state, props) {
  const ${name} = state.${name}
  const { filter } = queryString.parse(props.location.search)
  switch (filter) {
    case 'active':
      return ${name}.filter(item => !item.completed);

    case 'completed':
      return ${name}.filter(item => item.completed);

    default:
      return ${name};
  }
}
