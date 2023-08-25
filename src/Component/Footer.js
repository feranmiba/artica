import React from 'react'
import Artica from './Image/air.png'
import { FaTwitter, FaTelegram, FaDiscord, FaYoutube, FaInstagram, FaCopyright } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <section class='mt-20'>
            <div class='flex justify-between  flex-wrap-reverse border-b pb-5'>
                <div class='mt-5'>
                    <h1 class='text-2xl'> <b className='artica'>Join</b> our communities</h1>
                    <p class='flex gap-3 pt-5'>
                     <p class='bg-white px-3  pt-3 pb-2 rounded-3xl'><a href="#"  class='text-black text-xl'><FaTwitter /></a></p> 
                     <p class='bg-white px-3  pt-3 pb-2 rounded-3xl'><a href="#"  class='text-black text-xl'><FaTelegram /></a></p> 
                     <p class='bg-white px-3  pt-3 pb-2 rounded-3xl'><a href="#"  class='text-black text-xl'><FaDiscord /></a></p>   
                     <p class='bg-white px-3  pt-3 pb-2 rounded-3xl'><a href="#"  class='text-black text-xl'><FaYoutube /></a></p> 
                     <p class='bg-white px-3  pt-3 pb-2 rounded-3xl'><a href="#"  class='text-black text-xl'><FaInstagram /></a></p> 
                    </p>
                </div>

                    
                <span >
                    <h1 class='text-3xl font-semibold'> <b className='artica'>Information </b>is power</h1>
                    <p class='pt-3 text-lg font-thin'>Stay informed with all trends and cultural phenomenums with our newsletter</p>
                    <div class='pt-2 flex gap-3'>
                     <p class='w-[200px] sm:w-{500px} pl-5 pr-14 border rounded-2xl'><input type="text" placeholder='Your email address' class=' sm:w-{600px} pr-44 sm:py-3 py-2 bg-transparent outline-none'/></p>   <p class='rounded-r-xl border px-7 py-3 bg-white text-black transition-all duration-300 hover:bg-transparent hover:text-white'> <button >Sign up </button></p> 
                    </div>
                </span>
            </div>
        </section>

        <section class='pt-10 flex justify-between flex-wrap  sm:flex-nowrap'>
            <div>
                <img src={Artica} alt="" />
            </div>
            <div class='flex gap-5 sm:gap-20 flex-wrap'>
              <p class='flex gap-2'> <FaCopyright />Artica group inc</p> 
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer