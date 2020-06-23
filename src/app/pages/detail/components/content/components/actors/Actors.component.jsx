import React from 'react'
import PropTypes from 'prop-types'

import { Carousel } from '~/app/components'

import CarouselItem from './CarouselItem.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Actors.styles'

const propTypes = {
  item: PropTypes.object
}
export const Actors = ({ item }) => (
  <div>
    <h3>
      <FontAwesomeIcon
        icon='film'
      />

      <span className={styles.titleContent}>Direccion y reparto</span>
    </h3>
    <Carousel>
      {item.directors.concat(item.actors)
        .map(member => (
          <CarouselItem
            key={member.id}
            item={member}
          />
        ))}
    </Carousel>
  </div>
)
Actors.propTypes = propTypes

export default Actors
