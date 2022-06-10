import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'

function RequiredAuth({children}) {
    let AuthUser=useAuth();
    let location=useLocation();
 
    if(!AuthUser.user){
        return(
            // send the location also to login means if from 
            //profile a user clicks and he is not logged in along with profile location
            //we send application to login page and 
            //as soon as user comes from login page to profile or what location mentioned
           <Navigate to='/login' state={{path:location.pathname}}></Navigate> 
        )
    }else{
        return (children)
    }
}

export default RequiredAuth