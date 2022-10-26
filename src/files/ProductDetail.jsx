import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack , BiArrowToRight } from "react-icons/bi";
import { getSingleProduct } from './api.js'
import Loading from './Loading.jsx';
import Error from './Error.jsx'
import PdDetailImg from './PdDetailImg.jsx';
// import allData from './DummyData';

const ProductDetail = () => {

// const data= allData;
const id = +(useParams().id);

let url = id;
console.log('id = ',id)




const [ data , setData] = useState([]);
const [error , setError] = useState(false);



useEffect(() => {
  const p = getSingleProduct(id);
 p.then((response)=>{
    console.log('proo p =',response.data);
    setError(false)
    setData(response.data);
  }).catch(()=>{
    console.log('404 error sale');
    setError(true);
    
  })
 

}, [id])



let index =data.id;
let length = data.length;



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




    <div className=" ml-[3%] mr-[3%] mt-0  h-fit rounded-xl lg:flex lg:flex-nowrap  flex-wrap  ">
 

<div  className="  w-[90%] min-w-[45%] h-fit p-[20px] mt-[30px] ml-[5%] "  > 
 {/* <img src={data.thumbnail} />  */}
 <PdDetailImg props={data.images} />

</div>

 {/* add to cart and buy  */}


                <div className="   w-[90%] min-w-[45%] h-[500px] ml-[5%] flex flex-col justify-center items-center mt-[80px]  ">  

                    <div>

                        <h1  className="font-medium  font-serif mb-[20px] mt-[20px] text-5xl"> {data.title} </h1>
               
                         <p  className="mt-[10px] text-3xl font-normal">  {data.description}</p>
                    

                <div className=' mb-[20px]'>
                <span> Discount :-  </span> 
                 <span className="font-medium text-green-800  mb-[50px] text-4xl">  $  {data.discountPercentage} </span>
                </div>


                    <span className="font-medium text-green-800  mb-[50px] text-4xl"> $  {data.price} </span>
                   
         

                    </div>
                
                <div className="flex flex-nowrap mt-[50px]">

                <div className="h-[50px] w-[50px] pl-[10px]  mr-[30px] mt-[10px] pt-[5px] text-xl  border-[2px] border-black">1
                </div>
                
                <button  className="py-[10px] w-[250px]  h-[60px] mr-[30px] px-[40px] text-slate-50 rounded-xl bg-red-500 text-xl "> ADD TO THE CART</button>
                </div>
        </div>

        <div className='flex  ' >  


       
     

    <div className='flex justify-start items-center '>
    { index >1  &&   ( <div>     <Link to={'/products/' + (id-1)} className='text-5xl ' > <BiArrowBack />
          </Link>

        <span> Back </span> 

        </div>)}
        </div>


 
      <div className='flex justify-start items-center '>

              <Link to={'/products/' + (id+1)} className='text-5xl '   > <BiArrowToRight /></Link>
            <span> after </span>

            </div>
         
 
  </div>

</div>


</>

    ):(<Loading />)
  ))
}

export default ProductDetail