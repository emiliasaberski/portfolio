import React, { useRef } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// We will create these two pages in a moment
import { Navigation } from 'components/Navigation/Navigation'
import { ScrollToTop } from 'components/Navigation/ScrollToTop'
import { HomePage } from './components/Homepage'
import './index.css'

export const App = (showScrollToTop) => {
  const refScrollUp = useRef()

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <BrowserRouter>
      <ScrollToTop showScrollToTop={showScrollToTop} scrollUp={handleScrollUp} />
      <Navigation class="navigation" />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
