import React, { useState } from 'react'
import dat from '../Auction/Ongoing'
import Bid from '../Auction/Bid'
import { FaAngleDown, FaEllipsisV } from 'react-icons/fa'

function MyPic({image, name, item, price, descript}) {

    const [showAdd, setShowAdd] = useState(false)
    const [img, setImg] = useState()

  const ClosetheAdd = () => setShowAdd(false)
    
    
  return (
    <div class='border-t mt-4'>
           <Bid visible={showAdd} imag={img} close={ClosetheAdd} ite={item} myname={name} priced={price}/>


        <section class='flex-wrap md:flex-nowrap  flex gap-10 pb-10 pt-10'>

        
            <div class='p-4'>
            <section  class='border pr-4 pl-4 pt-4 pb-7 rounded-lg w-[250px]'>
                <div>
                    <p class='font-thin text-xl pt-2'><b class='text-xl '>Collection</b>  56 </p>
                    <p class='font-thin text-xl pt-2'><b class='text-xl '>Auctioned</b>  10 </p>
                    <p class='font-thin text-xl pt-2'><b class='text-xl '>Bids</b>  153 </p>
                    <p class='font-thin text-xl pt-2'><b class='text-xl '>Listed</b>  54 </p>
                    <p class='font-thin text-xl pt-2'><b class='text-xl '>Upcoming Events</b>  2 </p>
                    <p class='font-thin text-xl pt-2'><b class='text-xl '>Offers Received</b>  4 </p>  
                </div>
            </section>
            </div>




            <section class='p-5'>
               <div class='flex text-3xl pb-10'><h1>Listed</h1><FaAngleDown /> </div> 
               <section class='flex flex-wrap justify-center rounded-2xl pl-5 pb-10 border border-gray-500'>
                  <div class='group mt-10' onClick={() => setShowAdd(true)}> 
                <p> <img src={image} alt="" class=' border rounded-md w-[50%] group-hover:rounded-sm' onClick={() => setImg(image)}/></p>
                    <div class='  w-[50%] transistion-all duration-200  pt-5 border-t-0 group-hover:border-b-2 group-hover:border group-hover:rounded-sm  group-hover:bg-slate-300 group-hover:text-black'>
                    <div class='flex  justify-between scale-90 transistion-all duration-200  group-hover:scale-95'>
                        <span>
                            <h1>{item}</h1>
                            <p class='pt-1 text-sm font-thin'>{name}</p>
                        </span>
                        <span>
                            <FaEllipsisV />
                        </span>
                    </div>
                    <div class='mt-6 text-lg  scale-90  transistion-all duration-200 group-hover:scale-95'><h1>Asking Price : {price}ETH</h1></div>
                    </div>
                </div>
               </section>
            </section>


        </section>




    </div>
  )
}

export default MyPic