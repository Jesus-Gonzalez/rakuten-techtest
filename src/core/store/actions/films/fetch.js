import * as ActionTypes from '~/core/store/actionTypes'

export const fetchFilms = films => ({
  type: ActionTypes.Films.Fetch,
  films,
})
