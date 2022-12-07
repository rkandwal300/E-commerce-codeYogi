import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Api/UserContext';






const AuthRoute = ({children ,children2 }) => {

    
    const { user , setUser} = useContext(UserContext);

    if(user) {
        
        return <Navigate to = '/' /> ;
    }
    else{
        return children   ;
    }


}

export default AuthRoute