import React from 'react'
import PropTypes from 'prop-types'

import { Carousel } from '~/app/components'

import CarouselItem from './CarouselItem.component'

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}
const CarouselComponent = props => {
  const { items } = props

  return (
    <Carousel>
      {items.map(item => (
        <CarouselItem
          key={item.id}
          item={item}
        />
      ))}
    </Carousel>
  )
}
CarouselComponent.propTypes = propTypes

export default CarouselComponent
