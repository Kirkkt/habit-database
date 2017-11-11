import React from 'react'
import { Route } from 'react-router-dom'
import MainList from './pages/MainList'
import "./App.css"

export default () => (
  <div>
    <div>
      <Route exact path="/" component={MainList} />
    </div>
  </div>
)
