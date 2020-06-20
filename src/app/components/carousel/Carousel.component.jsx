import React from 'react'
import PropTypes from 'prop-types'

import { CarouselItem } from './components'

import styles from './Carousel.styles'

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

const CarouselComponent = ({ items }) => (
  <div className={styles.wrapper}>
    <div className={styles.scroll}>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </div>
  </div>
)

CarouselComponent.propTypes = propTypes

export default CarouselComponent
