import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Action.styles'

const Action = props => {
  const { icon, title } = props

  return (
    <div
      className={styles.action}
    >
      <div className={styles.round}>
        <div className={styles.icon}>
          <FontAwesomeIcon
            icon={icon}
          />
        </div>
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}

export default Action
