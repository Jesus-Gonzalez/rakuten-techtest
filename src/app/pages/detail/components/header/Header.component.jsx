import React from 'react'
import PropTypes from 'prop-types'

import { Action, Info, MovieActions } from './components'

import { useHeader } from './useHeader.hook'

import styles from './Header.styles'

const propTypes = {
  item: PropTypes.object.isRequired,
}
const Header = props => {
  const { item } = props

  const {
    headerStyle,
    gotoTrailer,
  } = useHeader(props)

  return (
    <header
      className={styles.hero}
      style={headerStyle}
    >
      <div className={styles.header}>
        <div className={styles.actions}>
          <Action
            icon='play-circle'
            title='Trailer'
            onClick={gotoTrailer}
          />

          <Action
            icon='thumbtack'
            title='Wishlist'
          />
        </div>

        <Info
          item={item}
        />

        <MovieActions />
      </div>
    </header>
  )
}
Header.propTypes = propTypes

export default Header
