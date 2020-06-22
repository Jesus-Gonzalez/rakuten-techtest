import React from 'react'
import PropTypes from 'prop-types'

import { useLayout } from './useLayout.hook'

import LayoutComponent from './Layout.component'

const propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ])
}

const Layout = props => {
  const hook = useLayout(props)

  const { children } = props
  return (
    <LayoutComponent {...props} {...hook}>
      {children}
    </LayoutComponent>
  )
}

Layout.propTypes = propTypes

export const withLayout = Component => (props) => (
  <Layout>
    <Component {...props} />
  </Layout>
)

export default Layout
