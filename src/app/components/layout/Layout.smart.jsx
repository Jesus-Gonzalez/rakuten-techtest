import React from 'react'
import { connect } from 'react-redux'

import { useLayout } from './useLayout.hook'

import LayoutComponent from './Layout.component'

const Layout = props => {
  const hook = useLayout(props)

  return (
    <LayoutComponent {...props} {...hook} />
  )
}

const mapStateToProps = state => ({
  application: state.application,
  detail: state.detail,
})

export default connect(mapStateToProps)(Layout)
