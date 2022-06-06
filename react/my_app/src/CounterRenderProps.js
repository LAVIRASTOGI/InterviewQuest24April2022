import React, { useState } from 'react'

function CounterRenderProps(props) {
    let [count, setCount] = useState(0);
    let ClickHandler = () => {
        setCount(count + 1)
    }
    return (
        <>
            {props.render(count, ClickHandler)}
        </>

    )
}

export default CounterRenderProps