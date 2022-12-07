import React, { useState,useEffect, useContext, memo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack , BiRightArrowAlt } from "react-icons/bi";
import {  AiFillStar} from "react-icons/ai";
import Loading from '../Loading.jsx';
import Error from '../Error.jsx'
import PdDetailImg from './PdDetailImg.jsx';
import Stars from './Stars.jsx';
import { cartListContext } from '../../Api/CartContext.jsx';
import { AlertContext } from '../../Api/AlertContext.jsx';
import Alert from '../SignUp/alert.jsx';
import { getSingleProduct } from '../../Api/Sort-Search.jsx';


let ProductDetail = ( ) => {
  const {onAddToCart} = useContext(cartListContext);
  const {alert, setalert} = useContext(AlertContext);


  let  id = +(useParams().id);
  

  
  
  
  const [ data , setData] = useState([]);
  const [error , setError] = useState(false);
  
  const [ countInput , setCountInput ] = useState(1);
  const [ count ,setCount ] = useState(countInput);
  
  
  
  
  // console.log(' count input ==  ',countInput )
  
  useEffect(() => { 
      const p = getSingleProduct(id);
    
    p.then((response)=>{
          // console.log('proo p =',response.data);
          setError(false)
    setData(response);
  }).catch(()=>{
    tempAlert.type = 'error';
    tempAlert.message = ' 404 error  product cannot load ';
    tempAlert.hidden = false
    console.log(' alert',tempAlert)
    setalert( tempAlert)
    setError(true);
  })




} ,[id])

let index =data.id;
let length = data.length;

let countCart=(event)=>{

  setCount(+event.target.value);

}
const Next =()=>{  setCountInput(1) }


const addCart=()=>{
  onAddToCart(id,count);

  const  tempAlert = alert ;
  
  tempAlert.type = 'add-cart';
  tempAlert.message = data.title;
  tempAlert.hidden = false
  console.log(' alert',tempAlert)
  setalert( tempAlert)
}



  //terniary operater if product is true(having data then show prduct dtail page else show loading page);

  
  return (error==true ? <Error /> : (data ?(
    
  <>


<div className='h-[50px] w-[94%] ml-[4%] mt-[50px] mb-0  flex justify-start items-end     '>
  <div className='flex justify-start items-center '>
  <Link to={'/'}>
  <div className='text-xl font-medium font-serif ml-[10px] text-gray-800 hover:text-red-500 '> Home </div> 
  </Link>
  
  <span className='text-xl'> /</span>


  <Link to={'/'}>
  <span className=' text-xl font-medium font-serif ml-[10px] text-gray-800 hover:text-red-500 ' >{data.category}</span>  </Link>
    
  <span className='text-xl'> /</span>

  <Link to={'/'}>
    <span   className=' text-xl font-medium font-serif ml-[10px] text-gray-800 hover:text-red-500 ' >{data.title}</span> </Link>
  </div>

  </div>




    <div className=" ml-[3%] mr-[3%] mt-0  rounded-xl flex  flex-col 2xl:flex-nowrap shadow-lg shadow-black flex-wrap  h-fit mb-[100px] justify-center ">

      

      <div className='w-full h-fit'>
      <Alert />
      </div>
      <div className='flex  flex-wrap  justify-center 2xl:flex-nowrap   '>

<div  className="  w-[90%] min-w-[45%]  h-fit p-[20px] mt-[30px] ml-[5%] "  > 


<div className=' md:h-[300px]  mt-[30px]  md:w-[600px] flex justify-center items-center    '>

<img className='ml-[40px]  h-full ' src={data.thumbnail} alt='product' height='100%' />
</div>


</div>

 {/* add to cart and buy  */}


                <div className="   w-[80%] min-w-[45%] h-fit ml-[0%]  py-[3%]flex flex-col justify-center items-center  xl-mt-[1100px] pr-[20px] ">  

                    <div> 

                        <h1  className="font-medium  font-serif mb-[20px] mt-[30px] text-3xl  tracking-wider  "> {data.title} </h1>

                        <p  className="mt-[10px] text-lg font-normal font-serif">  {data.description}</p>

                        <div className=' h-fit w-fit flex justify-center items-center bg-green-500 text-xl  font-bold text-white px-[10px] py-[5px] rounded-xl my-[20px] border-1  '> <span > {data.rating} </span> 
                        <span  className='ml-[10px]  ' > <AiFillStar /> </span>
                         </div>    {/*  ratings */}


                <div className=' mb-[20px]'>
                
                <span className="font-medium text-green-700  mb-[50px] text-xl">  Extra
                <span> ₹ {data.discountPercentage} off </span>    </span>
                </div>


                    <span className="  mb-[50px] text-2xl font-semibold ">  ₹  {data.price} </span>



                    </div>
                
                <div className="flex mt-[50px] flex-wrap ">
                <div className=' flex justify-center items-center mr-[20px] text-xl font-medium '> Quantity :</div>

                <input id='cartItems' type='number' className=" w-[50px] h-[50px]  text-xl text-center mr-[50px] mt-1 border-[3px] border-slate-500 rounded-lg  " placeholder='1' value={count}  onChange={countCart}  />


                <button  onClick={addCart} className="py-[10px] w-[250px]  h-[60px] mr-[30px] px-[40px] text-slate-50 rounded-xl bg-red-500 text-xl mt-8 lg-mt-0 "> ADD TO THE CART</button>


                </div>


                

                <div className='h-[300px]  w-full  lg-mb-0 mb-36   lg-mr-10 mt-[50px] '  > 
                


    <div className='flex items-center  flex-nowrap  justify-between   '>

<div className=''>
  
    { index >1  &&   (
    
      <Link to={'/products/' + (id-1)} className='flex justify-start items-center text-xl cursor-pointer  hover:text-red-300'  onClick={Next}    > 

    <span className='text-3xl' >   <BiArrowBack /> </span>
    <span> Previous Product </span> 

          </Link>)}
        
          </div>




              <Link to={'/products/' + (id+1)} className='flex justify-start items-center text-xl cursor-pointer  hover:text-red-300'  onClick={Next}    > 
              <span> Next Product </span>
              
              <span className='text-3xl' >  <BiRightArrowAlt /> </span> 

              </Link>


            </div>
                
                </div>
        </div>
        </div>

  </div>

{/* // </div> */}


</>

    ):(<Loading />)
  ))
}

export default  ProductDetail;