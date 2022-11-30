import { useField } from 'formik';
import React from 'react'

// label ="email Address "
// id='emailId' 
// name = 'email'  
// type='email' 
// required 
// className='rounded-b-none  '
// placeholder = 'enter email ' 
// autoComplete = " email"


const Input = ({    type,
  label,
  id ,
  className ,
  placeholder ,

  ...rest
  }) => {


    
    return(


  <div>
    <label htmlFor={id} className=' sr-only'>
      {label}
    </label>


    <input
      className={' border-2 border-slate-400 rounded-lg text-2xl   px-[20px] py-[10px] text-black hover:border-indigo-400 hover:outline-indigo-400  focus:outline-indigo-400  mb-[20px] ' + " " + className + " "}

      id={id}

      type={type}

      placeholder={placeholder}
    
      {...rest} 

      />



    {/* { touched && error && <div className=' text-xl text-red-600  ' > {error}</div>} */}



  </div>



)

  }
export default Input