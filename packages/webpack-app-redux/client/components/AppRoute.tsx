import React from 'react'
import { Switch, Route } from 'react-router-dom'
const Css = React.lazy(() => import('./cssRelated'))
const Redux = React.lazy(() => import('./reduxRelated'))
const Header = React.lazy(() => import('./httpHeader'))

export default function AppRoute() {
  return (
    <Switch>
      <Route path="/redux">
        <Redux />
      </Route>
      <Route path="/css">
        <Css />
      </Route>
      <Route path="/header">
        <Header />
      </Route>
      <Route path="/">
        <Redux />
      </Route>
    </Switch>
  )
}
