import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Layout.styles'

const LayoutComponent = props => {
  const { children, title } = props

  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link to='/'>{title}</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default LayoutComponent
