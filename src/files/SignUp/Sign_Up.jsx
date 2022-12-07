import Input  from './Input'
import React, { useContext, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { UserContext } from '../../Api/UserContext';

const SignUp = () => {

    const  {user , setUser } = useContext(UserContext);



const handleSignUp =(values)=>{
    console.log(' form submitted =', values);
    console.log(' Name submitted =', values.fullName);
    console.log(' email submitted =', values.email);
    console.log(' Password submitted =', values)
    console.log(' Confirm Password   submitted =', values)

    axios.post('https://myeasykart.codeyogi.io/signup',{
        fullName:values.fullName,
        email:values.email,
        password:values.password,
        ConfirmPassword : values.ConfirmPassword,
    }).then((response)=>{
        console.log( 'sign up response ', response.data);
        const {user , token } = response.data ;
        setUser( user)
        localStorage.setItem('logIn_Token',token);
        
    }).catch ((e)=>{
        console.log(' error filed signup = ',e.request.response);
        console.log(' error message signup = ',e.message);
        console.log(' error  signup = ',e);
    })
}


    const schema = yup.object().shape({
        fullName :yup.string().required("'Name  is required") ,
        email : yup.string().email().required('email is required'),
        password : yup.string().min(8,'password too short - must b 8 chars minimum').required('Password is required'),
        ConfirmPassword :  yup.string() .oneOf([yup.ref('password'), null], 'Passwords must match').required('confirm your password'),
    });
    
    

    
    const { handleSubmit ,
        values ,  
        handleChange ,
        errors ,
        handleBlur,
        touched,
        isValid ,
        dirty,
        } = useFormik({
            initialValues:{
                            fullName:'',
                            email:'',
                            password:'',
                            ConfirmPassword : ''
                        },
            onSubmit :handleSignUp,
            validationSchema :schema,
            validateOnMount : true
            
});

if(!user){

    return (
    <div >


        <div className=' h-screen w-full  flex justify-center items-center     '>


            <div className=' h-fit w-[500px] pt-7 bg-white flex flex-col px-10   rounded-lg shadow-xl  shadow-slate-300 mb-14 '>
            

            <span className=' text-2xl font-semibold text-slate-600 '> Sign Up</span>

            <form  onSubmit={handleSubmit}>

            <span className=' text-sm font-semibold  relative top-[10px] left-10 bg-white w-fit px-1  text-slate-500'  >Full Name  </span>

            <Input
            type = {'text'}
            name = {'fullName'}
            label = {' enter Full Name'} 
            id = {'FullName'} 
            placeholder={'enter your name'}
            value={values.fullName}
            onBlur={handleBlur}
            onChange={handleChange } 
            className  = { 'w-full h-[50px] rounded-full  text-base shadow-md  px-[41px]   '}
            />
            
            { touched.fullName  && errors.fullName && <div className=' text-xl text-red-600  ' > {errors.fullName}</div>}


            <span className=' text-sm font-semibold  relative top-[10px] left-10 bg-white w-fit px-1  text-slate-500'   > Enter your email :- </span>

            <Input
            type='email' 
        autoComplete='email'
        name='email'  // used by formic
        id='email' 
        onBlur={handleBlur}
        value={values.email}  
        onChange={handleChange } 
        placeholder={'enter your email'}
            label = {' enter email'} 
            className  = { 'w-full h-[50px] rounded-full  text-base shadow-md   px-[41px]  '}
            />

            { touched.email  && errors.email && <div className=' text-xl text-red-600  ' > {errors.email}</div>}

            <span className=' text-sm font-semibold  relative top-[10px] left-10 bg-white w-fit px-1  text-slate-500'   > Password </span>

            <Input
            type = {'password'}
            label = {' enter password'} 
            id = {'password'} 
            name={'password'}
            placeholder={'Password'}
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange } 
            
            className  = { 'w-full h-[50px] rounded-full  text-base shadow-md  px-[41px]  '}
            />
            { touched.password  && errors.password && <div className=' text-xl text-red-600  ' > {errors.password}</div>}

            <span className=' text-sm font-semibold  relative top-[10px] left-10 bg-white w-fit px-1  text-slate-500'   > Confirm Password </span>

            <Input
            type = {'password'}
            label = {' Confirm Your password'} 
            id = {'Confirm_password'} 
            name={'ConfirmPassword'}
            placeholder={'ConFirm Password'}
            value={values.ConfirmPassword}
            onBlur={handleBlur}
            onChange={handleChange } 
            className  = { 'w-full h-[50px] rounded-full  text-base shadow-md  px-[41px]  '}
            />
            
            { touched.ConfirmPassword  && errors.ConfirmPassword && <div className=' text-xl text-red-600  ' > {errors.ConfirmPassword}</div>}

            <button type='submit'    disabled={ !dirty ||  !isValid}    className=' bg-indigo-500 text-white px-5 py-2 text-lg rounded-lg hover:shadow-lg ml-[70%]  '>Submit</button>

        </form>

            <div className='h-[90px] w-[500px] mt-10 left-[-40px] relative flex justify-center items-center   bg-red-300 rounded-tl-[60%] text-white   '> 
            
            <span className=' mr-2'>  Already have an Account ?  </span> 
            <Link to="/LogIn" >
            <span className=' text-xl font-semibold text-indigo-400 hover:underline '>  Log in  </span> </Link>

            </div>


            </div>

        </div>

    </div>
    )
}

else{
    
    return <Navigate to = '/' /> ;

}
}
export default SignUp