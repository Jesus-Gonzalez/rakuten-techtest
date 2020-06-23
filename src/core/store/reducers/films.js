import * as ActionTypes from '~/core/store/actionTypes'

const initialState = {
  items: [],
  error: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.Films.Reset: {
      return Object.assign({}, initialState)
    }

    case ActionTypes.Films.Fetch: {
      const { listId } = action
      return Object.assign({}, state, {
        items: state.items.concat({
          id: listId,
          loading: true,
          films: []
        })
      })
    }

    case ActionTypes.Films.FetchSuccess: {
      const { items: list } = action
      const index = state.items.findIndex(f => f.id === list.id)
      const nextItems = state.items
        .slice(0, index)
        .concat({
          ...list,
          loading: false,
        })
        .concat(
          state.items.slice(index + 1)
        )

      return Object.assign({}, state, {
        items: nextItems,
        loading: false
      })
    }

    case ActionTypes.Films.FetchError: {
      return Object.assign({}, state, {
        error: 'fetch',
      })
    }

    default: return state
  }
}
