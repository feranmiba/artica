import React from 'react'
import Artica from '../Image/air.png' 
import Owner from '../Image/carbon_user-avatar-filled.png'
import { FaSearch } from 'react-icons/fa'

function Head() {
  return (
   <header className='header'>
    <section>

    <section class='border-b-slate-100 pb-5 border-b bg-black px-2 md:px-2 lg:px-12 py-5'>
        <div class='flex justify-between'>
     <div >
      <p class='bg-black'>  <img src={Artica} alt=''  class='rounded-md  text-black'/></p>
        </div>

      <div class=' sm:flex sm:justify-between '>
        <div class='p-3 sm:flex gap-3 '>
         <p class='hidden  px-4 md:mt-0  py-2  md:px-7 text-white sm:flex gap-3 rounded-xl border'><FaSearch  class='mt-1.5'/> <input type="text" placeholder='Search items, Collections & accounts' class='md:w-[300px] bg-transparent outline-none' /></p> 
        <button class='  flex gap-3'> <p class='mt-2 text-lg md:text-xl '>0x3b24...rd7a</p> <img src={Owner} alt="" /></button> 
        </div>
      </div>
      </div>

      <div class='pt-20 text-lg sm:text-xl font-thin flex justify-between sm:justify-start sm:gap-5'>
               <button>Paintings</button>
               <button>Murals</button>
               <button>Mosaic</button>
               <button>NFTs</button>
               <button>Molds</button>
               <button>Physical</button>
            </div>
    </section>

    <section class='border-b pb-14'>

                <div className='bLast'>
                <div className='last'>
                    <div>
                    <h1 class='text-xl sm:text-3xl font-thin sm:mt-10'>IVF '23 : The Agbero artform</h1>
                    <div>
                        <samp class= 'flex gap-2 leading-5 pt-4'>
                        <form class='border bg-slate-300 text-black py-1 px-2 md:px-4 text-center rounded-xl'>
                            <h1 class=' text-base  sm:text-xl'>07</h1>
                             <p>days</p>
                      </form>
                      <form class='border bg-slate-300 text-black py-1 px-2 md:px-4 text-center rounded-xl'>
                            <h1 class=' text-base  sm:text-xl'>07</h1>
                             <p>days</p>
                      </form>
                      <form class='border bg-slate-300 text-black py-1 px-2 md:px-4 text-center rounded-xl'>
                            <h1 class=' text-base  sm:text-xl'>07</h1>
                              <p>days</p>
                      </form>
                      <form class='border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl'>
                            <h1 class=' text-base  sm:text-xl'>07</h1>
                           <p>days</p>
                      </form>
                        </samp>
                        </div>
                         </div>
                          <div class='mt-32 sm:mt-24'>
                                <span class=' pr-0 sm:pr-0'>
                                <p  class='bg-slate-400 text-base hover:bg-gradient-to-r from-[#9747ff] to-[#ff0000]  px-5 py-2 md:px-7 md:py-3 rounded-2xl'> <button>Mint Ticket</button></p> 
                                </span>
                            </div>
                </div>
                </div>
                </section>
                
    </section>


   </header>
  )
}

export default Head