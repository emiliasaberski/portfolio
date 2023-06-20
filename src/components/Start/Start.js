import React from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion';
import './Start.css'

export const Start = () => {
  // const ref = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start end', 'end end']
  // })
  // const textX = useTransform(scrollYProgress, [0.1, 0.7], ['100%', '-100%']);

  return (
    <div className="start-wrapper">
      <h2 className="headline-name">Emilia Saberski</h2>
      <h2 className="headline">Creative Fullstack Developer Motion Designer</h2>
      {/* <h2 className="headline-left">Motion designer</h2> */}
    </div>
  )
}
