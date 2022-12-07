import axios from 'axios';
import { useFormik } from 'formik';
import Input  from './Input'
import React, { useContext }  from 'react'
import { Link, Navigate } from 'react-router-dom';
import * as yup from 'yup'
import Input1 from '../../individual_tags/Input';
import { UserContext } from '../../Api/UserContext';
import Alert from './alert';
import { AlertContext } from '../../Api/AlertContext';

const LogIn2 = () => {

    
    
    const   {user , setUser} = useContext(UserContext);
    const { alert ,setalert} = useContext(AlertContext);

    const handleLogin =(values)=>{
        event.preventDefault();
        
        axios.post("https://myeasykart.codeyogi.io/login",{
            email:values.email,
            password:values.password,
        } ).then((response) => { console.log(' log in response = ',response.data);
        const {user , token } = response.data ;
        setUser( user)
        localStorage.setItem('logIn_Token',token);
        })
        .catch((e) => {  console.log("Invalid Credentials ",e.message );
        const error = alert ;

        error.message = 'Invalid Credentials  Request failed with status code 404 error';
        error.type = 'error' ;

        error.hidden = false;

        setalert(error);

    });
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
            dirty,
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





<form  className='flex flex-col  w-[500px] h-[500px]  bg-white  rounded-lg pt-5  shadow-xl shadow-slate-500  justify-start items-center '
    onSubmit={handleSubmit}
>
<Alert />
<h1  className=' my-[20px] text-3xl font-serif font-bold tracking-wider text-slate-600   ' >Log In   </h1>

<label htmlFor='email'  className=' sr-only' >
    email address
</label>


        <Input
        type='email' 
        autoComplete='email'
        name='email'  // used by formic
        id='emaill' 
        onBlur={handleBlur}
        value={values.email}  
        onChange={handleChange } 
        placeholder={'enter your email'}
        className  = { 'w-full h-[50px] rounded-full  text-base shadow-md   px-[41px]  '}
        />


{ touched.email && errors.email && <div className=' text-xl text-red-600  ' > {errors.email}</div>}


<label htmlFor='password'  className=' sr-only' >
    password address
</label>

    <Input
    type='password'
    name ='password' // used by formic
    id ='passwordd'
    placeholder='enter password' 
    value={values.password}
    onBlur={handleBlur}
    onChange={handleChange } 
    className  = { 'w-full h-[50px] rounded-full  text-base shadow-md   px-[41px]  '}
        />


{ touched.password  && errors.password && <div className=' text-xl text-red-600  ' > {errors.password}</div>}


<button  type='submit'     className='bg-indigo-500 text-white   text-xl font-semibold my-5 px-5 py-2 rounded-lg shadow-md shadow-slate-500 hover:scale-105  disabled:bg-indigo-200  ml-[26%]   '   disabled={ !dirty ||  !isValid}     > Log In</button>


<button  type='button' onClick={resetForm}     className=' bg-indigo-500  text-white  text-md font-semibold px-6 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 mr-5  ml-[30%] ' > Reset  </button>



<div className='h-[90px] w-[500px] mt-10  mb-0  flex justify-center items-center   bg-red-300 rounded-tl-[60%] text-white relative top-3 rounded-b-lg  '> 
            
            <span className=' mr-2'>  If you don't have an Account ?  </span> 
            <Link to="/signup" >

            <span className=' text-xl font-semibold text-indigo-400 hover:underline '>  SignUp  </span> </Link>

            </div>



</form>


    </div>
)
}

export default LogIn2