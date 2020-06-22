import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { LoadingPage } from '~/app/pages'

const DetailPage = React.lazy(() => import('~/app/pages/detail'))
const HomePage = React.lazy(() => import('~/app/pages/home'))

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
      </Switch>
    </React.Suspense>
  </Router>
)

export default Routing
