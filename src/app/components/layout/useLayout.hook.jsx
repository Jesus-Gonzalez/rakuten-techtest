import React from 'react'
import { useSelector } from 'react-redux'

export const useLayout = configuration => {
  const state = useSelector(state => ({
    application: state.application,
    detail: state.detail,
  }))

  const title = React.useMemo(() => (
    !state.detail.loading && state.detail.item
      ? state.detail.item.title
      : state.application.title
  ), [state.detail])

  return {
    title,
  }
}
