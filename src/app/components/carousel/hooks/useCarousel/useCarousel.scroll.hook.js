import React from 'react'

export default configuration => {
  const [left, setLeft] = React.useState(false)
  const [right, setRight] = React.useState(false)
  const [page, setPage] = React.useState(0)
  const wrapperRef = React.useRef()

  const go = (direction) => {
    const inc = direction === 'left' ? -1 : 1
    const nextPage = page + inc
    setPage(nextPage)
  }

  React.useEffect(() => {
    wrapperRef.current.scrollLeft = page * window.outerWidth
    setLeft(wrapperRef.current.scrollLeft > 0)
    const isMaxPage = window.outerWidth + wrapperRef.current.scrollLeft >= wrapperRef.current.scrollWidth
    setRight(!isMaxPage)
  }, [page])

  return {
    pagination: {
      arrow: {
        left,
        right,
      },
      ref: {
        wrapper: wrapperRef
      },
      go,
    }
  }
}
