export function getGalleryFilter(state, props) {
  const gallery = state.gallery.data
  const { filter } = props.location.query

  switch (filter) {
    case 'active':
      return gallery.filter(item => !item.completed);

    case 'completed':
      return gallery.filter(item => item.completed);

    default:
      return gallery;
  }
}
