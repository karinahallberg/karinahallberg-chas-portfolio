import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Board from './Board'
import ErrorBoundary from '../ErrorBoundary'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <ErrorBoundary>
      <Route path='/about' component={About} />
      <Route path='/articles' component={Board} />
    </ErrorBoundary>
  </Switch>
)

export default Main
