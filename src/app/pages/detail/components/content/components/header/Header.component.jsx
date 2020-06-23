import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Header.styles'

const propTypes = {
  item: PropTypes.object
}
export const Header = ({ item }) => (
  <div className={styles.header}>
    <span className={styles.meta}>
      <FontAwesomeIcon
        icon='users'
      />
      <span className={styles.metaContent}>{item.classification.name}</span>
    </span>

    <span className={styles.meta}>
      <FontAwesomeIcon
        icon='clock'
      />
      <span className={styles.metaContent}>{item.duration} minutos</span>
    </span>

    <span className={styles.meta}>
      <FontAwesomeIcon
        icon='calendar'
      />
      <span className={styles.metaContent}>{item.year}</span>
    </span>

    <span className={styles.meta}>
      <FontAwesomeIcon
        icon='flag'
      />
      <span className={styles.metaContent}>{item.countries.map(c => c.name).join(', ')}</span>
    </span>

    <span className={styles.meta}>
      <FontAwesomeIcon
        icon='info-circle'
      />
      <span>Titulo Original: {item.original_title}</span>
    </span>
  </div>
)
Header.propTypes = propTypes

export default Header
