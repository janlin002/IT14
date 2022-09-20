/* eslint-disable react/button-has-type */
import React from 'react'
import {
  HashRouter as Router, Routes, Route, Link,
} from 'react-router-dom'

import routerList from './routerList'

function Header() {
  return (
    <div>
      {
        routerList.map((item) => (
          <button>
            <Link to={item.path}>
              {item.name}
            </Link>
          </button>
        ))
      }
    </div>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {
          routerList.map((item) => (
            <Route path={item.path} element={<item.component />} />
          ))
        }
      </Routes>
    </Router>
  )
}

export default App
