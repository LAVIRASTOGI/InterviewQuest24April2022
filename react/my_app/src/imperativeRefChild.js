import React, { forwardRef, useImperativeHandle, useState } from 'react'

function ImperativeRefChild(props,ref) {
   const [counter ,setCounter]=useState(0);
   
   useImperativeHandle(
     ref,
     () => ({
      incrementHandler(param){
        console.log('hi child' +param)
        setCounter(counter+1)
      },
      name:'lavi'
     }),
    
   )
  return (
    <div>imperativeRefChild {counter}</div>
  )
}

export default forwardRef(ImperativeRefChild)