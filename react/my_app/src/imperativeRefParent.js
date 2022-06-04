import React, { useRef, useState } from 'react'
import ImperativeRefChild from './imperativeRefChild'

// in parent we have to call the child method and update value of child by passing paramter from parent to chils function
function ImperativeRefParent() {
    let inputParentRef=useRef(null);
    let [name ,setName]=useState('')

    let clickHandler=()=>{
        inputParentRef.current.incrementHandler('best method') ;
        setName(inputParentRef.current.name)
    }
  return (
    <>
    <h1>ImperativeRefParent  </h1>
    <ImperativeRefChild ref={inputParentRef}></ImperativeRefChild>
    <h1>{name}</h1>
    <button onClick={clickHandler}>Click Counter</button>
    </>
  )
}

export default ImperativeRefParent