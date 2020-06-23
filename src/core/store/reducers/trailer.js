import * as ActionTypes from '~/core/store/actionTypes'

const initialState = {
  item: null,
  loading: false,
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.Trailer.Reset: {
      return Object.assign({}, initialState)
    }

    case ActionTypes.Trailer.Fetch: {
      return Object.assign({}, state, {
        loading: true
      })
    }

    case ActionTypes.Trailer.FetchSuccess: {
      const { item } = action

      return Object.assign({}, state, {
        item,
        loading: false
      })
    }

    case ActionTypes.Trailer.FetchError: {
      return Object.assign({}, state, {
        error: 'fetch',
      })
    }

    default: return state
  }
}
