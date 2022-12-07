import React, { memo, useContext, useEffect, useMemo, useState } from 'react'
import { AiFillCalculator ,AiOutlinePhone } from 'react-icons/ai';
import { ImCancelCircle ,ImAddressBook ,ImMail4   } from "react-icons/im";

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



export default memo( Loading);


export {AboutUs , Contact }