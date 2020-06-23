import React from 'react'

export const useCarousel = configuration => {
  const [left, setLeft] = React.useState(false)
  const [right, setRight] = React.useState(false)
  const [page, setPage] = React.useState(0)
  const wrapperRef = React.useRef()

  const go = (direction) => {
    const inc = direction === 'left' ? -1 : 1
    const nextPage = page + (inc * 0.5)
    setPage(nextPage)
  }

  React.useEffect(() => {
    wrapperRef.current.scrollLeft = page * window.outerWidth
    // console.log('wrapperRef.current.scrollLeft', wrapperRef.current.scrollLeft)
    setLeft(page !== 0)
    const maxPage = wrapperRef.current.scrollWidth / window.outerWidth
    setRight(page !== Math.floor(maxPage))
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
