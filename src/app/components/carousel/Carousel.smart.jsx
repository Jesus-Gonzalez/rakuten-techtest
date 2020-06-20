import React from 'react'

import CarouselComponent from './Carousel.component'

import { useCarousel } from './hooks'

// const propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object)
// }

const Carousel = props => {
  const hook = useCarousel(props)

  return (
    <CarouselComponent
      {...props}
      {...hook}
    />
  )
}

// CarouselComponent.propTypes = propTypes

export default Carousel
