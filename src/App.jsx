import React from 'react'

import '~/styles/global.scss'

import '~/core/icons'
import { Routing, Store } from '~/core'

const App = () => (
  <Store>
    <Routing />
  </Store>
)

export default App
