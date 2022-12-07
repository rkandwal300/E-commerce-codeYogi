import React, { useContext, useState } from 'react';
import { BsBag , BsCartCheck } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

import { Routes, Route, Link, useParams } from "react-router-dom";
import { cartListContext } from '../Api/CartContext';
import { UserContext } from '../Api/UserContext';

let Header=()=>{

        const {user , LogOut ,  isLoggedIn} = useContext(UserContext);
        const {CartCount , setUserData } = useContext(cartListContext)

        setUserData(user);



    let m=0;
    let bar = document.getElementById('menu1');
    let navv = document.getElementById('navv');
    let head = document.getElementById('head');

    let menu=()=>{
        let bar = document.getElementById('menu1');
    let navv = document.getElementById('navv');
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
        <header   id='head' className=' h-[50px] w-full flex   justify-between lg:justify-evenly items-center  bg-white shadow-md    transition-all duration-200  ease-in '> 
        
        <Link to='/' className='w-[100px] ml-[50px] mr-[40px]   '  >  <img src='https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg' width='100%'  /></Link> 

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



{ user ? (
    
    <li className='lg:p-0 p-[10px]   pl-[20px]   lg:border-0 border-t-[1px]  hover:cursor-pointer hover:text-red-500   border-slate-300    '  onClick={LogOut}  > Log out </li>
        ):(
            
            <Link  to= "/LogIn" > 
            <li className='lg:p-0 p-[10px]   pl-[20px]   lg:border-0 border-t-[1px]  hover:cursor-pointer hover:text-red-500   border-slate-300    ' > Log in </li>
            </Link>
        
        )

}
        </nav>


        <Link  to="/products/Cart">
            <div className='  cursor-pointer  relative left-16 flex  justify-center items-center   hover:text-red-400 ml-[100px] mb-5  '>
                
                    <div className='flex flex-col justify-center  items-center      '>
                            <div className=' rotate-180 relative top-3 text-lg text-red-500 font-semibold  rounded-full relz '> U</div>

                            <div className=  'text-red-500 font-semibold  hover:text-black hover:bg-red-500   px-1 py-0 border-[3px] rounded-sm cart border-red-500  text-sm        '     > {CartCount} </div>
                    </div>

                    {/* <span className='text-lg text-slate-600 font-semibold mt-5 ml-2   ' > Cart </span> */}


            </div> 


            
            </Link>


    <div className=' w-[100px]'  > </div>
        <div id='menu1' className=' text-xl text-white  font-extrabold    hover:cursor-pointer rounded-sm shadow-lg bg-red-500  p-[8px]   lg:hidden ' onClick={menu}   > <HiMenu /> </div>

        </div>
        
        </header>

        </>
    )
}

export default Header;