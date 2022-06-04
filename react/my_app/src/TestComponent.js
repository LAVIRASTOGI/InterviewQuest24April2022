import React, { useState } from 'react'

 const ControlledComponent = () => {
  let [inputVal , setInputVal]=useState('lavi');
  const inputHandler=(e)=>{
     setInputVal(()=>{
       inputVal=e.target.value
     })
  }
  return (
    <form>
      <input value={inputVal} onChange={inputHandler}></input>
    </form>
  )
}

export default ControlledComponent