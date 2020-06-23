import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { compose } from 'redux'

import { fetchDetail, resetDetail } from '~/core/store/actions'

export const useDetailPage = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const state = {
    detail: useSelector(state => state.detail),
  }
  const actions = React.useMemo(() => ({
    fetchDetail: compose(dispatch, fetchDetail),
    resetDetail: compose(dispatch, resetDetail),
  }), [dispatch])

  React.useEffect(() => {
    actions.resetDetail()

    actions.fetchDetail(match.params.filmId)
  }, [match.params.filmId])

  React.useEffect(() => {
    if (state.detail.error) {
      history.push('/error')
    }
  })

  return {
    state,
  }
}
