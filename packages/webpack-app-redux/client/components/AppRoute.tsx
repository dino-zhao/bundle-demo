import React from 'react'
import { Switch, Route } from 'react-router-dom'
const Css = React.lazy(() => import('./cssRelated'))
const Redux = React.lazy(() => import('./reduxRelated'))

export default function AppRoute() {
  return (
    <Switch>
      <Route path="/redux">
        <Redux />
      </Route>
      <Route path="/css">
        <Css />
      </Route>
      <Route path="/">
        <Redux />
      </Route>
    </Switch>
  )
}
