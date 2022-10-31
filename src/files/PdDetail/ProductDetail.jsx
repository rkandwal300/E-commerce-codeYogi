import React, { useState,useEffect, useContext, memo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack , BiRightArrowAlt } from "react-icons/bi";
import { AiFillCodeSandboxCircle, AiFillStar,AiOutlineStar } from "react-icons/ai";
import { getSingleProduct } from '../api.js'
import Loading from '../Loading.jsx';
import Error from '../Error.jsx'
import PdDetailImg from './PdDetailImg.jsx';
import { SingleContext } from '../../Api/noteContext.js';
import Stars from './Stars.jsx';
// import allData from './DummyData';

let ProductDetail = ( { onAddToCart }) => {



  const product  = useContext(SingleContext)

  console.log('product api = ', product)
// const data= allData;
const id = +(useParams().id);

let url = id;
console.log('id = ',id)




const [ data , setData] = useState([]);
const [error , setError] = useState(false);

const [ count ,setCount ] = useState(1);


useEffect(() => {

  const p = getSingleProduct(id);
  
 p.then((response)=>{
    // console.log('proo p =',response.data);
    setError(false)
    setData(response.data);
  }).catch(()=>{
    console.log('404 error sale');
    setError(true);
  })
  


  } ,[id])
 

// }, [id])



let index =data.id;
let length = data.length;

let countCart=(event)=>{
  // console.log('cart clicked',event.target.value);
  setCount(+event.target.value);

}


const addCart=()=>{
  console.log('function = ',onAddToCart());
  onAddToCart(id,count);
}



  //terniary operater if product is true(having data then show prduct dtail page else show loading page);

  
  return (error==true ? <Error /> : (data ?(
    
  <>

         
<div className='h-[50px] w-[94%] ml-[4%] mt-[50px] mb-0  flex justify-start items-end     '>
  <div className='flex justify-start items-center '>
  <Link to={'/'}>
  <div className='text-3xl font-medium font-serif ml-[10px] text-gray-800 hover:text-red-500 '> Home </div> 
  </Link>
  
   <span className='text-2xl'> /</span>


  <Link to={'/'}>
   <span className=' text-2xl font-medium font-serif ml-[10px] text-gray-800 hover:text-red-500 ' >{data.category}</span>  </Link>
    
   <span className='text-2xl'> /</span>

  <Link to={'/'}>
     <span   className=' text-2xl font-medium font-serif ml-[10px] text-gray-800 hover:text-red-500 ' >{data.title}</span> </Link>
   
   </div>

 </div>




    <div className=" ml-[3%] mr-[3%] mt-0  rounded-xl flex 2xl:flex-nowrap shadow-lg shadow-black flex-wrap   h-fit pb-[100px]  mb-[100px] justify-center ">
 

<div  className="  w-[90%] min-w-[45%] h-fit p-[20px] mt-[30px] ml-[5%] "  > 
 {/* <img src={data.thumbnail} />  */}


 <PdDetailImg  props={data.images} />

</div>

 {/* add to cart and buy  */}


                <div className="   w-[90%] min-w-[45%] h-[650px] ml-[5%] flex flex-col justify-center items-center mt-[30px] pr-[20px] ">  

                    <div> 

                        <h1  className="font-medium  font-serif mb-[20px] mt-[20px] text-5xl  tracking-wider borderborder1 "> {data.title} </h1>
               
                         <p  className="mt-[10px] text-3xl font-normal">  {data.description}</p>

                       <div className=' h-fit w-fit flex justify-center items-center bg-green-500 text-2xl  font-bold text-white px-[10px] py-[5px] rounded-xl my-[20px] border-1  '> <span > {data.rating} </span> 
                       <span  className='ml-[10px]  ' > <AiFillStar /> </span>
                         </div>    {/*  ratings */}

                         {/* <div >  <Stars props = {data.rating}  /> </div> */}
                    

                <div className=' mb-[20px]'>
                
                 <span className="font-medium text-green-700  mb-[50px] text-4xl">  Extra
                 <span> ₹ {data.discountPercentage} off </span>    </span>
                </div>


                    <span className="font-medium  mb-[50px] text-7xl">  ₹  {data.price} </span>
                   
         

                    </div>
                
                <div className="flex flex-nowrap mt-[50px] ">
                <div className=' flex justify-center items-center mr-[20px] text-2xl font-medium '> Quantity :</div>

                <input id='cartItems' type='number' className=" w-[80px]  py- text-2xl text-center mr-[50px]  border-[3px] border-slate-500 rounded-lg  " placeholder='1' onChange={ countCart} value={count} />

             
                <button  onClick={addCart} className="py-[10px] w-[250px]  h-[60px] mr-[30px] px-[40px] text-slate-50 rounded-xl bg-red-500 text-xl "> ADD TO THE CART</button>


                </div>


                

                <div className='h-[300px]  w-full   mt-[50px] '  > 
                
                
                     
     

    <div className='flex items-center  flex-nowrap  justify-between   '>

<div>
   
    { index >1  &&   (
    
      <Link to={'/products/' + (id-1)} className='flex justify-start items-center text-2xl cursor-pointer  hover:text-red-300'   > 

    <span className='text-5xl' >   <BiArrowBack /> </span>
    <span> Previous Product </span> 

          </Link>)}
        
          </div>




              <Link to={'/products/' + (id+1)} className='flex justify-start items-center text-2xl cursor-pointer  hover:text-red-300'   > 
              <span> Next Product </span>
              
             <span className='text-5xl' >  <BiRightArrowAlt /> </span> 
             
             </Link>
           

            </div>
                
                </div>
        </div>

   </div>

{/* // </div> */}


</>

    ):(<Loading />)
  ))
}

export default memo( ProductDetail);