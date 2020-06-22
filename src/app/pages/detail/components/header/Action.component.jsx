import React from 'react'

import styles from './Action.styles'

const Action = props => {
  return (
    <div
      className={styles.action}
    >
      <div className={styles.round}>
        <div className={styles.icon}>
          i
        </div>
      </div>
      <div className={styles.title}>
        Trailer
      </div>
    </div>
  )
}

export default Action
