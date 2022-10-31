import React, { memo, useContext, useEffect, useMemo, useState } from 'react'
import { AiFillCalculator ,AiOutlinePhone } from 'react-icons/ai';
import { ImCancelCircle ,ImAddressBook ,ImMail4   } from "react-icons/im";
import NoteContext from '../Api/noteContext';
import ReactTable from "react-table";  
import { getSingleProduct } from './api';

const Loading = () => {
  return (
    <div className='text-5xl text-white font-bold  bg-blue-500 h-[100px] w-full'>Loading........</div>
  )
}

const About=()=>{

  return(
    <>
  <div className=' h-[300px] w-full flex flex-col justify-center items-center bg-slate-100 border-2 border-slate-400 ' > 

  <h1 className='text-7xl font-semibold text-slate-600  selection:bg-red-400  mb-9   '  > About Us</h1>
  <p className=' w-[700px] text-2xl font-semibold text-slate-400  selection:bg-red-400  mb-9    '> 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
  </p>
  
  </div>





  <div className=' h-[300px] w-[90%] bg-green-300 ml-[5%]  flex flex-col justify-center  ' > 

<h1 className='text-4xl font-semibold  selection:bg-red-400  mb-9   text-slate-600    '  > We Are Your Favourite, Online Store.</h1>
<p className='  text-2xl font-semibold text-slate-400  selection:bg-red-400  mb-9    '> 
Dui habitasse provident eu etiam praesent placeat maiores temporibus, accumsan parturient autem, mi animi ipsa. Lobortis maxime quos, pellentesq.
</p>

</div>


    </>
  )
}



let CartPage = ({data}) => {


  const [cartData, setCartData] = useState([]);


  const keyCart = Object.keys(data);
  const cart = Object.values(data);

  useMemo(()=>{
    let PromiseCart = keyCart.map((item , index) =>{ 
      item=+item;
    return  getSingleProduct(item);
     
  })

  let newCart = Promise.all(PromiseCart)
  newCart.then((response)=>{
    setCartData(response);
    console.log('cart response =',response);
  })
  
  },[keyCart])
  
  console.log(' cart data = ', cartData)

     
  return (
    <>


<div  className=' h-[100vh] w-[100%]  bg-slate-100 flex justify-center items-center  '> 

<div  className=' h-[1100px] w-[95%] rounded-lg shadow-lg bg-white   flex justify-start  flex-col   ' >

<div  className='w-[80%]  ml-[10%] rounded-lg shadow-lg mt-[100px]  border-2 shadow-lg: border-slate-300    p-0 '   >

  <div className=' bg-slate-100  w-[100%] rounded-t-lg h-[70px]  flex  '>


   <div className='w-[48%] flex justify-center items-center text-xl font-semibold  text-slate-500 ' > Product</div> 
    <div className='w-[17%] flex justify-center items-center text-xl font-semibold  text-slate-500 ' > Price</div> 
    <div  className='w-[17%] flex justify-center items-center text-xl font-semibold  text-slate-500 '   > Quantity </div>  
    <div  className='w-[17%] flex justify-center items-center text-xl font-semibold  text-slate-500  ml-[50px] '   > Subtotal</div>

  </div>

  {/* products of carts */}
  <div className=' h-[160px]  w-[100%]   border-y-2 border-slate-300  flex  justify-between items-center
    '>
    <div className='w-[50%] flex  justify-between   items-center'>

        <div className='w-[50%] flex  justify-between items-center '>
        
                <div className='   mx-[20px] text-4xl font-bold text-slate-400  '   > <ImCancelCircle /> </div>
               
                <div className=' h-[120px] w-[120px] '> 
                    <img src='https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg '  alt='product_cart'  width='100%' />
                </div> 
          </div>
              
                <div className=' mr-[15px] text-2xl tracking-wide font-bold text-red-400  hidden md:block '> BlackCoffee mugs</div>  

        </div>


        <div  className='w-[48%] flex  justify-between   items-center  '  >

                <div  className=' ml-[25px] text-2xl tracking-wide font-bold text-slate-500 '> $ 25.00 </div> 

                 <input className='  border-2 border-black  w-[80px] text-2xl text-center font-semibold text-slate-700 ' type='number' value='1' />   
                
                <div   className=' mr-[100px] text-2xl tracking-wide font-bold text-slate-500 ' > $ 30.00</div>
        </div>

  </div>

  
  <div className=' h-[160px]  w-[100%]   border-y-2 border-slate-300  flex  justify-between items-center
    '>
    <div className='w-[50%] flex  justify-between   items-center'>

        <div className='w-[50%] flex  justify-between items-center '>
        
                <div className='   mx-[20px] text-4xl font-bold text-slate-400  '   > <ImCancelCircle /> </div>
               
                <div className=' h-[120px] w-[120px] '> 
                    <img src='https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg '  alt='product_cart'  width='100%' />
                </div> 
          </div>
              
                <div className=' mr-[15px] text-2xl tracking-wide font-bold text-red-400   '> BlackCoffee mug </div>  

        </div>


        <div  className='w-[48%] flex  justify-between   items-center  '  >

                <div  className=' ml-[25px] text-2xl tracking-wide font-bold text-slate-500 '> $ 25.00 </div> 

                 <input className='  border-2 border-black  w-[80px] text-2xl text-center font-semibold text-slate-700 ' type='number' value='1' />   
                
                <div   className=' mr-[100px] text-2xl tracking-wide font-bold text-slate-500 ' > $ 30.00</div>
        </div>

  </div>


   {/* button  apply cupoon  */}
<div  className=' flex justify-between flex-wrap items center pl-[60px] py-[20px] w-[100%]  '>

       <div  className='  flex justify-between items center   '>

              <input id='coupon' className='h-[55px] w-[250px]  bg-white  border-[3px] shadow-xl rounded-lg border-slate-400  text-center text-xl  '  placeholder='Coupon Code' /> 
                    
                    
              <button className=' px-[50px]  py-[10px]   flex justify-center items-center text-xl font-semibold text-white bg-red-400  border-[3px] shadow-xl border-slate-400 rounded-lg  cursor-pointer    hover:bg-green-400  hover:shadow-2xl  ml-[50px] '> Apply Coupon </button>
                


        
      </div>

      
      <button className=' px-[50px]  py-[10px]   flex justify-center items-center text-xl font-semibold text-white bg-red-200   border-[3px] shadow-xl border-slate-400   rounded-lg  cursor-pointer    hover:bg-green-400  hover:shadow-2xl mr-[80px]  '> Update Cart </button>

  </div>


</div>



{/* total and subtotal   */}

    
<div  className='w-[40%]  lg:ml-[50%] md:ml-[30%] ml-[20%] rounded-lg shadow-lg mt-[100px]  border-2 shadow-lg: border-slate-300    p-0 '   >

      {/* Header */}
    <div className=' bg-slate-100  w-[100%] rounded-t-lg h-[70px]  flex  pl-[10%] '>


          <div className='w-[48%] flex justify-start items-center text-2xl font-bold  text-slate-600 ' > Cart Totals </div> 

      </div>


      <div className=' h-[80px]  w-[100%]   border-y-2 border-slate-300  flex  justify-between items-center
    '>

          <div className='w-[50%] flex  justify-between   items-center   '>

    
        
                <div className='   mx-[50px] text-xl font-bold text-slate-600  '   >Sub-Total </div>

        </div>


        <div  className='w-[48%] flex  justify-between   items-center  '  >

              <div  className=' w-[50%]text-xl tracking-wide font-bold text-slate-600 '> $ 25.00 </div> 

              
        </div>

        </div>

        <div className=' h-[80px]  w-[100%]   border-y-2 border-slate-300  flex  justify-between items-center
    '>

          <div className='w-[50%] flex  justify-between   items-center   '>

    
        
                <div className='   mx-[50px] text-xl font-bold text-slate-600  '   > Total </div>

        </div>


        <div  className='w-[48%] flex  justify-between   items-center  '  >

              <div  className=' w-[50%]text-xl tracking-wide font-bold text-slate-600 '> $ 25.00 </div> 


              
        </div>


  </div>


          <div className=' h-[100px]  w-[100%]  flex  justify-center items-center ' >

              <button className=' md:px-[60px] py-[20px] text-2xl font-bold text-white bg-red-400 rounded-lg border-2 border-slate-400   shadow-md hover:shadow-xl shadow-black hover:scale-105 mx-[10px] my-[10px] '   >  Proceed To Checkout</button>

          </div>





  


    </div>

</div>




                  
                </div> 

    </>

  )
}

