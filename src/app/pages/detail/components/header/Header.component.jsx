import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Action } from './__components'

import { useHeader } from './useHeader.hook'

import styles from './Header.styles'

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

        <div className={styles.info}>
          <div className={styles.score}>
            <FontAwesomeIcon
              className={styles.star}
              icon='star'
            />
            <span className={styles.number}>
              7.7
            </span>
          </div>
          <div className={styles.title}>
            <h3>{item.title}</h3>
          </div>
        </div>

        <div className={styles.movieActionsWrapper}>
          <div className={styles.movieActions}>
            <button
              className={styles.watch}
            >
              <div className={styles.actionText}>Ver ahora</div>
              <div className={styles.actionDetail}>
                <span className={styles.price}>desde 1,99 €</span>
                <span className={styles.point}>o 199 <span className={styles.iconPoints}>P</span></span>
              </div>
            </button>
            <button
              className={styles.coupon}
            >
              Canjear cupon
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
