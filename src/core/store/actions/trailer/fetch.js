import * as ActionTypes from '~/core/store/actionTypes'

export const fetchTrailer = filmId => ({
  type: ActionTypes.Trailer.Fetch,
  filmId,
})
