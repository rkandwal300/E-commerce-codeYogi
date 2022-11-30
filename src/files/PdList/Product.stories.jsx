import React, { useState } from 'react';
import { AiFillStar ,AiOutlineStar  } from "react-icons/ai";
import { ComponentStory , ComponentMeta } from '@storybook/react';
import { Link } from 'react-router-dom';




function Product(data) {

  const [ hover , setHover ] = useState('')
  const [ Border , setBorder ] = useState('')

  const handleHover=(event)=>{

    setHover(' hover:scale-110 ');
    setBorder('shadow-xl');

  }

  const handleOutHover =()=>{
    setHover(' ');
    setBorder(' ');
  }



  return (


    <>

<Link to={'/products/' + data.id}>
      <div 
      className= {"m-[20px] rounded-sm   cursor-pointer  w-[274px] flex flex-col justify-center border-2 border-white  hover:border-slate-50 hover:shadow-xl shadow-slate-600    " + Border}
      onMouseEnter = {handleHover}
      onMouseLeave = {handleOutHover}
      >
      

        <div className=' w-[270px] h-[165px]  flex justify-center items-center  '>
        


        <div className= { "w-[250px] h-[150px] bg-center overflow-hidden flex bg-contain  rounded-t-sm pacity-50 s " + hover }>

          <img className=" w-full  object-cover" src={data.thumbnail}  alt={data.thumbnail} loading ='lazy'  width='100%' />
        </div>
      </div>

        <div className='   px-[10px]   '>

        <div className=' flex flex-wrap justify-between '>

        <div className= {"text-md   mt-[7px] font-semibold text-black     transition ease-in-out delay-150   "+ ' '  }>  {data.title} </div>


        <div className=" text-md mt-[7px] font-semibold text-gray-900 " > &#8377; {data.price}</div>

        </div>

        
      

            <div className='flex justify-between w-[80px] text-sm mt-[5px] ml-[0px]   text-red-500 '>

            <AiFillStar />  <AiFillStar />  <AiFillStar />
            <AiOutlineStar />   <AiOutlineStar />

            </div>


        </div>

              <div className=' relative top-[-195px] left-[110px]  w-[140px]  flex justify-end  items-end     ' > 

        <div className="text-sm mt-[3px] font-medium text-gray h-fit w-fit  px-[10px] py-[5px]  rounded-xl  bg-white flex justify-center items-center " > {data.category} </div>
        </div>

      </div>

</Link>


    </>

  );



}

export default Product;




