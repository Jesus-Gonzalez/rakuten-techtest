import React from 'react'

export const useHomePage = configuration => {
  const {
    application,
    setDetail,
    fetchFilms
  } = configuration

  React.useEffect(() => {
    setDetail(null)

    fetchFilms('estrenos-para-toda-la-familia')
  })
}
