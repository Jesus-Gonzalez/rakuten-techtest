import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
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
        <Route
          exact
          path='/'
          render={() => <Redirect to='/home' />}
        />

        <Route
          path='/home'
          component={HomePage}
        />

        <Route
          path='/detail'
          component={DetailPage}
        />
      </Switch>
    </React.Suspense>
  </Router>
)

export default Routing