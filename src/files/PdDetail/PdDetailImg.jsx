import React from 'react'
import { useState } from "react"
import Loading from '../Loading';

const PdDetailImg = ({props}) => {

if( props){
    const pic =props;
    console.log('pic',pic)


  
  const [img, setimg] = useState(pic[0])



let photo=(prop)=>{
    setimg(prop.target.alt);

}
if(!props){
  return (<h1 className='text-5xl   ' > Loading......</h1>);
}

  return (
    <div className='flex  justify-center items-center  2xl:flex-row  flex-col  '  >
  
    <div className=' flex 2xl:flex-col  flex-row  justify-center items-center  ' >
  
    {
      pic.map((elem,index)=>{
      
          return (
            <div key = {'key'+ index} className=' h-fit w-[90px] hover:border-[5px] border-slate-400   p-0  m-2  '>

              <img  id={'ab'+index} className='cursor-pointer m-0 hover:shadow-xl shadow-black ' src = {elem} alt={elem}   onMouseEnter={photo} width='98%'  />

            </div>)
        })
    }


      
    </div>

    <div className=' md:h-[300px]  mt-[30px]  md:w-[600px] flex justify-center items-center    '>

        <img className='ml-[30px]  h-full ' src={img} alt='product' height='100%' />
    </div>


    </div>
  )
}
else{
  console.log('loading....')
  return <Loading />
}
}

export default PdDetailImg