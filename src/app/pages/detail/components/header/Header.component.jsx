import React from 'react'

import { Action } from './__components'

import { useHeader } from './useHeader.hook'

import styles from './Header.styles'

const Header = props => {
  const { item } = props

  const {
    headerStyle
  } = useHeader(props)

  return (
    <header
      className={styles.hero}
      style={headerStyle}
    >
      <div className={styles.header}>
        <div className={styles.actions}>
          <Action />
          <Action />
        </div>

        <div className={styles.info}>
          <div className={styles.score}>
            <span className={styles.star}>
              +
            </span>
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
              Ver ahora
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
