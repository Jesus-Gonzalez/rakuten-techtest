import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './CarouselItem.styles'

const propTypes = {
  item: PropTypes.object,
}

const CarouselItem = props => {
  const { item } = props

  return (
    <div className={styles.item}>
      <Link to='#'>
        <img
          className={styles.artwork}
          src={item.photo}
        />
      </Link>
    </div>
  )
}

CarouselItem.propTypes = propTypes

export default CarouselItem
