import React, { useEffect, useState } from 'react'

const CartButton = ( {  updateData  }  ) => {








    console.log( ' update data by aa  use state = ',updateData)
    return (
    <div>
        <div className=' h-fit p-2 flex flex-wrap  border-2 border-slate-300  md:flex-nowrap  md:justify-between justify-center  items-center  bg '>


        <div className=' flex flex-wrap  sm:flex-nowrap  justify-center   items-center md:mb-0   mr-6' > 
            <input 
            type='text'  
            placeholder='Coupon code'
            className='border-2 border-slate-400 max-w-[280px]  h-9 rounded-md pl-4 text-lg text-slate-500 m-[15px] '
            /> 
            <button
            className=' bg-red-400 px-14 max-w-[240px]  py-2 rounded-lg shadow-md text-sm font-semibold text-white  ' 
            > APPLY COUPON </button>  
        </div>


        <div className='  flex flex-wrap  sm:flex-nowrap  justify-center   items-center mb-5  mr-4  mt sm:w-[280px] w-full '>
    {
    
        <button   
        className=' bg-red-400 sm:px-14 w-full  py-2 rounded-lg shadow-md text-sm font-semibold text-white md:mt-6 mt-3 '  
        onClick={updateData}
        >UPDATE CART </button>  
    }
        </div>
        </div>
    </div>
    )
}

export default CartButton   ;