let ContactUs = () => {
  // const a= useContext(NoteContext);
  console.log( ' contact us')
  return (
    <div>

        <div className=' min-h-[700px]  w-[95%] flex flex-wrap justify-center items-center  '>
              <div className=' min-w-[150px] border-2 border-slate-700  ml-[50px]  '>
                  <h1 className=' text-5xl font-bold text-slate-600 tracking-widest mb-[30px] selection:bg-red-400 '>  Say Hello.</h1>

                  <p className=' text-xl tracking-wide text-slate-500 selection:bg-red-400  mb-[50px] pr-[50px] '  > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>

                  <div  className=' h-0 w-[200px] border-t-[7px] border-red-400 ' > </div>

                  <div>
                      <p   className=' text-xl tracking-wide text-slate-500 selection:bg-red-400 flex  items-center  mt-[50px]  '   >   <span className=' mr-[20px] text-3xl text-red-400    '  > <ImAddressBook /> </span> <span > 212 7th St SE, Washington, DC 20003, USA   </span>  </p>
                  </div>

                  <div   >
                      <p  className=' text-xl tracking-wide text-slate-500 selection:bg-red-400 flex items-center  mt-[25px]  ' >   <span className=' mr-[20px] text-3xl text-red-400   '  > <ImMail4 /> </span> <span > rahulkandwal707@gmail.com  </span>  </p>
                  </div>

                  <div   >
                      <p  className=' text-xl tracking-wide text-slate-500 selection:bg-red-400 flex  mt-[25px]  '  >   <span className=' mr-[20px] text-3xl text-red-400   '  > <AiOutlinePhone /> </span> <span > 8006073332  </span>  </p>
                  </div>
              </div>

              <div className='  border-2 border-slate-4=00  ml-[50px]   px-[30px]  rounded-lg shadow-lg shadow-black   '>

                  <p className=' text-2xl font-bold text-slate-700 my-[60px] ml-[40px] '> Ask Your Queries </p>

                  <input className='border-2 border-slate-400 bg-slate-100  text-slate-500 text-xl min-w-[400px] pl-[30px] py-[20px]   ' type='text'  placeholder=' Your Email  ' />
                  <h1>my name  </h1>




              </div>

        </div>

    </div>
  )
}

const AboutUs = memo(About);
const Contact = memo(ContactUs);

const Cart = memo(CartPage);

export default memo( Loading);


export {AboutUs , Contact , Cart}