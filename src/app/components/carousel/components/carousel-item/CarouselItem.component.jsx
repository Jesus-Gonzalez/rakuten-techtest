import React from 'react'
import PropTypes from 'prop-types'

import styles from './CarouselItem.styles'

const propTypes = {
  item: PropTypes.object,
}

const CarouselItem = props => {
  const { item } = props

  const { images } = item

  return (
    <div className={styles.item}>
      <img
        className={styles.artwork}
        src={images.artwork}
      />
    </div>
  )
}

CarouselItem.propTypes = propTypes

export default CarouselItem
