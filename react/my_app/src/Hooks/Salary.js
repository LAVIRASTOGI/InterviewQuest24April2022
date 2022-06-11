import React from 'react'

function Salary(props) {
    console.log('Salary rerendered')
  return (
    <div>Salary {props.salary}</div>
  )
}

export default React.memo(Salary)