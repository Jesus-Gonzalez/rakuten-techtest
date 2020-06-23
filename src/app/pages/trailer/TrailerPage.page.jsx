import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Video } from './components'

import { LoadingPage } from '~/app/pages'
import { useTrailerPage } from './useTrailerPage.hook'

import styles from './TrailerPage.styles'

const TrailerPage = props => {
  const {
    state,
    goBack,
  } = useTrailerPage(props)

  if (!state.trailer.item || state.trailer.loading) {
    return <LoadingPage />
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.goBack}
        onClick={goBack}
      >
        <FontAwesomeIcon icon='arrow-left' />
      </div>

      <Video
        data={state.trailer.item}
      />
    </div>
  )
}

export default TrailerPage
