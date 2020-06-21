import * as ActionTypes from '~/core/store/actionTypes'

export const setFilm = film => ({
  type: ActionTypes.Films.Set,
  film,
})
