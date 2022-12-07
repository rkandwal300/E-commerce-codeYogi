import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import App from '../App';
import ProductListPage from '../files/PdList/ProductListPage';


export  const UserContext = createContext();

const UserState = (props) => {

    const [ user , setUser ] = useState(); 

    const [loadingUser , setLoadingUser ] = useState(true);

    const token  = localStorage.getItem('logIn_Token')    

    useEffect(()=>{
    if(token){
    axios.get("https://myeasykart.codeyogi.io/me",{
        headers : {
        Authorization : token,
        },
    } )
    .then((response)=>{
        setUser(response.data);
        setLoadingUser(false);
    }).catch((e=>{
        localStorage.removeItem('logIn_Token');
        setLoadingUser(false);
    }))
    }
    else{
    setLoadingUser(false);
        }
    },[])





    
    const LogOut=()=>{
        localStorage.removeItem("logIn_Token");
        setUser(undefined);


    }




return (
    <>
    <UserContext.Provider value = { { isLoggedIn : !!token , user , setUser , LogOut} }  >
    {props.children}
        </UserContext.Provider>
    </>
)
}

export default UserState