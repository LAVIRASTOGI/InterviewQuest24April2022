import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    //now useNavigate is used to programiticaly navigate to othe rurl
    //use navigate we can either pass the path ('/orderSummary') or pass number -1 to go back
    // here navigate('/ordersummary' ,{replace true})  // this will replace the history and back will not work
    let navigate=useNavigate()
  return (
      <>
       <div>OrderSummary</div>
       {/* go back to previous page */}
       <button onClick={()=>navigate(-1)}>GoBack</button>
      </>
   
  )
}

export default OrderSummary