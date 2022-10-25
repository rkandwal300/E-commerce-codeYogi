import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack , BiArrowToRight } from "react-icons/bi";
import { getSingleProduct } from './api.js'
import Loading from './Loading.jsx';
// import allData from './DummyData';

const ProductDetail = () => {

// const data= allData;
const id = +(useParams().id);

let url = id;


const [ product ,setProduct] = useState([]);



useEffect(() => {
  let list = getSingleProduct(id);
  setProduct(list);
}, [id])



let index =product.index;
let length = product.length;

let data = product.data;


  //terniary operater if product is true(having data then show prduct dtail page else show loading page);

  
  return ( data ?(
    <div>
  

    <div className=" ml-[3%] mr-[3%] mt-[50px] flex justify-center flex-wrap shadow-2xl sm:flex-col w-[95%] flex-row h-[900px] ">
    

   <Link to={'/'}><div className='flex justify-start items-center '>
     <div className='text-5xl '> <BiArrowBack /></div>
   <span> Back </span>
   </div>
 </Link>

<div  className="max-w-[45%] mt-[50px] ml-[40px] "  > 
 <img src={data.photo} />

</div>


                <div className=" w-[48%] mt-[80px]">  
                  <h1  className="font-medium  mb-[40px] mt-[20px] text-5xl"> {data.title} </h1>
                    <span className="font-medium text-green-800  mb-[50px] text-4xl"> $  {data.Price} </span>
                    <p  className="mt-[40px] font-light">  {data.Detail}</p>
         

                
                <div className="flex flex-nowrap mt-[50px]">

                <div className="h-[50px] w-[50px] pl-[10px]  mr-[30px] mt-[10px] pt-[5px] text-xl  border-[2px] border-black">1
                </div>
                
                <button  className="py-[10px] w-[250px]  h-[60px] mr-[30px] px-[40px] text-slate-50 rounded-xl bg-red-500 text-xl "> ADD TO THE CART</button>
                </div>
        </div>

        <div className='flex' >  


       
     

      { index >0 &&      <div className='flex justify-start items-center '>
        <Link to={'/products/' + (id-1)} className='text-5xl ' > <BiArrowBack />
          </Link>

        <span> Back </span> 

        </div>}


 
 
        { index < (length-1) &&    <div className='flex justify-start items-center '>

              <Link to={'/products/' + (id+1)} className='text-5xl '   > <BiArrowToRight /></Link>
            <span> after </span>

            </div>}
         
 
  </div>

</div>




    </div>):(<Loading />)
  )
}

export default ProductDetail