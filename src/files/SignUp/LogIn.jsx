import { Formik,Form ,     useFormik, withFormik } from 'formik';
import Input from './Input';
import React  from 'react'
import * as yup from 'yup'
import Input1 from '../../individual_tags/Input';


const callLoginApi  = (values)=>{
    event.preventDefault();      
    console.log (' email value  is',values.email);
    console.log(' password value is',values.password);
}

const schema = yup.object().shape({
email : yup.string().email().required("reiquired"),
password : yup.string().min(8,"enter atleast 8 characters on password") .required(),
});



const  initialValues={

        email:'',
        password:'',
        };





export function LogIn(  handleSubmit , 
                        values ,
                        touched , 
                        errors , 
                        handleBlur , 
                        handleChange
                        ){

                            console.log (" data in props = " , handleSubmit , 
                            values ,
                            touched , 
                            errors , 
                            handleBlur , 
                            handleChange)


    return (



        <div className='h-screen  w-full bg-white flex justify-center items-center    '>


        <form onSubmit={handleSubmit}  className='flex flex-col  w-[500px] h-[500px]  bg-white  rounded-lg py-5 shadow-xl shadow-slate-500  justify-start items-center '
                >

                <h1  className=' my-[20px] text-3xl font-serif font-bold tracking-wider text-slate-600   ' >Log In Page </h1>

                {/* <Input1
                        value= {values.email}
                        onChange={handleChange}
                        // touched={touched.email}
                        // error={errors.email}
                        onBlur = {handleBlur}
                    label ="email Address "
                        id='emailId' 
                        name = 'email'  
                        type='email' 
                        required 
                        className='rounded-b-none  '
                        placeholder = 'enter email ' 
                        autoComplete = " email"
                 /> */}


                    <Input
                        label ="email Address "
                        id='emailID' 
                        name = 'email'  
                        type='email' 
                        required 
                        className='rounded-b-none  '
                        placeholder = 'enter email ' 
                        autoComplete = " email"
                        value= {values.email}
                        onChange={handleChange}
                        touched={touched.email}
                        error={errors.email}
                        onBlur = {handleBlur }

                        />


                <Input  label = "password" 
                        name =  'password'   
                        type= 'password'
                        id= 'passwordId'  
                        placeholder =  'enter password'    
                        autoComplete =  " password" 
                        className= 'rounded-t-none  ml-[10px] '
                        required  
                        value= {values.password}
                        onChange={handleChange}
                        touched={touched.password}
                        error={errors.password}
                        onBlur = {handleBlur}

                        />





                <button  type='submit'     className='bg-indigo-500 text-white   text-2xl font-bold mt-5 px-[20px] py-[10px] rounded-lg shadow-md shadow-slate-500 hover:scale-110  disabled:bg-indigo-200    '   > Log In</button>


                </form>




    </div>
  )
}


const myHoc = withFormik({validationSchema: schema , initialValues: initialValues , onSubmit: callLoginApi })

const EasyLogIn= myHoc(LogIn);

export default EasyLogIn; 