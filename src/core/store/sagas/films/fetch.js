import { call, put, takeEvery } from 'redux-saga/effects'

import * as ActionTypes from '~/core/store/actionTypes'
import * as Api from '~/api'

function * fetchFilms ({ listId }) {
  try {
    const items = yield call(Api.fetchFilms, listId)
    yield put({ type: ActionTypes.Films.FetchSuccess, items })
  } catch {
    yield put({ type: ActionTypes.Films.FetchError })
  }
}

export default function * fetchFilmsSaga () {
  yield takeEvery(ActionTypes.Films.Fetch, fetchFilms)
}
