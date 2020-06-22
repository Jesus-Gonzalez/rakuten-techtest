import React from 'react'

import styles from './Layout.styles'

const LayoutComponent = props => {
  const { children, title } = props

  return (
    <>
      <header className={styles.header}>
        <nav>
          {title}
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default LayoutComponent
