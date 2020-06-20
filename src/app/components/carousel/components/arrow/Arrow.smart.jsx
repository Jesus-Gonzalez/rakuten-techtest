import React from 'react'

import useArrowHook from './useArrow.hook'

import ArrowComponent from './Arrow.component'

const Arrow = props => {
  const hook = useArrowHook(props)

  return (
    <ArrowComponent
      {...hook}
    />
  )
}

export default Arrow
