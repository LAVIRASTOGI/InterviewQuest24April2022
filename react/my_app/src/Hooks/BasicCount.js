import React from 'react'

function BasicCount(props) {
    console.log('count rerendered')
  return (
    <div>BasicCount {props.count}</div>
  )
}

export default React.memo(BasicCount)