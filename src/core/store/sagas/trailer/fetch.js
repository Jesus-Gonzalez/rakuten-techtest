import { call, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from '~/core/store/actionTypes'
import * as Api from '~/api'

function * fetchTrailer ({ filmId }) {
  try {
    const item = yield call(Api.fetchTrailer, filmId)
    yield put({ type: ActionTypes.Trailer.FetchSuccess, item })
  } catch {
    yield put({ type: ActionTypes.Trailer.FetchError })
  }
}

export default function * fetchDetailSaga () {
  yield takeLatest(ActionTypes.Trailer.Fetch, fetchTrailer)
}
