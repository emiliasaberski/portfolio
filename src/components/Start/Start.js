/* eslint-disable max-len */
import React from 'react';
import { motion } from 'framer-motion';
import './Start.css'
import blob from '../../assets/blob_2.gif'

export const Start = () => {
  // const x1 = useTransform(scrollYProgress, [0, 1], [1000, -1000]);

  return (
    <div className="start-wrapper">
      <div className="text-wrapper">
        <motion.h2
          className="headline-name"
          initial={{ x: '0' }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}>Emilia Saberski Emilia Saberski Emilia Saberski
        </motion.h2>
        <motion.h2
          className="headline-name"
          initial={{ x: '100%' }}
          animate={{ x: '0' }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}>Emilia Saberski Emilia Saberski Emilia Saberski
        </motion.h2>
      </div>
      <div className="text-wrapper">
        <motion.h2
          className="headline"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          // exit={{ x: 1000 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}>Creative Frontend Developer Motion Designer
        </motion.h2>
        <motion.h2
          className="headline"
          initial={{ x: '0' }}
          animate={{ x: '100%' }}
          // exit={{ x: 1000 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}>Creative Frontend Developer Motion Designer
        </motion.h2>
      </div>
      <img src={blob} alt="animation" className="animation" />
    </div>
  )
}