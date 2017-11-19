import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import "./App.css"

export default () => (
  <div>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </div>
)
