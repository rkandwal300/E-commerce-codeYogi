import React, { createContext, useContext, useEffect, useState } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import CartButton from './CartButton.jsx';
import CartItem from './CartItem.jsx';
import { cartListContext } from '../../Api/CartContext.jsx';
import CartItem2 from './CartItem2.jsx';
import Alert from '../SignUp/alert.jsx';




const CartP = () => {

  const {data ,setData , handleDeleteCartItem , HandleQuantity  } = useContext(cartListContext) ;

  
  const cart = data;
  const amt = '50'






const deleteItem= (id )=>{

  handleDeleteCartItem(id);
}

const handleAmount = ()=>{
  const prop =  cart;
    const quantity = prop.map((val)=>{
    return (  val.quantity  * val.product.price )
  })


  const totalAmt = quantity.reduce((a, b) => a + b, 0) 

  return totalAmt;


}

  const subtotal = handleAmount() ;









  return (  
    <div  className=' min-h-[100vh] w-full flex justify-center items-center bg-slate-300    '>


  <div className='h-fit py-5 my-[30px]   w-[95%] bg-white rounded-lg shadow-sm shadow-black flex flex-col p-[30px]   ' >


<div  className='hidden  sm:block h-fit w-full shadow-xl shadow-slate-300 '  >  
<Alert />


      {/* cart Header  */}
      <div className=' flex  justify-start  text-lg font-semibold text-slate-700  w-full h-[30px]  border-2 border-slate-300 rounded-t-md bg-slate-100  '> 

<div  
className='w-[49%] h-[30px] flex justify-center items-center    border-slate-300     '
> Product </div>  {/* 48% */}


<div className=' w-[51%]  flex ' > 

    <div   className='  h-full   w-[35%] flex justify-center items-center    '
    > Price </div>
    <div  className='  h-full   w-[35%]  flex justify-center items-center    '
    > Quality </div>
    <div  className='  h-full   w-[35%]  flex justify-center items-center    '
    > Subtotal </div>
</div>


</div>

{
  cart && cart.length > 0 ?(



  cart.map((val , index)=>{

return(  
  <div key = {val.product.id}>


  <CartItem 

  setDel = { deleteItem}
  pro ={ val.product.id}  
  title ={val.product.title}
  price =  {val.product.price} 
  photo = {val.product.thumbnail }
  quantity = {val.quantity}
  setQuantiy = {HandleQuantity}
  />
  </div>
)
  })
  ):(
    <div className=' h-[60px]  flex justify-center items-center border-2 border-slate-400   text-2xl text-slate-500  '  >   Cart  is empty</div> 
  )

  }




  <CartButton className=' rounded-b-md'   /> 

</div>


    <div  className='  sm:hidden  rounded-md shadow-lg shadow-slate-300      '  >  




    {

      cart && cart.length > 0 ?(
      cart.map((val)=>{

    return(  

      <div   key = {val.product.id} >

      <CartItem2 
        
      setDel = { deleteItem}
      pro ={ val.product.id}  
      title ={val.product.title}
      price =  {val.product.price} 
      photo = {val.product.thumbnail }
      quantity = {val.quantity}
      setQuantiy = {HandleQuantity}
      />
      
      </div>


      )})

      ):(
        <div className=' h-[60px]  flex justify-center items-center border-2 border-slate-400   text-2xl text-slate-500  '  >   Cart  is empty</div> 
      )
    }

    <CartButton />


    </div>


      {/* // Subtotal */}
      <div className= '  h-fit mt-5 flex justify-end  '>

        <div className='h-full md:w-[350px] w-full       flex-col rounded-md shadow-lg shadow-slate-300  border-2 border-slate-300    '  >

        <div className='h-[45px] w-full bg-slate-100 pl-5 flex  justify-start items-center text-lg font-semibold text-slate-500 border-b-2 border-slate-400 '>
        Cart totals
        </div>

        <div className='px-4 mt-7 flex flex-col justify-center '>
            <div className='h-fit w-[100%] flex py-2 border-b-2 border-slate-400       '>
            <span className='text-md font-semibold text-slate-700   w-[50%] ml-4  '> Subtotal</span>

            <span className='text-md font-semibold text-slate-700   w-[50%] ml-4  '> {subtotal }  </span>

            </div>

            <div className='h-fit w-[100%] flex py-2 border-b-2 border-slate-400       '>
            <span className='text-md font-semibold text-slate-700   w-[50%] ml-4  '> Total</span>

            <span className='text-md font-semibold text-slate-700   w-[50%] ml-4  '> {subtotal } </span>

            </div>

            <button className='my-3 py-4 w-full text-lg font-semibold text-white  rounded-lg shadow-lg shadow-slate-300  bg-red-400  hover:shadow-slate-400 '> Proceed to Checkout  </button>

        </div>

        

        </div>

      </div>

  </div>




    </div>
      
    
    
  )
}

export default CartP ;