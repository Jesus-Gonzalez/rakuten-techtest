import React from 'react'

import CarouselComponent from './Carousel.component'

import { useCarousel } from './useCarousel.hook'

const Carousel = props => {
  const hook = useCarousel(props)

  return (
    <CarouselComponent
      {...props}
      {...hook}
    />
  )
}

export default Carousel
