import { fetch } from '~/utils'
import { Configuration } from '~/api'

export const fetchFilms = listId => (
  fetch(
    Configuration.Endpoints.Lists
      .replace(':id:', listId)
  ).then(({ data: { data } }) => data)
)
