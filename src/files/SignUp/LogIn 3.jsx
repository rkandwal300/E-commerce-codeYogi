import { Formik,Form ,     useFormik } from 'formik';
import Input from './Input';
import React  from 'react'
import * as yup from 'yup'
import Input1 from '../../individual_tags/Input';

let LogIn = () => {

    const handleLogin =()=>{
         event.preventDefault();
         console.log (' email value  is',email.value);
         console.log(' password value is',password.value);
    }

const schema = yup.object().shape({
    email : yup.string().email().required("reiquired"),
    password : yup.string().min(8,"enter atleast 8 characters on password") .required(),
    });


   
 const  initialData={
                email:'',
                password:'',
             }

  return (



        <div className='h-screen  w-full bg-white flex justify-center items-center    '>

    <Formik  
        initialValues={ initialData} 
        onSubmit={handleLogin} 
        validationSchema={ schema}  
        validateOnMount  
    >

        <Form  className='flex flex-col  w-[500px] h-[500px]  bg-white  rounded-lg py-5 shadow-xl shadow-slate-500  justify-start items-center '
                >

                <h1  className=' my-[20px] text-3xl font-serif font-bold tracking-wider text-slate-600   ' >Log In Page </h1>

                <Input1
                    label ="email Address "
                        id='emailId' 
                        name = 'email'  
                        type='email' 
                        required 
                        className='rounded-b-none  '
                        placeholder = 'enter email ' 
                        autoComplete = " email"
                 />


                    <Input
                        label ="email Address "
                        id='emailId' 
                        name = 'email'  
                        type='email' 
                        required 
                        className='rounded-b-none  '
                        placeholder = 'enter email ' 
                        autoComplete = " email"

                        />


                <Input  label = "password" 
                        name =  'password'   
                        type= 'password'
                        id= 'passwordId'  
                        placeholder =  'enter password'    
                        autoComplete =  " password" 
                        className= 'rounded-t-none  ml-[10px] '
                        required  

                        />





                <button  type='submit'     className='bg-indigo-500 text-white   text-2xl font-bold mt-5 px-[20px] py-[10px] rounded-lg shadow-md shadow-slate-500 hover:scale-110  disabled:bg-indigo-200    '   > Log In</button>


                </Form>


    </Formik>



    </div>
  )
}

export default LogIn