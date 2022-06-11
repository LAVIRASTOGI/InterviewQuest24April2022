import React from 'react'

function ButtonCounter(props) {
    console.log('btnCounter rerendered')
  return (
    <button onClick={()=>props.countHandler()}>ButtonCounter</button>
  )
}

export default React.memo(ButtonCounter)