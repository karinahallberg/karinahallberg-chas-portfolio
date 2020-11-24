import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import About from './About'
// import Scribble from './Scribble'
import Board from './Board'

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/about' component={About} />
    <Route path='/articles' component={Board} />
  </Switch>
)

export default Main
