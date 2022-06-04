import React, { useRef } from 'react'

const UseRefExample = () => {
    let inputref = useRef(null);

    let clickHandler=()=>{
        inputref.current.focus()
    }
    return (<>
        <input type='text' ref={inputref} />
        <button onClick={clickHandler}>Click ME</button>
    </>
    )
}

export default UseRefExample