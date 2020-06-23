import React from 'react'

import { useErrorPage } from './useErrorPage.hook'
import styles from './ErrorPage.styles'

const Loading = () => {
  const {
    goBack,
  } = useErrorPage()

  return (
    <div className={styles.wrapper}>
      <h1>Error</h1>
      <p>An error happened while trying to load the request</p>
      <button
        className={styles.button}
        onClick={goBack}
      >
        Retry
      </button>
    </div>
  )
}

export default Loading
