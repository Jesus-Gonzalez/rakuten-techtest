import { call, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from '~/core/store/actionTypes'
import * as Api from '~/api'

function * fetchFilms () {
  debugger
  try {
    const items = yield call(Api.fetchFilms, 'populares-en-taquilla')
    yield put({ type: ActionTypes.Films.FetchSuccess, items })
  } catch {
    yield put({ type: ActionTypes.Films.FetchError })
  }
}

export default function * fetchFilmsSaga () {
  yield takeLatest(ActionTypes.Films.Fetch, fetchFilms)
}
