import React from 'react'
import { useParams } from 'react-router-dom'

//The useParams hook returns an object of key/value pairs of the dynamic params
// from the current URL that were matched by the <Route path>.
// Child routes inherit all params from their parent routes.

// here is the :UserId 


function Detail() {
  let param=useParams();
  let userid= param.UserId
  return (
    <div>Detail Users {userid}</div>
  )
}

export default Detail