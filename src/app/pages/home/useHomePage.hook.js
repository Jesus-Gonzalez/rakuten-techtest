import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { compose } from 'redux'

import {
  fetchFilms,
  resetFilms,
  resetDetail
} from '~/core/store/actions'

export const useHomePage = () => {
  const dispatch = useDispatch()
  const state = {
    application: useSelector(state => state.application),
    films: useSelector(state => state.films),
  }
  const actions = React.useMemo(() => ({
    resetDetail: compose(dispatch, resetDetail),
    fetchFilms: compose(dispatch, fetchFilms),
    resetFilms: compose(dispatch, resetFilms),
  }), [dispatch])

  React.useEffect(() => {
    actions.resetDetail()
    actions.resetFilms()

    state.application.initialLists
      .forEach(actions.fetchFilms)
  }, [state.application.initialLists])

  return {
    state,
  }
}
