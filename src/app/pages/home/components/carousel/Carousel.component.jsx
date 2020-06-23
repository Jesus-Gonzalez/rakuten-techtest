import React from 'react'
import PropTypes from 'prop-types'

import {
  Arrow,
  CarouselItem,
} from './components'

import styles from './Carousel.styles'

const propTypes = {
  pagination: PropTypes.shape({
    arrow: PropTypes.shape({
      left: PropTypes.bool.isRequired,
      right: PropTypes.bool.isRequired,
    }).isRequired,
    ref: PropTypes.shape({
      wrapper: PropTypes.object.isRequired
    }).isRequired,
    go: PropTypes.func.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
}

const CarouselComponent = props => {
  const {
    pagination: {
      arrow,
      ref,
      go
    },
    items
  } = props

  return (
    <div className={styles.pagination}>
      <div
        ref={ref.wrapper}
        className={styles.wrapper}
      >
        {arrow.left && (
          <div className={styles.left}>
            <Arrow
              left
              go={go}
            />
          </div>
        )}
        <div
          className={styles.scroll}
        >
          {items.map(item => (
            <CarouselItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
        {arrow.right && (
          <div className={styles.right}>
            <Arrow
              right
              go={go}
            />
          </div>
        )}
      </div>
    </div>
  )
}

CarouselComponent.propTypes = propTypes

export default CarouselComponent
