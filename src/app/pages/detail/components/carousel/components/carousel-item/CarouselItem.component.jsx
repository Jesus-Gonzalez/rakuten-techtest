import React from 'react'
import PropTypes from 'prop-types'

import styles from './CarouselItem.styles'
import { Link } from 'react-router-dom'

const propTypes = {
  item: PropTypes.object,
}

const CarouselItem = props => {
  const { item } = props

  const { images } = item

  return (
    <div className={styles.item}>
      <Link to={`/detail/${item.id}`}>
        <img
          className={styles.artwork}
          src={images.artwork}
        />
      </Link>
    </div>
  )
}

CarouselItem.propTypes = propTypes

export default CarouselItem
