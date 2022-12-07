import React, { useContext, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

const CartItem2 = ({title , price , photo ,pro ,setDel , setQuantiy , quantity }) => {

    const [ value , setValue ] = useState (quantity); 

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

    <div  className='mb-[20px]  '>


    <div className='border-2 border-slate-400 h-[32px] text-2xl font-semibold flex justify-end  items-center pr-[40px] text-slate-600  hover:text-red-400 cursor-pointer    '
    onClick={handleDelete}
    id = { 'a'+pro}
    >  <AiOutlineCloseCircle /></div>

    <div   className='border-x-2 border-slate-400  h-[67px]  flex justify-center  items-center      '>

        <div className=' h-[60px] hover:bg-red-400  bg-contain  cursor-pointer'>
            <img className='object-cover  h-[60px]  hover:border-2 border-red-400   ' src={ photo } alt={title}   />
        </div>
    </div>

    <div  className='border-x-2  border-t-2 border-slate-400  min-h-[25px] py-1 text-md font-semibold flex justify-between  items-center px-[20px] text-slate-500 cursor-pointer   '>

    <span className='mr-2   w-[100px]  '> Product :</span>

    <span className='text-red-400 '>  {title}  </span>

    </div>

    <div  className='border-x-2 border-t-2 border-slate-400  h-[25px] text-md font-semibold flex justify-between  items-center px-[20px] text-slate-500 cursor-pointer   '>

    <span> Price :</span>

    <span >  $ {price} </span>

    </div>



    <div  className='border-x-2  border-t-2 border-slate-400 h-[30px] text-md  font-semibold flex justify-between  items-center px-[20px] text-slate-500 cursor-pointer   '>

    <span> Quantity :</span>


    <input className='  border-2 border-slate-300   h-[23px] w-[40px] text-md pl-2  rounded-md  text-center font-semibold text-slate-500 ' type='number'  id={`a${pro}`}
    onChange={handleChange}
    value={value}
    />

    </div>


    <div  className='border-2  border-slate-400  h-[25px] text-md  font-semibold flex justify-between  items-center px-[20px] text-slate-500 cursor-pointer   '>

    <span> Subtotal :</span>

    <span > $ {(price) *(price)}</span>

    </div>



    </div>

    </div>
    ) 
}

export default CartItem2