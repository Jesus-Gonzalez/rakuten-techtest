import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Action.styles'

const propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
const Action = props => {
  const {
    icon,
    title,
    onClick,
  } = props

  return (
    <div
      className={styles.action}
      onClick={onClick}
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
Action.propTypes = propTypes

export default Action
