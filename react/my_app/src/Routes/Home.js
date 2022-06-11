import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext';

function Home() {
    let navigate=useNavigate();
    let userName=useAuth()
  return (
      <>
        <div>Home {userName?.user}</div>
        <button onClick={()=>navigate('/OrderSummary')}>Go to OrderSummary</button>
      </>
  

  )
}

export default Home