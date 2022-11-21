import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../api.js';
import { AiOutlineCloseCircle } from "react-icons/ai";
import CartButton from './CartButton.jsx';
import CartItem from './CartItem.jsx';


const CartP = ({data}) => {
  


  const [ cart , setCart ] = useState({});

  
  const [cartData, setCartData] = useState([]);

  const [ lgArrayDelete , setLgArrayDelete ] = useState();


    let keyCart = Object.keys(data);

    const cartValue = Object.values(data);



  useEffect(
            () => {
    
            let PromiseCart = keyCart.map((item , index) =>{ 
                item= +item;
                return getSingleProduct(item);
            })

        let newCart = Promise.all(PromiseCart);
        newCart.then((response)=>{
    
          let valArr =[];
            response.map((val)=>{
            valArr.push(val.data);
            setCartData([...valArr ])
          })
    
    
        }).catch(( err)=>{
            console.log('Api  error bc',err)
        })
    }
    , [])




const deleteItem= (id )=>{
console.log (' id = ',id );

  let tempData = [ ...cartData ] ;

  tempData.splice(id,1);
  console.log ( ' temp data = ' , tempData)
  setCartData( tempData);


}


const HandleQuantity = ( id , quantity )=>{
  let cartObj = {...cart , [id]: quantity };
  setCart(cartObj);

  
  console.log( 'cart page = ',cartObj);
}

console.log( 'cart page out side = ',cart);






  return (  
    <div  className=' min-h-[100vh] w-full flex justify-center items-center bg-slate-300    '>


  <div className='min-h-[95vh] my-[30px]  py-[50px] w-[95%] bg-white rounded-lg shadow-sm shadow-black flex flex-col p-[30px]   ' >


<div  className='hidden  md:block'  >  


      {/* cart Header  */}
      <div className=' flex  justify-start  text-lg font-semibold text-slate-700  w-full h-[50px]  border-2 border-slate-300 rounded-t-sm '> 

<div  
className='w-[49%] h-[50px] flex justify-center items-center   border-r-2 border-slate-300     '
> Product </div>  {/* 48% */}


<div className=' w-[51%]  flex ' > 

    <div   className='  h-full   w-[35%] border-r-2  border-slate-300   flex justify-center items-center    '
    > Price </div>
    <div  className='  h-full   w-[35%] border-r-2 border-slate-300   flex justify-center items-center    '
    > Quality </div>
    <div  className='  h-full   w-[35%]  flex justify-center items-center    '
    > Subtotal </div>
</div>


</div>

{
  cartData && cartData.length > 0 ?(


  cartData.map((val , index)=>{

return(  
  <div key = {val.id}>


  <CartItem 

  setDel = { deleteItem}
  pro ={ index}  
  title ={val.title}
  price =  {val.price} 
  photo = {val.thumbnail }

  setQuantiy = {HandleQuantity}
  />
  </div>
)
  })
  ):(
    <div className=' h-[60px]  flex justify-center items-center border-2 border-slate-400   text-2xl text-slate-500  '  >   Cart  is empty</div> 
  )

  }




  <CartButton updateData ={cart}  oldvalue = {cartData}   /> 

</div>


<div  className='  md:hidden'  >  




{

  cartData && cartData.length > 0 ?(
  cartData.map((val)=>{

return(  
  <div  key = {val.id} >

  
    <div  className='mb-[20px]  '>


      <div className='border-2 border-slate-400 h-[40px] text-3xl flex justify-end  items-center pr-[40px] text-slate-600  hover:text-red-400 cursor-pointer    ' >  <AiOutlineCloseCircle /></div>

      <div   className='border-x-2 border-slate-400  h-[90px]  flex justify-center  items-center      '>

            <div className=' h-[80px] hover:bg-red-400  bg-contain  cursor-pointer'>
              <img className='object-cover  h-[80px]  hover:border-2 border-red-400   ' src={val.thumbnail } alt={val.title}   />
            </div>
      </div>
    
      <div  className='border-x-2  border-t-2 border-slate-400  h-[40px] text-xl font-semibold flex justify-between  items-center px-[20px] text-slate-500 cursor-pointer   '>

        <span> Product :</span>

        <span className='text-red-400'>  {val.title}  </span>

      </div>

      <div  className='border-x-2 border-t-2 border-slate-400  h-[40px] text-xl font-semibold flex justify-between  items-center px-[20px] text-slate-500 cursor-pointer   '>

        <span> Price :</span>

        <span >  $ {val.price} </span>

      </div>



      <div  className='border-x-2  border-t-2 border-slate-400  h-[40px] text-xl font-semibold flex justify-between  items-center px-[20px] text-slate-500 cursor-pointer   '>

        <span> Quantity :</span>

      
        <input className='  border-2 border-slate-300  w-[60px] text-xl  rounded-md  text-center font-semibold text-slate-500 ' type='number' value='1' />

      </div>


      <div  className='border-2  border-slate-400  h-[40px] text-xl font-semibold flex justify-between  items-center px-[20px] text-slate-500 cursor-pointer   '>

<span> Subtotal :</span>

<span > $ {val.price}</span>

</div>



  </div>
  </div>


  )})

  ):(
    <div className=' h-[60px]  flex justify-center items-center border-2 border-slate-400   text-2xl text-slate-500  '  >   Cart  is empty</div> 
  )
}

<CartButton />


</div>

  </div>




    </div>
      
      // ):(
      //    <div className=' h-[100vh ] w-full flex justify-center items-center text-2xl' >Cart is epmty  </div>)
        
    
  )
}

export default CartP ;