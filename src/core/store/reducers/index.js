import { combineReducers } from 'redux'

import application from './application'
import detail from './detail'
import films from './films'

export default combineReducers({
  application,
  detail,
  films,
})
