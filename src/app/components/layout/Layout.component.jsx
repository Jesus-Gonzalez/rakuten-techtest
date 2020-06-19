import React from 'react'

const LayoutComponent = props => {
  const { children, title } = props

  return (
    <>
      <header>
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
