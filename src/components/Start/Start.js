/* eslint-disable max-len */
import React from 'react';
import { motion } from 'framer-motion';
import './Start.css'

export const Start = () => {
  // const x1 = useTransform(scrollYProgress, [0, 1], [1000, -1000]);

  return (
    <div className="start-wrapper">
      <motion.h2
        className="headline-name"
        initial={{ x: '0' }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}> Emilia Saberski Emilia Saberski Emilia Saberski
      </motion.h2>
      <motion.h2
        className="headline-name"
        initial={{ x: '100%' }}
        animate={{ x: '0' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}> Emilia Saberski Emilia Saberski Emilia Saberski
      </motion.h2>
      <motion.h2
        className="headline"
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        // exit={{ x: 1000 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}>Creative Fullstack Developer Motion Designer
      </motion.h2>
      <motion.h2
        className="headline"
        initial={{ x: '0' }}
        animate={{ x: '100%' }}
        // exit={{ x: 1000 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}>Creative Fullstack Developer Motion Designer
      </motion.h2>
      {/* <h2 className="headline-left">Motion designer</h2> */}
    </div>
  )
}