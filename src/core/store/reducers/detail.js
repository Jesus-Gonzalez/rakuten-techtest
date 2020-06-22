import * as ActionTypes from '~/core/store/actionTypes'

const initialState = {
  item: null,
  loading: false,
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.Detail.Reset: {
      return Object.assign({}, initialState)
    }

    case ActionTypes.Detail.Fetch: {
      return Object.assign({}, state, {
        loading: true
      })
    }

    case ActionTypes.Detail.FetchSuccess: {
      const { item } = action

      return Object.assign({}, state, {
        item,
        loading: false
      })
    }

    // todo
    case ActionTypes.Detail.FetchError: {
      return state
      // const { listId } = action
      // const index = state.items.findIndex(f => f.id === listId)
      // const nextItems = state.items
      //   .slice(0, index)
      //   .concat({
      //     ...state.items[index],
      //     loading: false,
      //     error: true,
      //   })
      //   .concat(
      //     state.items.slice(index + 1)
      //   )

      // return Object.assign({}, state, {
      //   error: true,
      //   items: nextItems
      // })
    }

    default: return state
  }
}
