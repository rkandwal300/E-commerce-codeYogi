import { useFormik } from 'formik';
import React  from 'react'
import * as yup from 'yup'
import Input1 from '../../individual_tags/Input';

const LogIn2 = () => {

    const handleLogin =()=>{
         event.preventDefault();
         console.log (' email value  is',email.value);
         console.log(' password value is',password.value);
    }

const schema = yup.object().shape({
    email : yup.string().email().required(),
    password : yup.string().required(),
});


    const { handleSubmit ,
            values ,  
            handleChange ,
            resetForm ,
            errors ,
            handleBlur,
            touched,
            isValid ,
            dirty
            } = useFormik({
                initialValues:{
                                email:'',
                                password:'',
                              },
                onSubmit :handleLogin,
                validationSchema :schema,
                validateOnMount : true
    });


  return (



        <div className='h-screen  w-full bg-white flex justify-center items-center    '>





<form  className='flex flex-col  w-[500px] h-[500px]  bg-white  rounded-lg py-5 shadow-xl shadow-slate-500  justify-start items-center '
    onSubmit={handleSubmit}
 >

<h1  className=' my-[20px] text-3xl font-serif font-bold tracking-wider text-slate-600   ' >Log In Page  dd   </h1>

<label htmlFor='email'  className=' sr-only' >
    email address
</label>

<Input1 
    autoComplete='email'
name='email'  // used by formic
id='email' 
placeholder='enter Email' 
 value = 'email'
/>


<input  className=' border-[3px] border-slate-400 rounded-lg text-2xl   px-[20px] py-[10px] text-black hover:border-indigo-400 hover:outline-indigo-400  focus:outline-indigo-400  mb-[20px]  ' type='email' 
autoComplete='email'
name='email'  // used by formic
id='email' 
value={values.email}  
onBlur={handleBlur}
placeholder='enter Email' 
onChange={handleChange } />

{ touched.email && errors.email && <div className=' text-xl text-red-600  ' > {errors.email}</div>}


<label htmlFor='password'  className=' sr-only' >
    password address
</label>

<input    className=' border-[3px] border-slate-400 rounded-lg text-2xl   px-[20px] py-[10px] text-black hover:border-indigo-400 hover:outline-indigo-400  focus:outline-indigo-400  mx-[10px] '
type='password'
name ='password' // used by formic
value={values.password}
id ='password'
placeholder='enter password' 
onBlur={handleBlur}
onChange={handleChange }  />

{ touched.password  && errors.password && <div className=' text-xl text-red-600  ' > {errors.password}</div>}


<button  type='button' onClick={resetForm}     className='bg-indigo-500 text-white   text-2xl font-bold mt-5 px-[20px] py-[10px] rounded-lg shadow-md shadow-slate-500 hover:scale-110      ' > Reset  </button>

<button  type='submit'     className='bg-indigo-500 text-white   text-2xl font-bold mt-5 px-[20px] py-[10px] rounded-lg shadow-md shadow-slate-500 hover:scale-110  disabled:bg-indigo-200    '   disabled={ !dirty ||  !isValid}     > Log In</button>


</form>



    </div>
  )
}

export default LogIn2