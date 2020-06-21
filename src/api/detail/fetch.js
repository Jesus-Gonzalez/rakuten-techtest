import { fetch } from '~/utils'
import { Configuration } from '~/api'

export const fetchDetail = filmId => (
  fetch(
    Configuration.Endpoints.Movies
      .replace(':id:', filmId)
  ).then(({ data: { data } }) => data)
)
