import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Api/UserContext';

const UserRoute = ({ children} ) =>{
    

    const { user }  = useContext(UserContext );


    if( user  ){
        return children ;

}
else{
    return <Navigate  to="/LogIn" /> ;


    }


}

export default    UserRoute ;