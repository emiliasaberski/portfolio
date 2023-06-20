import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import './Start.css'

export const Start = () => {
  const { scrollYProgress } = useScroll();
  // const x1 = useTransform(scrollYProgress, [0, 1], [1000, -1000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <div className="start-wrapper">
      <motion.h2
        className="headline-name"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 10 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4
        }}>Emilia Saberski
      </motion.h2>
      <motion.h2 style={{ x2 }} className="headline">Creative Fullstack Developer Motion Designer</motion.h2>
      {/* <h2 className="headline-left">Motion designer</h2> */}
    </div>
  )
}
