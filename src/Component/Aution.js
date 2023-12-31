import React from 'react'
import pic1 from './Image/oo.png'
import pic2 from './Image/scetion2pic2.png'
import pic3 from './Image/section2pic3.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Aution() {
  return (
    <div class='mt-32 md:mt-20 mb-32'>
        <div className='global see'>

        <section class='flex justify-center gap-36 md:flex-nowrap flex-wrap'>

            <div class='flex relative '>
             
              <div class='flex'>
              <motion.div
         initial={{opacity: 1}}
         whileHover={{
            scale: 1.3,
            transistion: { duration: 15} }} class='z-20 group  absolute transition-all duration-300 -mt-20  w-11/12 ml-10 sm:ml-20 ' >    
            <div><img src={pic1} alt=""  />
            <div class='-mt-20 px-5 duration-300  transition-all opacity-0 group-hover:opacity-100'>
                <h1 class='text-2xl'>Mama Afri</h1>
                <p class='text-xl'>0.005 ETH</p>
                </div>
             </div>   
             </motion.div>  

         <motion.div
         initial={{opacity: 1}}
         whileHover={{
            scale: 1.3,
            transistion: { duration: 15} }}  class='z-0 group absolute transition-all duration-300 ml-20 sm:ml-36 mt-24 w-4/5 hover:z-50'>     
             <div>   <img src={pic2} alt=""   /> 
             <div class='-mt-20 px-5 duration-300  transition-all opacity-0 group-hover:opacity-100'>
                <h1 class='text-2xl'>Lesotho 1935</h1>
                <p class='text-xl'>0.005 ETH</p>
                </div>
             </div> 
            </motion.div>  
          
            
           

             <motion.div
                initial={{opacity: 1}}
                whileHover={{   
                scale: 1.3,
                transistion: { duration: 15} }}   class='z-10 group mr-14 mt-10 transition-all duration-300 w-full hover:z-50' >
                <div>
                <img src={pic3} alt=""  />
                <div class='-mt-20 pl-20 duration-300  transition-all opacity-0 group-hover:opacity-100'>
                <h1 class='text-2xl'>Shuku Sosa</h1>
                <p class='text-xl'>0.005 ETH</p>
                </div>
                </div>
                </motion.div>  


                </div>
             
            </div>

                <motion.div 
                 initial={{opacity: 0,  x:-100}}
                 whileInView={{opacity: 1, scale: 1, x:30}}
                  transition={{duration: 0.5}}
                  class='w-9/12'
                >
                <p class='text-3xl font-bold'>
                    With each click , you're not just exploring - you're empowering. <b className='artica'>Artica</b> is dedicated to sharing
                    its success with the communities that make this heritage come alive.
                </p>
                <p class='mt-8'>
            <Link to="/auction"> <button class='border px-6 py-2 rounded-xl text-black bg-white transition-all duration-300 hover:bg-transparent hover:text-white'>View Auction</button> </Link> 
                </p>
                <p class='flex mt-5'>
                    <span>Visit</span><li href="#" className='create'>The Gallery</li>
                </p>
            </motion.div>
        </section>

        </div>

    </div>
  )
}

export default Aution