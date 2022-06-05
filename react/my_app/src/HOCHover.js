import React, { useState } from 'react'
import HOCExample from './HOCExample'

function HOCHover(props) {
  
    return (
        <h1 onMouseOver={props.ClickHandler}> {props.name} Hovered {props.count} times</h1>
    )
}

export default HOCExample(HOCHover,100)