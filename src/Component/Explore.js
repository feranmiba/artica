import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import FirstSlides from './FirstSlides'
import { motion } from 'framer-motion'
import Artica from './Image/Explore Artica.png'
import SecondSlide from './SecondSlide'
import { useRef, useEffect, useState } from 'react'

function Explore() {

console.log(FirstSlides);

    const image = [
        {
            url: 'Image.section3pic1.png'
        }
    ]

    
  return (


    <div className='global'>
    <div class='text-black mt-10'>
        <section>
            <div>
                <p><img src={Artica} alt="" /></p>
            </div>
            <div class='pt-3 text-xl flex gap-5'>
               <button class='px-5 py-2 bg-black text-white rounded-lg'>All</button>
               <button>Paintings</button>
               <button>Murals</button>
               <button>NFTs</button>
               <button>Physical</button>
            </div>
          <motion.div class='flex'> 
          <motion.div class='flex gap-4 list-none pt-8'>
                 {FirstSlides.map(img => {
                    return(
                        <motion.div> 
                            <img src={img} alt="" />
                            </motion.div>
                            

                    )
                 })

                 }
            </motion.div>
          
            </motion.div> 




                <div class='mt-20'>
                    <summary class='flex justify-between'>
                    <h1 class='text-3xl font-bold'>Highest Art Bid</h1>
                    <a href="#" class='text-xl underline'>See more</a>
                    </summary>
                   
                    <motion.div > 
          <motion.div class='flex gap-5 pt-8'>
                 {SecondSlide.map(img => {
                    return(
                        <motion.div> 
                            <img src={img} alt="" />
                            </motion.div>

                    )
                 })

                 }
            </motion.div>
            </motion.div>

            </div>
        </section>
    </div>

    </div>
  )
}

export default Explore