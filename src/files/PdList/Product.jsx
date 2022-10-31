import React from 'react';
import { AiFillStar ,AiOutlineStar  } from "react-icons/ai";

import { Link } from 'react-router-dom';




function Product(data) {

  return (


    <>

<Link to={'/products/' + data.id}>
      <div className="m-[30px] rounded-2xl shadow-md  shadow-slate-400 hover:bg-slate-100 p-[20px] cursor-pointer  w-[350px]">

        <div className="w-[300px] h-[250px]  bg-center overflow-hidden flex bg-contain " >
          <img className=" w-full  object-cover" src={data.thumbnail}  alt={data.thumbnail}  width='100%' />
        </div>

        <div className="text-m mt-[15px] font-semibold text-black " >  {data.title}
        </div>
        <div className="text-xl mt-[5px] font-bold text-gray-500 "> {data.category} </div>

        <div className='flex justify-between w-[150px] text-lg mt-[10px] ml-[0px]   text-red-500 '>

        <AiFillStar />  <AiFillStar />  <AiFillStar />
        <AiOutlineStar />   <AiOutlineStar />

        </div>
        <div className=" text-lg mt-[7px] font-bold text-gray-900 " > $ {data.price}</div>


        
        {/* <Link className="px-[5px] ml-[190px] py-[10px] rounded-xl bg-red-200" to={"/products/" + id} > View Detail</Link> */}




      </div>

</Link>


    </>

  );



}

export default Product;




