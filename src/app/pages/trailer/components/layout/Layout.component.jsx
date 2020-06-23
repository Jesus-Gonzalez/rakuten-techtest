import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Video } from '~/app/pages/trailer/components'

import styles from './Layout.styles'

const Layout = props => {
  const {
    state,
    goBack,
  } = props

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

export default Layout
