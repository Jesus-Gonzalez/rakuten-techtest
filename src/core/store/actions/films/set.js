import { ActionTypes } from '~/core/store'

export const setFilm = film => ({
  type: ActionTypes.FetchFilms,
  film,
})