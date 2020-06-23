import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

export const useHeader = configuration => {
  const { item } = configuration

  const headerStyle = React.useMemo(() => ({
    backgroundImage: `url(${item.images.snapshot.replace('.jpeg', '-width1920-quality80.jpeg')})`
  }), [item])

  const route = useRouteMatch()
  const history = useHistory()
  const gotoTrailer = event => {
    event.stopPropagation()
    history.push(`/trailer/${route.params.filmId}`)
  }

  return {
    headerStyle,
    gotoTrailer
  }
}
