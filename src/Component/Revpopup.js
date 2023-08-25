import React from 'react'
import { Link } from 'react-router-dom';
import owner from './Image/solar_pallete-2-outline.png'

function Revpopup({visible, onClose}) {
    if(!visible) return null;
  return (
    <div>

<div className='overlay' onClick={onClose}></div>
      <section class='z-20 border flex w-[70%] sm:w-[50%] absolute justify-center gap-10 flex-wrap sm:flex-nowrap  sm:px-5 py-3 rounded-xl bg-white'>
   <Link to="/profile" > <div class='group text-center border px-14 py-3 rounded-xl bg-white text-black hover:bg-black hover:text-white'>
          <button>
          <img src={owner} alt="" />
          </button>
          <span > <h1 class='mt-10 text-lg font-bold'>Join as a owner</h1>
          <p class='mt-2 text-base'>Create Your Profile</p></span>
        </div> </Link> 
        <div class='text-center border px-14 py-3 rounded-xl bg-white text-black  hover:bg-black hover:text-white'>
          <button>
          <img src={owner} alt="" />
          </button>
          <span > <h1 class='mt-10 text-lg font-bold'>Make a bid</h1>
          <p class='mt-2 text-base'>Join as a customer</p></span>
        </div>
      </section>
    </div>
  )
}

export default Revpopup