import React from 'react'
import { useState } from "react"

const PdDetailImg = ({props = [{url:''}]}) => {
  const pic =[]
  for (let i=0 ;i<props.length ; i++){
    pic[i]= props[i]
  }

  
  const [img, setimg] = useState(pic[0])

    console.log(' img deatail = ',pic[0]);

let photo=(prop)=>{
  let idd =prop.target.id;
    console.log('data pic clicked',idd);
    // document.getElementById('idd').style.background='10px solid red';

    setimg(prop.target.alt);

}

  return (pic ? (
    <div className='flex justify-between '  >
    {/*  */}

    <div >
    {/* <img className='m-[10px]'  src = {pic[4]} alt="product 1"  /> */}
    {
     pic.map((elem,index)=>{
           return (
            <div className=' h-fit w-fit focus:border-[10px] border-yellow-400   m-2 bg-slate-300 '>
            <img  id={'ab'+index} className='m-[10px] cursor-pointer hover:shadow-xl shadow-black ' src = {elem} alt={elem}   onClick={photo} width='160px'  />
           </div>)
        })
    }


      
    </div>

    <div className='h-[500px] w-[500px]'>
        <img className='ml-[30px]' src={img} alt='product' width='100%' />
     </div>


    </div>
  ):(<h1 className='text-5xl   ' > Loading......</h1>))
}

export default PdDetailImg