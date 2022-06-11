import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
    let locationVal=useLocation();
   let [userInput,setUserInput]=useState('');
   const AuthValue=useAuth();
   const navigate=useNavigate();

   const redirectPath=locationVal.state?.path||'/'
   const LoginClickhandler =()=>{
    AuthValue.Login(userInput);
    //replace true helps not user to goback to prev page that is login again
    navigate(redirectPath,{replace:true})
   }
  return (
    <div>
        <input type='text' value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
        <button onClick={LoginClickhandler}>Login</button>
    </div>
  )
}

export default Login