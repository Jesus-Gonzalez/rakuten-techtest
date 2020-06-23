import React from 'react'

import styles from './Arrow.styles'

export const useArrow = configuration => {
  const {
    left,
    right,
    go,
  } = configuration

  const onClick = () => {
    go(left && 'left')
  }

  const className = React.useMemo(() => (
    [
      styles.arrow,
      left && styles.left,
      right && styles.right,
    ].filter(k => k).join(' ')
  ), [left, right])

  return {
    className,
    onClick
  }
}
