import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

function Logout() {
    let Authval=useAuth()
    const navigate=useNavigate()
    const logOutHandler=()=>{
        Authval.Logout('');
        navigate('/')
    }
  return (
  <>
  <button onClick={logOutHandler}>Logout</button>
  </>
  )
}

export default Logout