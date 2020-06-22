import React from 'react'

export const useHeader = configuration => {
  const { item } = configuration

  console.log('item', item)

  const headerStyle = React.useMemo(() => ({
    backgroundImage: `url(${item.images.snapshot.replace('.jpeg', '-width1920-quality80.jpeg')})`
  }), [item])

  return {
    headerStyle
  }
}