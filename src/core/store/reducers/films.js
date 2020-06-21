import { ActionTypes } from '~/core/store'

const initialState = {
  items: [],
  error: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.Films.Reset: {
      return Object.assign({}, initialState)
    }

    default: return state
  }
}
