import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Social.styles'

const Social = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <FontAwesomeIcon
          icon='eye'
        />
      </div>

      <div className={styles.item}>
        <FontAwesomeIcon
          icon={['fab', 'twitter']}
        />
      </div>

      <div className={styles.item}>
        <FontAwesomeIcon
          icon={['fab', 'facebook']}
        />
      </div>

      <div className={styles.item}>
        <FontAwesomeIcon
          icon={['fab', 'pinterest']}
        />
      </div>
    </div>
  )
}

export default Social
