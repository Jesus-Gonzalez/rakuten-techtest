import { ActionTypes } from '~/core/store'

export const fetchLists = lists => ({
  type: ActionTypes.FetchLists,
  lists,
})
