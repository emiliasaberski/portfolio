import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { PortfolioData } from 'data/portfoliodata'
import './Animation.css';

gsap.registerPlugin(ScrollTrigger);

export const AnimationTest = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=${slider.current.offsetWidth}`
          // markers: true
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <h2>Portfolio</h2>
      <div className="firstContainer">
        {/* <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2> */}
      </div>
      <div ref={slider} className="container">
        {/* <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow" />
            </div>
          </div>
        </div> */}
        {PortfolioData.map((p) => (
          <>
            {/* <div className="panel red">ONE</div>
            <div className="panel orange">TWO</div>
            <div className="panel purple">THREE</div> */}
            <Link
              className="panel"
              to={p.link}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
            </Link>
          </>
        ))}
      </div>
      {/* <div className="lastContainer">Last Container</div> */}
    </div>
  );
}
