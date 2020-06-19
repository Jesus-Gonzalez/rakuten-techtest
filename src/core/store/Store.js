import React from 'react'
import PropTypes from 'prop-types'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(...[]),
))

export const Store = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

Store.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ])
}
