import * as ActionTypes from '~/core/store/actionTypes'

export const fetchDetail = filmId => ({
  type: ActionTypes.Detail.Fetch,
  filmId,
})
