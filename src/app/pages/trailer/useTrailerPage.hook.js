import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { compose } from 'redux'
import { useRouteMatch, useHistory } from 'react-router-dom'

import { resetTrailer, fetchTrailer } from '~/core/store/actions'

export const useTrailerPage = () => {
  const state = useSelector(state => ({
    trailer: state.trailer,
  }))

  // todo: useMemo on actions={dispatch}
  const dispatch = useDispatch()
  const actions = {
    resetTrailer: compose(dispatch, resetTrailer),
    fetchTrailer: compose(dispatch, fetchTrailer),
  }

  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const match = useRouteMatch()
  React.useEffect(() => {
    actions.resetTrailer()

    actions.fetchTrailer(match.params.filmId)
  }, [match.params.filmId])

  return {
    state,
    actions,
    goBack,
  }
}
