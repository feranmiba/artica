import React from 'react'
import Pic1 from './Image/FineGirl.png'
import White from './Image/whitepaint.png'
import SmallWhite from './Image/SmallWhitePaint.png'
import Footer from './Footer'
import { motion, AnimatePresence } from 'framer-motion'
import '../App.css'

function TrusUs() {
  return (
    <section class='mt-32'>
     <div class='flex items-stretch justify-end -mb-32 '>  <img src={White} alt=""/></div>  
    <div class='bg-black px-12 pt-52'>
       <section class='flex sm:px-14  flex-wrap xl:flex-nowrap'>
        <div class='text-left '>
            <h1 class='text-3xl font-bold mt-16'>Why our <b className='create'> Creator trust us</b></h1>
            <p class='mt-12 w-11/12 text-2xl leading-9 font-semibold'>
                <b className='artica'>We are committed</b> to safeguarding the cultural heritage of Africa. Through cutting-edge technology,
                we capture the intricate details of artifacts and artworks, preserving their essence for generations to come.
            </p>
            <h4 class='w-11/12 mt-14 text-xl'>...Artica is one of those "if you know, you know" sort of things where, if you actually know, it can essentially be life changing for you 
                as an artist...
            </h4>
            <form class='mt-16'>
                <h6>- Adeola Motoni</h6>
                <h4>Artist</h4>
                <h4>Nigeria</h4>
            </form>
        </div>
        <div class='w-full'>
            <p class='flex items-stretch justify-end'><img src={SmallWhite} alt="" /></p>
            <AnimatePresence>
            <motion.div
        initial={{opacity: 0,  x:50}}
         whileInView={{opacity: 1, scale: 1, x:10}}
         transition={{duration: 2}}
        > <img src={Pic1} alt="" /></motion.div>   
                </AnimatePresence> 
       
            <p class='flex items-stretch justify-end'><img src={SmallWhite} alt="" /></p>
        </div>
        </section> 


        {/*RSVP */}
        <section class='mt-24'>
            <h1 class='text-3xl '>RSVP "IVF '23" <b className='artica'> Auction</b></h1>
            <p className='pt-4'>Mint your ticket below to RSVP The "IVF '23" Auction</p>


            <section class='mt-8'>
                <div className='bLast'>
                <div className='last'>
                    <div>
                    <h1 class='text-2xl  sm:text-3xl font-thin sm:mt-10'>IVF '23 : The Agbero artform</h1>
                    <div>
                        <samp class= 'flex gap-2 leading-5 pt-4'>
                        <form class='border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl'>
                            <h1 class='text-base  sm:text-xl'>07</h1>
                        <p>days</p>
                      </form>
                      <form class='border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl'>
                            <h1 class='text-base  sm:text-xl'>07</h1>
                        <p>days</p>
                      </form>
                      <form class='border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl'>
                            <h1 class='text-base  sm:text-xl'>07</h1>
                        <p>days</p>
                      </form>
                      <form class='border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl'>
                            <h1 class='text-base  sm:text-xl'>07</h1>
                        <p>days</p>
                      </form>
                        </samp>
                        </div>


                      
                    </div>
                    
                    <div class='mt-32 sm:mt-24'>
                    <span >
                          <p  class='bg-slate-400 text-sm  px-5 py-2 md:px-7 md:py-3 rounded-2xl hover:bg-gradient-to-r from-[#9747ff] to-[#ff0000]'> <button>Mint Ticket</button></p> 
                        </span>
                    </div>
                </div>
                </div>
            </section>
        </section>

        {/*FOOTER */}
        <Footer />

    </div>
    </section>
  )
}

export default TrusUs