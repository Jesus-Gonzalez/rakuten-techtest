import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { compose } from 'redux'

import { fetchFilms, resetFilms } from '~/core/store/actions'

export const useHomePage = configuration => {
  const dispatch = useDispatch()
  const state = {
    application: useSelector(state => state.application),
    films: useSelector(state => state.films),
  }
  const actions = {
    fetchFilms: compose(dispatch, fetchFilms),
    resetFilms: compose(dispatch, resetFilms),
  }

  React.useEffect(() => {
    actions.resetFilms()

    state.application.initialLists
      .forEach(actions.fetchFilms)
  }, [state.application.initialLists])

  return {
    state,
  }
}
