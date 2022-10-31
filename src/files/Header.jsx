import React, { useState } from 'react';
import { BsBag , BsCartCheck } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

import { Routes, Route, Link, useParams } from "react-router-dom";

let Header=({ arr})=>{
 



    let m=0;
    let bar = document.getElementById('menu1');
    let navv = document.getElementById('navv');
    let head = document.getElementById('head');

    let menu=()=>{
           let bar = document.getElementById('menu1');
    let navv = document.getElementById('navv');
        console.log('checked');
        if(m==0){
            navv.style.top='50px';
            head.style.marginBottom='300px';

            m=2;
        }

        else if(m==2){
            navv.style.top='-300px';
            head.style.marginBottom='20px';
            m=0;
        }
    }

    return(
        <>
        <header   id='head' className=' h-[80px] w-full flex   justify-between lg:justify-evenly items-center  bg-white shadow-md    transition-all duration-200  ease-in '> 
        
        <div className='w-[300px] ml-[50px] mr-[40px]   '  >  <img src='https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg'   /></div> 
     
        <div className=' lg:w-[850px] w-[250px]    flex  justify-between items-center mr-[30px] ' >

    

        <nav  id='navv'  className='list-none   lg:flex lg:justify-between  lg:h-[50px]  lg:w-[600]   w-full  transition-all duration-200  ease-in  text-md  font-sans font-[500] lg:sticky absolute    border-[1px] border-slate-300   top-[-300px]  left-0 h-[230px]   lg:border-0 mt-[30px]  ' > 

           <Link  to='/' > <li className= 'lg:p-0 p-[10px]   pl-[20px]   lg:border-0 border-t-[1px]   hover:cursor-pointer hover:text-red-500   border-slate-200   ' > Home </li></Link>


           <Link  to='/' >
            <li className='lg:p-0 p-[10px]   pl-[20px]   lg:border-0 border-t-[1px]  hover:cursor-pointer hover:text-red-500   border-slate-200   ' > All Products </li>
            </Link>

            {/* <li className='lg:p-0 p-[10px]   pl-[20px]   lg:border-0 border-t-[1px]  hover:cursor-pointer hover:text-red-500   border-slate-200   ' > About Us </li> */}


            <Link  to="/Contact_Us" >
            <li className='lg:p-0 p-[10px]    pl-[20px]  lg:border-0 border-t-[1px]   hover:cursor-pointer hover:text-red-500   border-slate-200   ' > Contact Us </li>
            </Link>




            <li className='lg:p-0 p-[10px]   pl-[20px]   lg:border-0 border-t-[1px]  hover:cursor-pointer hover:text-red-500   border-slate-300    ' > Account </li>

         
            
          

            
          
            
         
        </nav>


        <Link  to="/products/Cart">
            <div className='  cursor-pointer  relative  flex    f hover:text-red-400 ml-[100px] '> 

                <span className=' text-xl font-bold text-red-400 absolute left-[-40px] top-[-10px] z-10  '> {arr}</span>

              <span className=' w-[50px]  mb-[30px] absolute  left-[-50px] top-[-10px] z-0 ' >  <img src='https://th.bing.com/th/id/OIP.zaPzoEIaqYob_daizFnrjQHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7' alt='cart' width='100%'  /> </span>  
              <span className='text-xl font-bold    ' > Cart </span>
            </div>
            </Link>


    <div className=' w-[100px]'  > </div>
        <div id='menu1' className=' text-2xl text-white  font-extrabold    hover:cursor-pointer  bg-red-500  p-[8px]   lg:hidden ' onClick={menu}   > <HiMenu /> </div>

        </div>
        
        </header>

        </>
    )
}

export default Header;