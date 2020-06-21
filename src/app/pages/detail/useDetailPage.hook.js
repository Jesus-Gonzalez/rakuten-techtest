import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { compose } from 'redux'

import { fetchDetail, resetDetail } from '~/core/store/actions'

export const useDetailPage = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const state = {
    detail: useSelector(state => state.detail),
  }
  const actions = {
    fetchDetail: compose(dispatch, fetchDetail),
    resetDetail: compose(dispatch, resetDetail),
  }

  React.useEffect(() => {
    actions.resetDetail()

    actions.fetchDetail(match.params.filmId)
  }, [match.params.filmId])

  return {
    state,
  }
}
