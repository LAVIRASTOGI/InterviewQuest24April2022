import React, { useState } from 'react'
import HOCExample from './HOCExample';

function HOCCounter(props) {
   
    return (
        <button onClick={props.ClickHandler}>{props.name} Clicked {props.count} times</button>
    )
}

export default HOCExample(HOCCounter,10)