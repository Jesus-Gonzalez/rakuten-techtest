import React from 'react'
import PropTypes from 'prop-types'

import { Actors, Header, Languages } from './components'

import styles from './Content.styles'

const propTypes = {
  item: PropTypes.object.isRequired
}
const Content = props => {
  const { item } = props

  return (
    <div className={styles.wrapper}>
      <Header item={item} />
      <p className={styles.plot}>
        {item.plot}
      </p>
      <Languages item={item} />
      <Actors item={item} />
    </div>
  )
}
Content.propTypes = propTypes

export default Content
