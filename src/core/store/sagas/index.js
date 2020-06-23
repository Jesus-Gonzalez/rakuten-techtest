import { all } from 'redux-saga/effects'

import * as Films from './films'
import * as Detail from './detail'
import * as Trailer from './trailer'

export default function * RootSaga () {
  yield all([
    ...Object.values(Films).map(fn => fn()),
    ...Object.values(Detail).map(fn => fn()),
    ...Object.values(Trailer).map(fn => fn()),
  ])
}
