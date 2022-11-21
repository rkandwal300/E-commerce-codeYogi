import React from 'react'

const Input1 = ({ name, type ,value,  label , id , className , ...rest }) => {
  return (
    <div>

        
   <div>
   <label htmlFor= {label}  className=' sr-only' >
   {label}
</label>

   
<input  
    className= {' border-[3px] border-slate-400 rounded-lg text-2xl   px-[20px] py-[10px] text-black hover:border-indigo-400 hover:outline-indigo-400  focus:outline-indigo-400  mb-[20px] ' +" " + className    }     
        id={id}
        type={type}
        name ={name}
        {...rest}

        />




       
{/* { touched && error && <div className=' text-xl text-red-600  ' > {error}</div>} */}



   </div>


    </div>
  )
}

export default Input1