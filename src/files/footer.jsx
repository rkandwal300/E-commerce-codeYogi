import React, { memo } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

let Footer = () => {

  return (
    <>

      <div className='w-full pt-[100px]  bg-slate-600'>



        <div className='selection:bg-pink-400  pb-[100px]  flex lg:flex-nowrap  md:flex-wrap justify-evenly items-center md:flex-row  flex-col  '>


          <div className='ml-[15px] flex flex-col  items-center mx-[15px] font-semibold   mb-[50px]      '>

            <img src='https://trycasuals.com/wp-content/uploads/2019/06/print-favicon-free-img-1.png' />

            <h5 className='text-2xl  mt-[20px] font-sans  font-medium text-white    ' >Custom Print Store </h5>

            <div className=' flex  justify-evenly text-lg w-[200px] mt-[18px] text-white    ' >

              <span className='hover:text-red-500'  >  <FaInstagram />   </span>
              <span className='hover:text-red-500'  >   <FaTwitter />  </span>
              <span className='hover:text-red-500'  >  <FaLinkedinIn />   </span>
              <span className='hover:text-red-500'  >  <FaFacebook />  </span>

            </div>

          </div>

          <div className=' text-xl mx-[15px]   w-[350px]   mb-[50px]  mt-[20px] font-sans  font-medium text-white '>


            <h6 className=' mb-[15px]   font-semibold   '  > Get in Touch with Us for the Best Quality Custom Prints & Supplies. </h6>
            <p className='text-sm   font-semibold   ' > Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. </p>


          </div>


          <div className=' text-2xl font-semibold  mt-[20px] font-sans   mb-[50px]    text-white '>


            <h6 className=' mb-[15px]'  > Quick Links</h6>
            <p className='text-sm  list-none ' >

              <li className=' hover:cursor-pointer   hover:text-red-500  font-semibold    '  > Know More About Us  </li>
              <li className=' hover:cursor-pointer   hover:text-red-500  font-semibold    '  > Visit US  </li>
              <li className=' hover:cursor-pointer   hover:text-red-500  font-semibold    '  >  Lets Connect </li>

            </p>


          </div>


          <div className=' text-2xl  mt-[20px] font-sans   mb-[50px]   font-medium text-white '>

            <h6 className=' mb-[15px]'  > Important Links</h6>
            <p className='text-sm  list-none ' >

              <li className=' hover:cursor-pointer   hover:text-red-500  font-semibold    '  > Know More About Privacy Policy  </li>
              <li className=' hover:cursor-pointer   hover:text-red-500  font-semibold    '  > Visit Shipping Details  </li>
              <li className=' hover:cursor-pointer   hover:text-red-500  font-semibold    '  >   Terms & Conditions </li>

            </p>

          </div>

        </div>

        <div className='py-[15px]    px-[5px] flex flex-wrap  items-center justify-between  border-t-2 border-gray-700 '>

          <div className='  text-white text-sm  ml-3   selection:bg-pink-400  '  > Copyright © 2022 | TryCasuals </div>

          <div className='  text-white text-sm  mr-3   selection:bg-pink-400  '  > Powered By TryCasuals </div>
        </div>

      </div>

    </>

  )
}

export default memo(Footer) ;