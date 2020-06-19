import { combineReducers } from 'redux'

import application from './application'
import detail from './detail'
import lists from './lists'

export default combineReducers({
  application,
  detail,
  lists,
})
