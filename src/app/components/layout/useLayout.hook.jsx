import React from 'react'

export const useLayout = configuration => {
  const { application, detail } = configuration

  const title = React.useMemo(() => (
    !detail.loading && detail.item
      ? detail.item.title
      : application.title
  ))

  return {
    title,
  }
}
