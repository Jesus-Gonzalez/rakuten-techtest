import React from 'react'

import { useArrow } from './useArrow.hook'

const ArrowComponent = props => {
  const {
    className,
    onClick,
  } = useArrow(props)

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
