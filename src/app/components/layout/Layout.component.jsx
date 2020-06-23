import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Layout.styles'

const propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  title: PropTypes.string
}

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

LayoutComponent.propTypes = propTypes

export default LayoutComponent
