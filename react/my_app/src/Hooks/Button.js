import React from 'react'

function Button(props) {
    console.log('btnSalary rerendered')
  return (
    <button onClick={()=>props.salaryHandler()}>ButtonSalary</button>
  )
}

export default React.memo(Button)