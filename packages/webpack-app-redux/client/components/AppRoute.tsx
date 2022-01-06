import React from 'react'
import { Routes, Route } from 'react-router-dom'
const Css = React.lazy(() => import('./cssRelated'))
const Redux = React.lazy(() => import('./redux'))
const Header = React.lazy(() => import('./httpHeader'))
const AAntd = React.lazy(() => import('./antd'))
const Others = React.lazy(() => import('./others'))
export default function AppRoute() {
  return (
    <Routes>
      <Route path="/redux" element={<Redux />}></Route>
      <Route path="/css" element={<Css />}></Route>
      <Route path="/header" element={<Header />}></Route>
      <Route path="/antd" element={<AAntd />}></Route>
      <Route path="/others" element={<Others />}></Route>
      <Route path="/" element={<Redux />}></Route>
    </Routes>
  )
}
