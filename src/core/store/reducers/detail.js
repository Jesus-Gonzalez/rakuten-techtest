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

    case ActionTypes.Detail.FetchError: {
      return Object.assign({}, state, {
        error: 'fetch',
        items: null,
        loading: false
      })
    }

    default: return state
  }
}
