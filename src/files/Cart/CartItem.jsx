import React, { useContext, useState } from 'react'
import { ImCancelCircle } from "react-icons/im";

const CartItem   = ({title , price , photo ,pro ,setDel , setQuantiy , quantity  }) => {



  const [ value , setValue ] = useState (quantity);
  
  const amount = (value * price);


  const handleDelete=( event)=>{
    let b = event.currentTarget.id  ;
    b=b.substring(1, 3);
    let n  =+b;
    console.log(n);
    setDel(n);
  }

  const handleChange =(event)=>{

    setValue(event.target.value);
    let val = event.target.value;
    let b = event.target.id  ;
    b=b.substring(1, 3);
    let id  =+b;
    setQuantiy ( id , val);
  }



  return (
    <div> 
        


{/* cart item  */}

<div className=' flex  justify-start  text-md  text-slate-700  w-full h-[80px]  border-2 border-t-0 border-slate-300 rounded-t-sm '> 

<div  
className='w-[49%] h-full flex justify-center items-center    '> 


    <div  className='  h-full   w-[15%]   flex justify-center items-center   text-slate-500  hover:text-red-300 ' 
    onClick={handleDelete}
    id = { 'a'+pro}
      >
      <ImCancelCircle />
    </div>


    <div className=' h-[80px] mt-3 bg-contain  cursor-pointer'>
              <img className='object-cover  h-[70px] w-[80px]  border-red-400   ' src={ photo } alt={title}   />
            </div>

    <div  className='  h-full   w-[60%]    flex justify-start items-center  text-red-500 font-semibold ml-4   ' > { title}</div>

 </div>  {/* 48% */}


<div className=' w-[51%]   flex ' > 

    <div   className='  h-full   w-[35%]   flex justify-center items-center  font-semibold  text-slate-500      '
    > $ {price} </div>


    <div  className='  h-full   w-[35%]   flex justify-center items-center    '
    > 
      <input className='  border-2 border-slate-300  w-[50px] text-md  rounded-md  text-center font-semibold text-slate-500 ' type='number'  id={`a${pro}`}
      onChange={handleChange}
      value={value}
      />
      
      </div>

    <div  className='  h-full   w-[35%]    flex justify-center items-center  font-semibold  text-slate-500   '
    > {value * price } </div>
</div>



</div>


    </div>
  )
}

export default CartItem