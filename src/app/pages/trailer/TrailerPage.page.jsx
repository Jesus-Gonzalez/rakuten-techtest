import React from 'react'

import { LoadingPage } from '~/app/pages/loading'
import { useTrailerPage } from './useTrailerPage.hook'

import { Layout } from './components'

const TrailerPage = props => {
  const hook = useTrailerPage(props)

  const {
    state,
  } = hook

  if (!state.trailer.item || state.trailer.loading) {
    return <LoadingPage />
  }

  return (
    <Layout
      {...hook}
    />
  )
}

export default TrailerPage
