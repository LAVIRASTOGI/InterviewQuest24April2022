//HOC Component

import React, { useState } from 'react'

const HOCExample = (WrappedComponent,privateCount) => {
      function HOCExample (props){
        let [count, setCount] = useState(0);
        let ClickHandler = () => {
            setCount(count + privateCount);
        }
          return(
              <WrappedComponent count={count} ClickHandler={ClickHandler} {...props} ></WrappedComponent>
          )
      }
      return HOCExample
  
}

export default HOCExample