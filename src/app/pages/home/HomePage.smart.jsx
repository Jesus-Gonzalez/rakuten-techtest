import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { fetchFilms, setDetail } from '~/core/store/actions'

import { withLayout } from '~/app/components'

import { useHomePage } from './useHomePage.hook'

import HomePageComponent from './HomePage.component'

const HomePage = props => {
  const hook = useHomePage(props)

  return (
    <HomePageComponent {...hook} {...props} />
  )
}

const mapStateToProps = state => ({
  application: state.application,
  items: state.films.items
})

const mapDispatchToProps = dispatch => ({
  fetchFilms: compose(dispatch, fetchFilms),
  setDetail: compose(dispatch, setDetail),
})

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default withLayout(ConnectedHomePage)
