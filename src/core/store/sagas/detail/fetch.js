import { call, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from '~/core/store/actionTypes'
import * as Api from '~/api'

function * fetchDetail ({ filmId }) {
  try {
    const item = yield call(Api.fetchDetail, filmId)
    yield put({ type: ActionTypes.Detail.FetchSuccess, item })
  } catch {
    yield put({ type: ActionTypes.Detail.FetchError })
  }
}

export default function * fetchDetailSaga () {
  yield takeLatest(ActionTypes.Detail.Fetch, fetchDetail)
}
