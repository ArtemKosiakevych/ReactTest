import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faAddressCard,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons'

import HomeScreen from './Containers/Home'
import ProfileScreen from './Containers/Profile'
import SettingsScreen from './Containers/Settings'

export const history = createBrowserHistory()

library.add(faSearch)
library.add(faAddressCard)
library.add(faSortDown)

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/profile/" component={ProfileScreen} />
      <Route path="/settings/" component={SettingsScreen} />
    </div>
  </Router>
)

export default AppRouter
