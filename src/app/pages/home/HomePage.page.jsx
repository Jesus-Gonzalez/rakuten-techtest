import React from 'react'

import { withLayout, Carousel } from '~/app/components'

import { useHomePage } from './useHomePage.hook'

const HomePage = props => {
  const {
    state,
  } = useHomePage(props)

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
