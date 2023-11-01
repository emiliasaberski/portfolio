import React, { useRef } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// We will create these two pages in a moment
import { Navigation } from 'components/Navigation/Navigation'
import { ScrollToTop } from 'components/Navigation/ScrollToTop'
import { ShowreelProj } from 'components/Portfolio/Projects/ShowreelProj'
import { ToDoProj } from 'components/Portfolio/Projects/ToDoProj'
import { WornProj } from 'components/Portfolio/Projects/WornProj'
import { StorytelProj } from 'components/Portfolio/Projects/StorytelProj'
import { Footer } from 'components/Footer'
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
        <Route path="/showreel" element={<ShowreelProj />} />
        <Route path="/todoapp" element={<ToDoProj />} />
        <Route path="/worn" element={<WornProj />} />
        <Route path="/storytel" element={<StorytelProj />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
