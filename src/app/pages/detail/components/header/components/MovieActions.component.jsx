import React from 'react'

import styles from './MovieActions.styles'

const MovieActions = () => (
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
)

export default MovieActions
