import * as ActionTypes from '~/core/store/actionTypes'

export const fetchFilms = films => ({
  type: ActionTypes.FetchFilms,
  films,
})
