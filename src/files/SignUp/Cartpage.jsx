import React, { useEffect, useState } from 'react'
import { AiFillCalculator, AiOutlinePhone } from 'react-icons/ai';
import { ImCancelCircle, ImAddressBook, ImMail4 } from "react-icons/im";
import { getSingleProduct } from "../../api.js";

const CartPage = ({ data }) =>{ {



    const [cartData, setCartData] = useState([]);

    console.log(' props ==', data)

    const keyCart = Object.keys(data);
    const cartValue = Object.values(data);

    useEffect(
        () => {

        let PromiseCart = keyCart.map((item , index) =>{ 
            item=+item;
             getSingleProduct(item);

        })

    let newCart = Promise.all(PromiseCart)
    newCart.then((response)=>{

      console.log('cart response =',response);

      let valArr =[];

        response.map((val)=>{
             valArr.push(val.data);
                console.log(' val array =',valArr);
                setCartData([...valArr ])
              
        })


    }).catch(()=>{
        console.log(' error bc')
    })
}
, [])
    console.log(' cart array = ', cartData);


// console.log(' cart vLUe = ', cartValue)


return (
    <>


        <div className=' h-[100vh] w-[100%]  bg-slate-100 flex justify-center items-center  '>

            <div className=' h-[1100px] w-[95%] rounded-lg shadow-lg bg-white   flex justify-start  flex-col   ' >

                <div className='w-[80%]  ml-[10%] rounded-lg shadow-lg mt-[100px]  border-2 shadow-lg: border-slate-300    p-0 '   >

                    <div className=' bg-slate-100  w-[100%] rounded-t-lg h-[70px]  flex  '>


                        <div className='w-[48%] flex justify-center items-center text-xl font-semibold  text-slate-500 ' > Product</div>
                        <div className='w-[17%] flex justify-center items-center text-xl font-semibold  text-slate-500 ' > Price</div>
                        <div className='w-[17%] flex justify-center items-center text-xl font-semibold  text-slate-500 '   > Quantity </div>
                        <div className='w-[17%] flex justify-center items-center text-xl font-semibold  text-slate-500  ml-[50px] '   > Subtotal</div>

                    </div>

 {/* products of carts */}
                    <div className=' h-[160px]  w-[100%]   border-y-2 border-slate-300  flex  justify-between items-center '>
                        <div className='w-[50%] flex  justify-between   items-center'>

                            <div className='w-[50%] flex  justify-between items-center '>

                                <div className='   mx-[20px] text-4xl font-bold text-slate-400  '   > <ImCancelCircle /> </div>

                                <div className=' h-[120px] w-[120px] '>
                                    <img src='https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg ' alt='product_cart' width='100%' />
                                </div>
                            </div>

                            <div className=' mr-[15px] text-2xl tracking-wide font-bold text-red-400  hidden md:block '> BlackCoffee mugs</div>

                        </div>


                        <div className='w-[48%] flex  justify-between   items-center  '  >

                            <div className=' ml-[25px] text-2xl tracking-wide font-bold text-slate-500 '> $ 25.00 </div>

                            <input className='  border-2 border-black  w-[80px] text-2xl text-center font-semibold text-slate-700 ' type='number' value='1' />

                            <div className=' mr-[100px] text-2xl tracking-wide font-bold text-slate-500 ' > $ 30.00</div>
                        </div>

                    </div>


                    <div className=' h-[160px]  w-[100%]   border-y-2 border-slate-300  flex  justify-between items-center '>
                        <div className='w-[50%] flex  justify-between   items-center'>

                            <div className='w-[50%] flex  justify-between items-center '>

                                <div className='   mx-[20px] text-4xl font-bold text-slate-400  '   > <ImCancelCircle /> </div>

                                <div className=' h-[120px] w-[120px] '>
                                    <img src='https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg ' alt='product_cart' width='100%' />
                                </div>
                            </div>

                            <div className=' mr-[15px] text-2xl tracking-wide font-bold text-red-400   '> BlackCoffee mug </div>

                        </div>


                        <div className='w-[48%] flex  justify-between   items-center  '  >

                            <div className=' ml-[25px] text-2xl tracking-wide font-bold text-slate-500 '> $ 25.00 </div>

                            <input className='  border-2 border-black  w-[80px] text-2xl text-center font-semibold text-slate-700 ' type='number' value='1' />

                            <div className=' mr-[100px] text-2xl tracking-wide font-bold text-slate-500 ' > $ 30.00</div>
                        </div>

                    </div>


                    {/* button  apply cupoon  */}
                    <div className=' flex justify-between flex-wrap items center pl-[60px] py-[20px] w-[100%]  '>

                        <div className='  flex justify-between items center   '>

                            <input id='coupon' className='h-[55px] w-[250px]  bg-white  border-[3px] shadow-xl rounded-lg border-slate-400  text-center text-xl  ' placeholder='Coupon Code' />


                            <button className=' px-[50px]  py-[10px]   flex justify-center items-center text-xl font-semibold text-white bg-red-400  border-[3px] shadow-xl border-slate-400 rounded-lg  cursor-pointer    hover:bg-green-400  hover:shadow-2xl  ml-[50px] '> Apply Coupon </button>




                        </div>


                        <button className=' px-[50px]  py-[10px]   flex justify-center items-center text-xl font-semibold text-white bg-red-200   border-[3px] shadow-xl border-slate-400   rounded-lg  cursor-pointer    hover:bg-green-400  hover:shadow-2xl mr-[80px]  '> Update Cart </button>

                    </div>


                </div>



                {/* total and subtotal   */}


                <div className='w-[40%]  lg:ml-[50%] md:ml-[30%] ml-[20%] rounded-lg shadow-lg mt-[100px]  border-2 shadow-lg: border-slate-300    p-0 '   >

                    {/* Header */}
                    <div className=' bg-slate-100  w-[100%] rounded-t-lg h-[70px]  flex  pl-[10%] '>


                        <div className='w-[48%] flex justify-start items-center text-2xl font-bold  text-slate-600 ' > Cart Totals </div>

                    </div>


                    <div className=' h-[80px]  w-[100%]   border-y-2 border-slate-300  flex  justify-between items-center '>

                        <div className='w-[50%] flex  justify-between   items-center   '>



                            <div className='   mx-[50px] text-xl font-bold text-slate-600  '   >Sub-Total </div>

                        </div>


                        <div className='w-[48%] flex  justify-between   items-center  '  >

                            <div className=' w-[50%]text-xl tracking-wide font-bold text-slate-600 '> $ 25.00 </div>


                        </div>

                    </div>

                    <div className=' h-[80px]  w-[100%]   border-y-2 border-slate-300  flex  justify-between items-center
      '>

                        <div className='w-[50%] flex  justify-between   items-center   '>



                            <div className='   mx-[50px] text-xl font-bold text-slate-600  '   > Total </div>

                        </div>


                        <div className='w-[48%] flex  justify-between   items-center  '  >

                            <div className=' w-[50%]text-xl tracking-wide font-bold text-slate-600 '> $ 25.00 </div>



                        </div>


                    </div>


                    <div className=' h-[100px]  w-[100%]  flex  justify-center items-center ' >

                        <button className=' md:px-[60px] py-[20px] text-2xl font-bold text-white bg-red-400 rounded-lg border-2 border-slate-400   shadow-md hover:shadow-xl shadow-black hover:scale-105 mx-[10px] my-[10px] '   >  Proceed To Checkout</button>

                    </div>








                </div>

 





        </div>

    </>

)
}

export default CartPage;