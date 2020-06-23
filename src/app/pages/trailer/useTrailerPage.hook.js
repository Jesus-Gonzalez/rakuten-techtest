import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { compose } from 'redux'
import { useRouteMatch, useHistory } from 'react-router-dom'

import { resetTrailer, fetchTrailer } from '~/core/store/actions'

export const useTrailerPage = () => {
  const history = useHistory()
  const state = useSelector(state => ({
    trailer: state.trailer,
  }))

  const dispatch = useDispatch()
  const actions = React.useMemo(() => ({
    resetTrailer: compose(dispatch, resetTrailer),
    fetchTrailer: compose(dispatch, fetchTrailer),
  }), [dispatch])

  const goBack = () => {
    history.goBack()
  }

  const match = useRouteMatch()
  React.useEffect(() => {
    actions.resetTrailer()

    actions.fetchTrailer(match.params.filmId)
  }, [match.params.filmId])

  React.useEffect(() => {
    if (state.trailer.error) {
      history.push('/error')
    }
  })

  return {
    state,
    actions,
    goBack,
  }
}
