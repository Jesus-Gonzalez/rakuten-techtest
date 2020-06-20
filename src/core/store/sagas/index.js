import { all } from 'redux-saga/effects'

import * as Films from './films'

export default function * RootSaga () {
  yield all([
    ...Object.values(Films).map(fn => fn())
  ])
}
