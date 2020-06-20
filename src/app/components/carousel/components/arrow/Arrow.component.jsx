import React from 'react'

import styles from './Arrow.styles'

const ArrowComponent = props => {
  const {
    className,
    onClick,
  } = props

  return (
    <div
      className={className}
      onClick={onClick}
    >
      &gt;
    </div>
  )
}

export default ArrowComponent
