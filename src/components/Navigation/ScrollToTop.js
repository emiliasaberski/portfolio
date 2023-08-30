/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react';
import './Navigation.css'

export const ScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const handleVisibleButton = () => {
    setShowScrollToTop(window.pageYOffset > 50)
  }

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <div className={showScrollToTop ? '' : 'scrollToTopHidden'} onClick={handleScrollUp}>
      {/* <button type="button" className="scrollToTop">
           ^ To Top ^
      </button> */}
      <ChevronUp className="scrollToTop" size={40} />
    </div>
  );
};