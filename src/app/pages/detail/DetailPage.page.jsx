import React from 'react'

import { withLayout } from '~/app/components'
import { LoadingPage } from '~/app/pages/loading'

import {
  Header,
  Social,
} from './components'

import styles from './DetailPage.styles'

import { useDetailPage } from './useDetailPage.hook'

const DetailPage = props => {
  const {
    state
  } = useDetailPage(props)

  if (state.detail.item === null || state.detail.loading) {
    return <LoadingPage />
  }

  return (
    <div className={styles.page}>
      <Header
        item={state.detail.item}
      />

      <Social />
    </div>
  )
}

export default withLayout(DetailPage)
