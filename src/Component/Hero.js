import React, { useState } from 'react'
import Artica from '../Component/Image/air.png'
import Intro from './Intro'
import Link from './Image/ink-clip-art-ink-brush-.png'
import Paint from './Image/paint-photography-desktop-wallpaper-black-and-white-splattered-spray.png'
import IntroPic from './Image/Mask group.png';
import{ FaSearch }from 'react-icons/fa'
import Explore from './Explore'
import TrusUs from './TrusUs'
import Revpopup from './Revpopup'
import { motion } from 'framer-motion'


function Hero() {
  const [showRev, setShowRev] = useState(false)

  const ClosetheRev = () => setShowRev(false)

  const animation = {
    initial: {opacity: 0, y: 200, x:30},
    animate: {opacity: 1, x: 30, y: 5}, 
  }
  return (

    <section>
   <header className='header'>
    <section className='global'>
       {/*Logo and Connect */}  
    <section class='flex  justify-between  md:px-2 lg:px-12'>
      <div >
      <p class='bg-black'>  <img src={Artica} alt=''  class='rounded-md  text-black'/></p>
        </div>

        <div class=' sm:flex sm:justify-between '>
        <div class='p-3 sm:flex gap-3 '>
         <p class='hidden  px-4 md:mt-0  py-2  md:px-7 text-white sm:flex gap-3 rounded-xl border'><FaSearch  class='mt-1.5'/> <input type="text" placeholder='Search items, Collections & accounts' class='md:w-[300px] bg-transparent outline-none' /></p> 
        <button class='text-base p-3 text-black bg-white  border rounded-3xl sm:px-7 transition-all duration-300 hover:bg-transparent hover:text-white'>Connect Wallet</button> 
        </div>
      </div>
    </section>


    <section  className='sect'>
      <motion.div variants={animation} initial="initial" animate="animate" transition={{duration: 1}}>
      <div class='-ml-12 sm:ml-0'>
                <img src={IntroPic} alt="mask" class='w-[350px] sm:w-[600px]'/>
                <p class='text-[18px] sm:text-[25px] mt-6 font-thin'>In the heart of every artifact lies a story waiting to be told.</p>
               <p class='mt-7'><button onClick={() => setShowRev(true)} class='border rounded-xl px-3 py-1 sm:px-5 sm:py-2 sm:rounded-2xl text-base bg-white text-black transition-all duration-300 hover:bg-transparent hover:text-white'>Join the Revolution</button></p> 
            </div>
      </motion.div>
      <Revpopup onClose={ClosetheRev}  visible={showRev}/>
         
        </section>
    </section>
   
      <Intro />



   </header>
   <div  class='flex pl-5 pt-[-60px]'>
<img src={Paint} alt="" class='-mt-12 -ml-10 ' /><img src={Link} alt=""  class='-mt-2 -ml-6 w-[250px] sm:w-full' />
   </div>

   <Explore />
   <TrusUs />

   </section>
  )
}

export default Hero