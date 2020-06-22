import React from 'react'

import { withLayout } from '~/app/components'
import { LoadingPage } from '~/app/pages'

import { Header } from './components'
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

export default withLayout(DetailPage)
