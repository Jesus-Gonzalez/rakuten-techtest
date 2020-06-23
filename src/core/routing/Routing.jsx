import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { LoadingPage } from '~/app/pages/loading'

const DetailPage = React.lazy(() => import(/* webpackChunkName: "detail" */ '~/app/pages/detail'))
const HomePage = React.lazy(() => import(/* webpackChunkName: "home" */ '~/app/pages/home'))
const TrailerPage = React.lazy(() => import(/* webpackChunkName: "trailer" */ '~/app/pages/trailer'))

const Routing = () => (
  <Router>
    <React.Suspense fallback={<LoadingPage />}>
      <Switch>
        {/* <Route
          exact
          path='/'
          render={() => <Redirect to='/home' />}
        /> */}

        <Route
          exact
          path='/'
          component={HomePage}
        />

        <Route
          path='/detail/:filmId'
          component={DetailPage}
        />

        <Route
          path='/trailer/:filmId'
          component={TrailerPage}
        />
      </Switch>
    </React.Suspense>
  </Router>
)

export default Routing
