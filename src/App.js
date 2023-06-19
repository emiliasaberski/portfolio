import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// We will create these two pages in a moment
import { Navigation } from 'components/Navigation/Navigation'
import { HomePage } from './components/Homepage'
import './index.css'

export const App = () => {
  return (
    <div className="content-container">
      <BrowserRouter>
        <Navigation class="navigation" />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
