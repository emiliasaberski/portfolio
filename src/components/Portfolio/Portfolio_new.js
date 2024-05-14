import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { PortfolioData } from 'data/portfoliodata'
import './Projects/Animation.css';

gsap.registerPlugin(ScrollTrigger);

export const PortfolioNew = () => {
  // const component = useRef();
  const slider = useRef();
  const ref = useRef(null)

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
          end: () => '+=5000', // `+=${slider.current.offsetWidth}`
          markers: false
        }
      });
    });
    return () => ctx.revert();
  });

  return (
    <div ref={ref} id="portfolio">
      <div className="firstContainer" />
      <div ref={slider} className="container">
        {PortfolioData.map((p) => (
          <Link
            className="panel"
            to={p.link}>
            <img src={p.img} alt={p.name} />
            {/* <h3>{p.name}</h3> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
// /* eslint-disable react/style-prop-object */
// import React, { useRef } from 'react'
// import { useInView, motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import './Portfolio.css'
// import { PortfolioData } from 'data/portfoliodata'

// export const PortfolioNew = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const portfolioAnimation = {
//     initial: {
//       opacity: 0,
//       x: 100
//     },
//     animate: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: 0.1 * i,
//         easeOut: 0.3
//       }
//     })
//   }

//   return (
//     <div className="portfolio-container" ref={ref} id="portfolio">
//       <h2
//         style={{
//           transform: isInView ? 'none' : 'translateX(-100%)',
//           opacity: isInView ? 1 : 0,
//           transition: ' 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
//           // eslint-disable-next-line max-len
//         }}>Portfolio
//       </h2>
//       {PortfolioData.map((p, i) => (
//         <motion.div
//           ref={ref}
//           className="portfolio-wrapper"
//           key={p.id}
//           data={p}
//           variants={portfolioAnimation}
//           initial="initial"
//           whileInView="animate"
//           viewport={{
//             once: true
//           }}
//           custom={i}>
//           <Link
//             to={p.link}>
//             <img src={p.img} alt={p.name} />
//             <h3>{p.name}</h3>
//           </Link>
//           {p.tags.map((tag) => (
//             <span key={p.id} className="tags">{tag}</span>
//           ))}
//         </motion.div>
//       ))}
//     </div>
//   )
// }