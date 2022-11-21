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

export let   useFieldInput= ({  type ,  label , id , className , ...rest })=>{

 const [data , meta ,helpers] = useField (type);
 

 
const  {  name ,value , onBlur , onChange } = data ;
const { error , touched } = meta ;

 let errorClass= '';

    if(error  && touched ){
    const  errorClass ='border-red-500'
}
    
  return (
    <div>
    <label htmlFor= {label}  className=' sr-only' >
    {label}
</label>

    
    <input  
    className= {' border-[3px] border-slate-400 rounded-lg text-2xl   px-[20px] py-[10px] text-black hover:border-indigo-400 hover:outline-indigo-400  focus:outline-indigo-400  mb-[20px] ' +" " + className  + " " + errorClass  }     
   
        id={id}
        onChange ={onChange}
        type={type}
        onBlur={onBlur}   
        value = {value}
        name ={name}
        {...rest}
        // placeholder={placeholder}
        // autoComplete = {autocomplete}

        />



        
{ touched && error && <div className=' text-xl text-red-600  ' > {error}</div>}



    </div>

  )
}
let Input =({  type ,  label , id , className , touched , error , ...rest }) =>{

  
 let errorClass= '';

 if(error  && touched ){
 const  errorClass ='border-red-500'
}

  return (


    <div>
    <label htmlFor= {label}  className=' sr-only' >
    {label}
</label>

    
    <input  
    className= {' border-[3px] border-slate-400 rounded-lg text-2xl   px-[20px] py-[10px] text-black hover:border-indigo-400 hover:outline-indigo-400  focus:outline-indigo-400  mb-[20px] ' +" " + className  + " " + errorClass  }     
   
        id={id}
        onChange ={onChange}
        type={type}
        onBlur={onBlur}   
        value = {value}
        name ={name}
        {...rest}
        // placeholder={placeholder}
        // autoComplete = {autocomplete}

        />



        
{ touched && error && <div className=' text-xl text-red-600  ' > {error}</div>}



    </div>



  )
}


export default Input