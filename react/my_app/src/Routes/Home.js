import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate=useNavigate()
  return (
      <>
        <div>Home</div>
        <button onClick={()=>navigate('/OrderSummary')}>Go to OrderSummary</button>
      </>
  

  )
}

export default Home