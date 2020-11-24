import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Board from './Board'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/articles' component={Board} />
  </Switch>
)

export default Main
