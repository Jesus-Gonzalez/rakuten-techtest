import React from 'react'
import PropTypes from 'prop-types'

import styles from './CarouselItem.styles'

const propTypes = {
  item: PropTypes.object,
}

const CarouselItem = ({ item }) => (
  <div className={styles.item}>
    <img
      className={styles.artwork}
      src='https://images-1.wuaki.tv/system/artworks/122880/master/sonic-la-pelicula-1585742688-width217-quality80.jpeg'
    />
  </div>
)

CarouselItem.propTypes = propTypes

export default CarouselItem
