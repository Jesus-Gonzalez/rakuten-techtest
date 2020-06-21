import React from 'react'
import { Link } from 'react-router-dom'

import { useDetailPage } from './useDetailPage.hook'

const DetailPage = () => {
  const hook = useDetailPage()

  return (
    <div>
      <h1>Detail Page</h1>
      <Link to='/home'>Home</Link>
    </div>
  )
}

export default DetailPage
