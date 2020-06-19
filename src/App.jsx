import React from 'react'

import { Routing, Store } from '~/core'
import { Layout } from '~/app/components'

const App = () => (
  <Store>
    <Layout>
      <Routing />
    </Layout>
  </Store>
)

export default App
