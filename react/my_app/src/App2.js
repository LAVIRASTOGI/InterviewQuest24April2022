import React from 'react'

const App2=React.forwardRef((props,ref)=>{
    return (<>
        {props.open ? <><div style={{ display: 'inline-block' }} ref={ref}><h1>div inside</h1> <h1 onClick={props.closeHandler}>**</h1></div></> : ''}
    </>)
})

export default App2