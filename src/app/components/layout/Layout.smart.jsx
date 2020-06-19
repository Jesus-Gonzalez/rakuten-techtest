import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
  application: state.application,
  detail: state.detail,
})

const ConnectedLayout = connect(mapStateToProps)(Layout)

export const withLayout = Component => (props) => (
  <ConnectedLayout>
    <Component {...props} />
  </ConnectedLayout>
)

export default ConnectedLayout
