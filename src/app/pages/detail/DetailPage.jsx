import React from 'react'

import { Header } from './components'
import { LoadingPage } from '~/app/pages'

import { useDetailPage } from './useDetailPage.hook'

const DetailPage = props => {
  const {
    state
  } = useDetailPage(props)

  if (state.detail.item === null || state.detail.loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <Header
        item={state.detail.item}
      />
    </div>
  )
}

export default DetailPage
