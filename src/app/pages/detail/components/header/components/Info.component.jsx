import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Info.styles'

const propTypes = {
  item: PropTypes.object
}
const Info = props => {
  const { item } = props

  console.log('Info.item', item)

  return (
    <div className={styles.info}>
      <div className={styles.score}>
        <FontAwesomeIcon
          className={styles.star}
          icon='star'
        />
        <span className={styles.number}>
          7.7
        </span>
      </div>
      <div className={styles.title}>
        <h3>{item.title}</h3>
      </div>
    </div>
  )
}
Info.propTypes = propTypes

export default Info
