import React from 'react'
import Artica from '../Image/air.png' 
import Owner from '../Image/carbon_user-avatar-filled.png'
import { FaSearch } from 'react-icons/fa'


function Head() {
  return (
    <header className='header'>
    <section>

    <section class=' pb-5 bg-black px-2 md:px-2 lg:px-12 py-5'>
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
      </section>
      </section>
      </header>
  )
}

export default Head