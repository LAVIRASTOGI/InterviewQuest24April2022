import React, { useState } from 'react'

function HoverCounter(props) {
  
    return (
        <h1 onMouseOver={props.clickHandler}>Hover {props.count} Times</h1>
    )
  
}

export default HoverCounter