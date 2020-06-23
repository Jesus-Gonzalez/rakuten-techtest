import React from 'react'
import PropTypes from 'prop-types'

import { Carousel } from '~/app/components'

import CarouselItem from './CarouselItem.component'

const propTypes = {
  item: PropTypes.object
}
export const Actors = ({ item }) => {
  console.log('item', item)

  return (
    <Carousel>
      {item.directors.concat(item.actors)
        .map(member => (
          <CarouselItem
            key={member.id}
            item={member}
          />
        ))}
    </Carousel>
  )
}
Actors.propTypes = propTypes

export default Actors
