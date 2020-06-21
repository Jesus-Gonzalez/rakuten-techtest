import * as ActionTypes from '~/core/store/actionTypes'

export const fetchFilms = listId => ({
  type: ActionTypes.Films.Fetch,
  listId,
})
