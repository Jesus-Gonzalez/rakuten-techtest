import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { compose } from 'redux'
import { useHistory } from 'react-router-dom'

import {
  fetchFilms,
  resetFilms,
  resetDetail
} from '~/core/store/actions'

export const useHomePage = () => {
  const history = useHistory()

  const state = {
    application: useSelector(state => state.application),
    films: useSelector(state => state.films),
  }

  React.useEffect(() => {
    actions.resetDetail()
    actions.resetFilms()

    state.application.initialLists
      .forEach(actions.fetchFilms)
  }, [state.application.initialLists])

  React.useEffect(() => {
    if (state.films.error) {
      history.push('/error')
    }
  })

  const dispatch = useDispatch()
  const actions = React.useMemo(() => ({
    resetDetail: compose(dispatch, resetDetail),
    fetchFilms: compose(dispatch, fetchFilms),
    resetFilms: compose(dispatch, resetFilms),
  }), [dispatch])

  return {
    state,
  }
}
