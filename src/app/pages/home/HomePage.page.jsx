import React from 'react'

import { withLayout } from '~/app/components'

import { Carousel } from './components'

import { useHomePage } from './useHomePage.hook'

const HomePage = props => {
  const {
    state,
  } = useHomePage(props)

  console.log('state', state)

  return (
    <div>
      {state.films.items
        .filter(list => !list.loading)
        .map(list => (
          <div key={list.id}>
            <h3>{list.name}</h3>
            <Carousel
              items={list.contents.data}
            />
          </div>
        ))}
    </div>
  )
}

export default withLayout(HomePage)
