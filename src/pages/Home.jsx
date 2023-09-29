import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'

import {CustomButton} from '../components'

import state from '../store'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state)
  
  return (
    <AnimatePresence>
      {snap.intro &&(
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src='./threejs.png' alt='threejs.png' className='h-10 w-10 object-contain' />
          </motion.header>
          <motion.div className='home-content'{...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>LET'S<br className='xl:block hidden'/> DO IT.</h1>
            </motion.div>
            <motion.div {...headContainerAnimation} className='flex flex-col gap-10'>
              <p className='max-w-md font-normal text-grey-600 text-base'>
                Create your unique and exclusive shirt with brand new 3D customization tool. <strong>Unleash your imagination </strong> and define your own style.
              </p>
              <CustomButton 
                customStyle='bg-pink w-fit px-4 py-2.5 font-bold text-sm' 
                type="filled"
                title='Customize It'
                handleClick={()=> state.intro= false}
              />
            </motion.div>
          </motion.div>

        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home