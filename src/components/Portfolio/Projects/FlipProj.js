/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { PortfolioData } from 'data/portfoliodata';

export const FlipProj = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? PortfolioData.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    // navigate(PortfolioData[prevIndex].link);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % PortfolioData.length;
    setCurrentIndex(nextIndex);
    // navigate(PortfolioData[nextIndex].link);
  };

  console.log(currentIndex)

  return (
    <>
      <a href={PortfolioData[currentIndex].link} onClick={goToPrevious}>Previous</a>
      <a href={PortfolioData[currentIndex].link} onClick={goToNext}>Next</a>
    </>
  );
}
