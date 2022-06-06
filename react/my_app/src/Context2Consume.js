import React, { useContext } from 'react'
import UserContext from './Context'
import userContext, { UserConsumer } from './Context'

// UserConsumer step -3 need to consume value of contextAPI

//next way to consume the contextAPI value is to use useContext
function Context2Consume() {
     let consmedval=useContext(UserContext)
  return (
      <>
      <UserConsumer>
        {(value)=>{
            return(<div>Hello name {value.name}</div>)
        }

        }
    </UserConsumer>
    <div>{consmedval.arrProvider[0]}</div>
      </>
      
    
  )
}

export default Context2Consume