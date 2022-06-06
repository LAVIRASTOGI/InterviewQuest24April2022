import React, { useState } from 'react'

function ClickCounter(props) {
    return (
        <button onClick={props.clickHandler}>Click {props.count} Times</button>
    )
}

export default ClickCounter