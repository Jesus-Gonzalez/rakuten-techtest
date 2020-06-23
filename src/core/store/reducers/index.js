import { combineReducers } from 'redux'

import application from './application'
import detail from './detail'
import films from './films'
import trailer from './trailer'

export default combineReducers({
  application,
  detail,
  films,
  trailer,
})
